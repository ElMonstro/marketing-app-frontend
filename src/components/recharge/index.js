import React, { useState, useEffect } from 'react';
import PaymentService from '../../services/paymentServices';

import RechargeForm from '../forms/rechargeForm';
import {  Tabs, Row, Col } from 'antd';

import gold from '../../assets/gold.svg';
import silver from '../../assets/silver.svg';
import bronze from '../../assets/bronze.svg';



const rateColors = [
    gold, silver, bronze
]

const rateColorStyle = {
    width: '15px',
}

const ratesStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px',
    marginLeft: '20px',
    width: "76%"
}

const smsCalculatorStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px',
    width: '250px'
}

const rateRowStyle = {
    borderBottom: '1px solid #B6BCC9'
}

const rechargeStyle = {
    backgroundColor: 'whitesmoke',
    margin: '3px',
    borderRadius: '5px',
    padding: '5px',
    height: '450px',
    padding: '40px'
}


const Rates = props => {

    const { rates } = props;

    rates.sort((a, b) => ( Number(a.rate) - Number(b.rate)));
    const RateComponents = rates.map((rate, index) => {
        let priceRange;
        let previousIndex = null;
        (index === 0)? priceRange = `${rate.price_limit} and above`: previousIndex = index - 1;
        if (previousIndex !== null) {
            priceRange = `${rate.price_limit} - ${rates[previousIndex].price_limit}`;
        }
        if (index === rates.length-1) {
            priceRange = `0 - ${rates[index].price_limit}`;
        }

        return (<Row gutter={15} style={rateRowStyle} index={rate.id}>
            <Col span={2}><img style={rateColorStyle} src={rateColors[index]} alt={'rate color'}/></Col>
            <Col span={4} >{rate.name}</Col>
            <Col span={10} style={{fontWeight: '600'}}>{priceRange}</Col>
            <Col span={2} style={{fontWeight: '600'}}>{rate.rate}</Col>
            <Col span={2} style={{fontWeight: '700'}}>&nbsp;&nbsp;&nbsp;Kes</Col>
        </Row>
        )
        })


   return (
    <Col children={RateComponents}>

    </Col>
   )
}

const SmsCalculator = props => {
    const { rates, mpesaAmount } = props;
    let calculatedRate; 
    let smsNo = 0;
    if (rates === []) {
        console.log(rates)
        calculatedRate = rates[0].rate;
        const sortedRates = rates
        sortedRates.sort((a, b) => (Number(b.rate) - Number(a.rate)));
        sortedRates.map((rate) => {
            
        if (mpesaAmount >= rate.price_limit) {
            calculatedRate = rate.rate
        } 
    });

    smsNo = Math.floor(mpesaAmount / calculatedRate);

    }
    

    
    return (
        <Col span={24}>
            <Row>
    
                <Col span={24}>Amount:&nbsp;Kes&nbsp;{mpesaAmount}</Col>
                
            </Row>
            <Row>
                <Col>Rate:&nbsp; {calculatedRate}</Col>

            </Row>
            <Row>
                <Col span={24}>Total SMS: &nbsp; {smsNo}</Col>
            </Row>
                
        </Col>
    )
    
}

const Recharge = props => {
    const [mpesaAmount, setAmount] = useState(null);
    const [rates, setRates] = useState([]);

    useEffect( () => {
        async function getRates(){
            
        const response = await PaymentService.fetchRates();
        setRates(response.data.results);        }
        getRates();
        
        }, []);

    return (
        <Row style={rechargeStyle} gutter={50}>
            <Col span={10}>
              <RechargeForm setAmount={setAmount} />
            
            </Col>
            <Col  span={8}>
                <Row style={smsCalculatorStyle}><SmsCalculator  rates={rates} mpesaAmount={mpesaAmount}/></Row>       
            </Col>
            <Col style={ratesStyle}><span ><h6 style={{paddingLeft: '15px'}}>Rates</h6></span><Rates rates={rates}/></Col>
        </Row>
    )
}


export default Recharge;
