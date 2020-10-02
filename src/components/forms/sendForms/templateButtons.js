import React, { useState, useEffect } from 'react';
import MessageService from '../../../services/messageServices';
import CreateTemplateForm from './createTemplateForm';

import './sendForms.scss';


import { Button, Select, Modal, Form } from 'antd';

const selectStyle = {
    flex: "none",
    order: "0",
    alignSelf: "center",
    marginRight: "32px",
    width: "150px",
    color: "black"
}

const buttonStyle = {
    flex: "none",
    order: "1",
    alignSelf: "center",
    marginRight: "32px",
}
const { Option } = Select;

const TemplateButtons = (props) => {


    const [templates, setTemplates] = useState([]);
    const [visible, toggleModal] = useState(false);
    
    const { form } = props;
    const [templateForm] = Form.useForm()

    useEffect( () => {
    async function fetchTemplates(){
        
        const data = await MessageService.fetchTemplates();
        
        data && setTemplates(data.results.map(template => <Option value={template.message} key={template.id}>{template.name}</Option>))
    }
    fetchTemplates();
    
    }, []);

    
    const saveTemplate = async values => {
        const response = await MessageService.createTemplate(values);
        templateForm.resetFields();
        toggleModal(false);
    }

    const showModal = ()=> {
        toggleModal(true)
    }

    const setMessage = selected => {
        form.setFieldsValue({
            'message': selected
        })
    }

    const handleCancel = () => {
        toggleModal(false);
        templateForm.resetFields();
    }

    return (
    <div id="template-bns">
        <Select name='select-tmplt' style={selectStyle} children={templates} placeholder='Select Template' onSelect={setMessage}/>
        <Button name="save-tmplt"  style={buttonStyle} onClick={showModal}>Save as Template</Button>
        <Modal
          visible={visible}
          title="Save Template"
          onCancel={handleCancel}
          footer={null}
        >
        <CreateTemplateForm message={form.getFieldValue('message')} onFinish={saveTemplate} form={templateForm}/>
        </Modal>
    </div>)
}

export default TemplateButtons;
