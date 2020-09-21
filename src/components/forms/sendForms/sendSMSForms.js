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
        <div style={{padding: '3% 4% 0% 4%'}}><h5 style={{margin: '0'}}>Send SMS</h5></div>
        <div className="form-container">
        <span>Select groups</span>
        <Form.Item name="groups" rules={[{ required: false }]}>
        <Select children={groups} mode="multiple" placeholder='Select groups'/>
        </Form.Item>
        <span>Add recipients</span>
        <Form.Item name="recipients" 
        rules={[
          { required: false },
          () => ({
                  validator(rule, value) {
                  const numbers = value.split(',');
                  let message;
                  for (var i = 0; i < numbers.length; i++) {
                   
                      if (message) {
                        break;
                      }
                      if (numbers[i].match(/^\d{9}$/g)) {
                      message = `Error on item no. ${i+1}. Please use this format: e.g +254723456897`
                      }
                      let promise
                      message ? promise = Promise.reject(message): promise = Promise.resolve();

                      return promise;
            
                  }
                  
                  }
              })
          
          ]}

        >
            <Input />
        </Form.Item>
        <TemplateButtons form={form} />
        <span>Message</span>
        <Form.Item name="message" rules={[{ required: true, message: "Please enter message" }]}>
            <TextArea rows={5}/>
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ backgroundColor: '#00A0D3', color: 'white'}}>
          Send
        </Button>
      </Form.Item>
      </div>
    </Form>
  );
};

export default SendSMSForm
