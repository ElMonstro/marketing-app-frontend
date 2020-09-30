import axios from 'axios';
import Swal from 'sweetalert2';
import { refreshTokenUrl } from './urls';
import { requestHeaderDetails, notificationHandler } from './utils';

export default class ServicesBaseClass {

    async refreshToken() {

        const refresh = JSON.parse(localStorage.getItem('tokens')).refresh;
        const response = await axios.post(refreshTokenUrl, { refresh });
        response.data.refresh = refresh;
        window.localStorage.setItem('tokens',JSON.stringify(response.data));
    }

    async checkIfTokenExpired(response, callingFunction, params){
        if (response.status === 200){
            return response.data;
        } else if (response.status === 401 && response.data.code === 'token_not_valid') {
            await this.refreshToken();
            const res = await callingFunction(...params);
            return res.data;
        }
    }
}