import axios from 'axios';
import baseUrl from './baseURL';
import { requestHeaderDetails, checkSessionStatus } from './utils';

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
        try{
            const url = `${baseUrl()}/auth/login/`;
            const { email, password } = userDetails;
            const newUser = { email, password }
            const response = axios.post(url, newUser)
                .then(response =>{
                    return response;
                })
                .catch(error => {
                });

            return response;
            
        }catch (error) {
            return error.response.data
        }
            
    }

    static async fetchProfile() {
        try{
            const url = `${baseUrl()}/auth/profile/`;
            const response = await axios.get(url, requestHeaderDetails());
            console.log(response.data)
            return response;
        }catch (error) {
            checkSessionStatus(error.response);
            return error.response.data
        }
            
    }

    static async fetchPublicKey() {
        try{
            const url = `${baseUrl()}/auth/public-key/`;
            const response = await axios.get(url, requestHeaderDetails());
            return response;
        }catch (error) {
            checkSessionStatus(error.response);
            return error.response.data
        }
            
    }
}