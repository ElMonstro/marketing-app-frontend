import React from 'react';
import { Form, Input, Button } from 'antd';
import PaymentService from '../../services/paymentServices';


const layout = {
    wrapperCol: { span: 22 },
  };
const tailLayout = {
    wrapperCol: { span: 16 },
  };


const RechargeForm = (props) => {

    const { setAmount } = props;
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
        values.transaction_desc = 'sms_topup';
        const response = PaymentService.payMpesa(values);
        response && form.resetFields();
    }
    
    

    return(
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        form={form}
        >   
            <span>Enter Mpesa phone No.</span>
            <Form.Item
                name="customer_number"
                rules={[{ required: true, message: 'Please input mpesa phone No.' }]}
            >
                    <Input />
            </Form.Item>

            <span>Enter amount</span>
            <Form.Item
                name="amount"
                rules={[{ required: true, message: 'Please input the amount of money you want to spend' }]}
            >
                <Input onChange={e => (Number(e.currentTarget.value) && setAmount(e.currentTarget.value))}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Purchase SMS
                </Button>
            </Form.Item>
    </Form>
    );
}

export default RechargeForm;
