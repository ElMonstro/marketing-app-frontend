import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import MessageService from '../../../services/messageServices';
import './sendForms.scss';
import GroupsService from '../../../services/groupsServices';
import SendSMSForm from './sendSMSForms';
import SendEmailForm from './sendEmailForm';
import { fireNotification } from '../../../services/utils';

import { Form, Select } from 'antd';

const { Option } = Select;


const SendForm = (props) => {

    const [form] = Form.useForm();

    const [groups, setGroups] = useState([]);
    
    const { mode } = props;

    useEffect( () => {
    async function getGroups(){
        
        const response = await GroupsService.fetchGroups(mode)
        setGroups(response.data.map(group => <Option key={group.name + ',' + group.id}>{group.name}</Option>))
    }
    getGroups();
    
    }, []);

    const onFinish = async values => {
        if (!values.recipients && !values.groups) {
            return Swal.fire({
            title: 'Error!',
            text: `No message receivers entered. You must either select groups or enter recipients, or both, to receive the message.`,
            icon: 'error',
            confirmButtonText: 'close',
            })
        }
        
        let {recipients, groups, message, subject} = values;
        if (groups){
            
        }
        groups ? groups = groups.map((string) => {
            return parseInt(string.split(',')[1])
        } ): groups = [];
        let recepients;
        recipients ? recepients = recipients.split(','): recepients = [];
        const fieldErrors = await MessageService.sendMessage({groups, recepients, message, subject});
        if (!fieldErrors){ 
            form.resetFields()
        } else {
            let errors;
            errors = fieldErrors.detail;
            !errors? errors = fieldErrors.recepients:

            fireNotification('error', 'Error', `${errors}`)
            
        }
        
    };

    let currentForm;
    const formProps = { form, onFinish, groups }
    //choose form (email or sms send form)
    mode === 'sms'? currentForm = <SendSMSForm { ...formProps }/>:
     currentForm = <SendEmailForm { ...formProps }/>;

    return currentForm
}

export default SendForm;
