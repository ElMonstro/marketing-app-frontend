import React from 'react';
import { Form, Button, Input, Col, Row } from 'antd';
import { phoneNumberIsValid } from '../validation'
import { number } from 'yup';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { offset: 2, span: 15 },
  };
const tailLayout = {
    wrapperCol: { offset: 19, span: 16 },
  };


const SMSContactItem = () => {


    return (
        <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                    { required: true, message: "Please enter member's phone number!",
                    },
                    () => ({
                        validator(rule, value) {
                        if (value.match(/^\d{9}$/g)) {
                            return Promise.resolve();
                        }
                        return Promise.reject('Enter correct format(9 digits): e.g 723456897');
                        },
                    })
                
                ]}
            >
            
                    <Input addonBefore="254" placeholder="724568924" />
        
            
            </Form.Item>
    );

}


const EmailContactItem = () => {


    return (
        <Form.Item
                label="Email"
                name="email"
                rules={[
                    { required: true, message: "Please enter member's email!",
                    type: 'email'
                    }
                ]}
            >
            
                    <Input placeholder="terrio.gmail.com" />
        
            
            </Form.Item>
    );

};



const NewMemberForm = (props) => {
    const [form]  = Form.useForm();

    const { onFinish,  onFinishFailed, mode } = props;
    return(
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: false }}
            onFinish={async values => {
                await onFinish(values);
                form.resetFields();
            }}
            onFinishFailed={onFinishFailed}
            form={form}
            >
            <Form.Item
                label="First Name"
                name="firstName"
                rules={[{ required: true, message: "Please input member's first name!" }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Second Name"
                name="secondName"
                rules={[{ required: true, message: "Please input member's second name!" }]}
            >
                <Input />
            </Form.Item>

            {mode==='sms'?<SMSContactItem />: <EmailContactItem />}

            <Form.Item {...tailLayout}>
                <Button style={{ backgroundColor: '#00A0D3', color: 'white'}} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    );
}

export default NewMemberForm;
