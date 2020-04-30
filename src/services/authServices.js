import axios from 'axios';
import baseUrl from './baseURL';

export default class AuthService {

    static async registerUser(userDetails) {
        try {
            const url = `${baseUrl()}/auth/register/`;
            const { email, phone, fullname: full_name, company, password, confirmPassword: confirmed_password, county } = userDetails;
            const newUser = { email, phone, full_name, company, password, confirmed_password, county }
            const response = await axios.post(url, newUser);
            return response;
            
        } catch (error) {
            return error.response.data
        }

    }

    static async loginUser(userDetails) {
        // try {
            const url = `${baseUrl()}/auth/login/`;
            const { email, password } = userDetails;
            const newUser = { email, password }
            const response = axios.post(url, newUser)
                .then(response =>{
                    return response;
                })
                .catch(error => {
                    console.log('EERRRROOORRR CATCH', error);
                });

            return response;
            
        // } 
        // catch (error) {
        //     console.log("REGISTER FORM ERROR+++++++", error);
        //     return error.response.data
        // }

    }
}