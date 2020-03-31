import axios from 'axios';
import baseUrl from './index';

export default class AuthService {
    API_KEY = process.env.API_KEY;
    static async getAllcurrencies(){
        const url = `${baseUrl()}/auth/register/`;
        console.log('+'.repeat(10), url);
        return axios(
            {
                method: 'post',
                url: url,
                data: {
                    
                }
            }
        )

    }
}