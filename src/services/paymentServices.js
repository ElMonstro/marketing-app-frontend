import axios from 'axios';
import baseUrl from './baseURL';
import { ratesUrl, payMpesaUrl } from './urls';
import { requestHeaderDetails, notificationHandler } from './utils';


export default class PaymentService {
    static async fetchRates () {
        
        try {
            const rates = await axios.get(ratesUrl, requestHeaderDetails());
            return rates;

        } catch (error) {
            notificationHandler(error.response, 'error in fetching rates')
            console.log('error in fetching rates', error);
        }
    }

    static async payMpesa (payload) {
        
        try {
            const url = payMpesaUrl;
            const response = await axios.post(url, payload, requestHeaderDetails());
            notificationHandler(response, 'You will receive a prompt on your phone shortly');
            return response;

        } catch (error) {
            console.log('error in mpesa ayment', error);
        }
    }


}
