import React from 'react';
import { Form, Input, Button } from 'antd';


const layout = {
    labelCol: { span: 5 },
    wrapperCol: { offset: 2, span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 19, span: 16 },
  };


const NewGroupForm = (props) => {

    const { onFinish, onFinishFailed, form } = props;

    return(
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        >
            <Form.Item
                label="Group Name"
                name="groupName"
                rules={[{ required: true, message: 'Please input your group name!' }]}
            >
                    <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input your group description!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button style={{ backgroundColor: '#00A0D3', color: 'white'}} type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
    </Form>
    );
}

export default NewGroupForm;
