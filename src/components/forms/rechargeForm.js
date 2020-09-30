import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import { Form, Input, Button } from 'antd';
import IntaSend from 'intasend-inlinejs-sdk';
import {connect} from 'react-redux';

import paymentServices from '../../services/paymentServices';
import { getProfile } from '../../services/utils';



const layout = {
    wrapperCol: { span: 22 },
  };
const tailLayout = {
    wrapperCol: { span: 16 },
  };

let amount;
let refNo;

function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}

bindEvent(window, 'message', function (e) {
if (e.data) {
    if (e.data.message) {
if (e.data.message.identitier === 'intasend-status-update-cdrtl') {
    if (e.data.message.state === "COMPLETE") {
        const payload = { ref_no: refNo, amount, payment_action: 'sms_topup' }
        amount && paymentServices.pay(payload);
    }
}
    }
}
});

const RechargeForm = (props) => {

    IntaSend.setup({
        publicAPIKey: "ISPubKey_test_592ad4eb-e5cb-4fe4-abea-719c011b7337",
        redirectURL: '',
        live: false
    });

    const profile = getProfile();
    const { email } = profile;

    const { setAmount } = props;
    const [form] = Form.useForm();

    const onFinish = (values) => {
        refNo = uuidv4();
        amount = values.amount;
        amount && IntaSend.run({
            amount: amount, 
            currency: "KES",
            email: email,
            api_ref: refNo,
            
        });

    };
    
    

    return(
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        form={form}
        >
            <span>Enter amount</span>
            <Form.Item
                name="amount"
                rules={[{ required: true, message: 'Please input the amount of money you want to spend' }]}
            >
                <Input onChange={e => (Number(e.currentTarget.value) && setAmount(e.currentTarget.value))}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button className="tp_button" data-api_ref="payment-link" type="primary" htmlType="submit" style={{ backgroundColor: '#00A0D3', color: 'white'}}>
                Purchase SMS
                </Button>
            </Form.Item>
    </Form>
    );
}

export default RechargeForm;
