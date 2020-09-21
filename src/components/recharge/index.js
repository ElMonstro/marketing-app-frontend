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
    width: "60%"
}

const smsCalculatorStyle = {
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '10px'
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

const ratez = [
    {
        "id": 6,
        "name": "Gold",
        "price_limit": 1000,
        "rate": "0.30"
    },
    {
        "id": 6,
        "name": "Silver",
        "price_limit": 500,
        "rate": "0.60"
    },
  
    {
        "id": 6,
        "name": "Bronze",
        "price_limit": 300,
        "rate": "0.90"
    },
    
]

const Rates = props => {

    const { rates } = props;
    const newRates = [...ratez];
    newRates.sort((a, b) => ( Number(a.rate) - Number(b.rate)));
    const RateComponents = newRates.map((rate, index) => {
        let priceRange;
        let previousIndex = null;
        (index === 0)? priceRange = `${rate.price_limit} and above`: previousIndex = index - 1;
        if (previousIndex !== null) {
            priceRange = `${newRates[previousIndex].price_limit} - ${rate.price_limit} `;
        }
        if (index === newRates.length-1) {
            console.log( rates.length, newRates)
            priceRange = `0 - ${newRates[index].price_limit}`;
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
    let calculatedRate = ratez[0].rate;
    const sortedRates = ratez
    sortedRates.sort((a, b) => (Number(b.rate) - Number(a.rate)));
    ratez.map((rate) => {
        
        if (mpesaAmount >= rate.price_limit) {
            calculatedRate = rate.rate
        } 
    });

    const smsNo = Math.floor(mpesaAmount / calculatedRate);

    
    return (
        <Col span={18}>
            <Row>
    
                <Col span={14}>Amount:&nbsp;Kes&nbsp;{mpesaAmount}</Col>
                
            </Row>
            <Row>
                <Col>Rate:&nbsp; {calculatedRate}</Col>

            </Row>
            <Row>
                <Col span={16}>Total SMS: &nbsp; {smsNo}</Col>
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
        const sortedRates = response.data.results.sort((a, b) => (Number(a.rate) - Number(b.rate)));
        setRates(sortedRates);        }
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
