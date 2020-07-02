import React from 'react';

import { Form, Input, Button } from 'antd';

const { TextArea } = Input;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 20 },
    };

const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
    };


const CreateTemplateForm  = (props) => {
    
    const { message, onFinish, form } = props;
    form.setFieldsValue({message: message});
    return (
        <Form {...layout} form={form} name="create-template" onFinish={onFinish}>
            <div className="template-form-container">
            <span>Name</span>
            <Form.Item name="name" rules={[{ required: true }]}>
            <Input />
            </Form.Item>
            <span>Message</span>
            <Form.Item name="message" rules={[{ required: true }]}>
                <TextArea />
            </Form.Item>
            </div>
                <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        )
    }

export default CreateTemplateForm;