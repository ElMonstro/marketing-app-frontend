import React from 'react';
import TemplateButtons from './templateButtons';

import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 16 },
};

const SendSMSForm = (props) => {
  
  const { groups, form, onFinish } = props

  return (
    <Form {...layout} form={form} name="send-sms" onFinish={onFinish}>
        <div className="form-header"><h5>Send SMS</h5></div>
        <div className="form-container">
        <span>Select groups</span>
        <Form.Item name="groups" rules={[{ required: false }]}>
        <Select children={groups} mode="multiple" placeholder='Select groups'/>
        </Form.Item>
        <span>Add recipients</span>
        <Form.Item name="recipients" rules={[{ required: false }]}>
            <Input />
        </Form.Item>
        <TemplateButtons form={form} />
        <span>Message</span>
        <Form.Item name="message" rules={[{ required: true, message: "Please enter message" }]}>
            <TextArea rows={5}/>
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </div>
    </Form>
  );
};

export default SendSMSForm
