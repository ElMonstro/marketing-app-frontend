import axios from 'axios';
import baseUrl from './baseURL';
import cheers from 'cheers-alert';
import 'cheers-alert/src/cheers-alert.css';

export default class AuthService {

    static async registerUser(userDetails) {
        try {
            const url = `${baseUrl()}/auth/register/`;
            const { email, phone, fullname: full_name, company, password, confirmPassword: confirmed_password, county } = userDetails;
            const newUser = { email, phone, full_name, company, password, confirmed_password, county }
            console.log('+++++++++', newUser);

            const response = await axios.post(url, newUser);
            return response;
            
        } catch (error) {
            console.log ('+++++++++kjhgfdfghuhgf', error.response.data);
        }

    }
}