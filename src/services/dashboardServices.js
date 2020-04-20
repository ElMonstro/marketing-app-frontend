import axios from 'axios';
import baseUrl from './baseURL';

export default class GroupsService {
    static async fetchGroups (accessToken) {
        try {
            const localStorage = window.localStorage;
            const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
            console.log('AAACCCEEEESSS', accessToken);
            const config = {
                headers: { Authorization: `Bearer ${accessToken}` }
            };

            const url = `${baseUrl()}/messages/groups/`;
            const groups = await axios.get(url, config);
            console.log('GGGRRRROOOOOUUUUPPPPSSSS', groups);

        } catch (error) {
            console.log('some error happened in fetching groups');
        }
    }
}