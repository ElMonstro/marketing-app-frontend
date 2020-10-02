import axios from 'axios';
import {requestHeaderDetails, notificationHandler, checkSessionStatus } from './utils';
import { messageUrlMappingObject, templatesURL } from './urls';


export default class MessageService {
    static async sendMessage (messageDetails) {
        try {
            const {groups, recepients, message, subject} = messageDetails;
            let mode;
            subject? mode = 'email': mode = 'sms';
            const url = messageUrlMappingObject[mode]
            const response = await axios.post(url, {groups, recepients, message, subject}, requestHeaderDetails());
            
            notificationHandler(response, "The message has been sent");

        } catch (error) {

            if (error.response.data.recepients) {
                notificationHandler(error.response, error.response.data.recepients);
            } else if (error.response.data.detail){
                notificationHandler(error.response, error.response.data.detail);

            } else {
                checkSessionStatus(error.response);
            }

            return error.response.status
        }
    }

    static async fetchTemplates(){
        try {
            const response = await axios.get(templatesURL, requestHeaderDetails());
            return response.data;
 
        } catch (error) {
            checkSessionStatus(error.response);
            console.log(error.response);
        }
    }

    static async createTemplate(templateData){
        try {
            const sent = await axios.post(templatesURL,  templateData, requestHeaderDetails());
            console.log(sent)
            notificationHandler(sent, 'The template has been created');
            return true;
        } catch (error) {
            checkSessionStatus(error.response);
            notificationHandler(error.response);
            return false;
        }
    }
    static async fetchMessages(mode="sms") {
        
        try {
            const url = messageUrlMappingObject[mode];
            const response = await axios.get(url, requestHeaderDetails());
            return response.data;

        } catch (error) {
            checkSessionStatus(error.response);
            console.log('error in fetching messages', error);
        }
    }
}
