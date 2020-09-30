import axios from 'axios';
import Swal from 'sweetalert2';
import { ratesUrl, payMpesaUrl, publicKeyUrl } from './urls';
import { requestHeaderDetails, notificationHandler, encryptData} from './utils';



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

    static async pay (payload) {
        
        try {

            const response = await axios.get(publicKeyUrl, requestHeaderDetails())
            const publicKey = response.data.public_key;
            payload.amount = encryptData(publicKey, payload.amount);
            console.log(payload.amount);
            const res = await axios.post(payMpesaUrl, payload, requestHeaderDetails());

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'ok',
               
            });
            
            return res;

        } catch (error) {
            notificationHandler(error.response, 'Error in payment, Please contact the Admin for further clarification');
        }
    }


}
