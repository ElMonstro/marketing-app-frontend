import axios from 'axios';
import {requestDetails, notificationHandler} from './utils';
import { messageUrlMappingObject, templatesURL } from './urls';


export default class MessageService {
    static async sendMessage (messageDetails) {
        try {
            const {groups, recepients, message, subject} = messageDetails;
            let mode;
            subject? mode = 'email': mode = 'sms';
            const url = messageUrlMappingObject[mode]
            const sent = await axios.post(url, {groups, recepients, message, subject}, requestDetails());
            notificationHandler(sent, "The message has been sent");

        } catch (error) {
            if (error.response.detail) {
                notificationHandler(error.response);
            } else {
                return error.response.data
            }
        }
    }

    static async fetchTemplates(){
        try {
            const templates = await axios.get(templatesURL, requestDetails());
            return templates;

        } catch (error) {
            console.log(error.response);
        }
    }

    static async createTemplate(templateData){
        try {
            const sent = await axios.post(templatesURL,  templateData, requestDetails());
            console.log(sent)
            notificationHandler(sent, 'The template has been created');
            return true;
        } catch (error) {
            notificationHandler(error.response);
            return false;
        }
    }
    static async fetchMessages(mode="sms") {
        
        try {
            const url = messageUrlMappingObject[mode];
            const messages = await axios.get(url, requestDetails());
            return messages;

        } catch (error) {
            console.log('error in fetching messages', error);
        }
    }
}
