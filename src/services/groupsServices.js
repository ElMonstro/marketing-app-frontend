import axios from 'axios';
import baseUrl from './baseURL';
import NewMemberForm from '../components/forms/groupsForms/newMemberForm';

const requestDetails = () => {
    const localStorage = window.localStorage;
    const accessToken = JSON.parse(localStorage.getItem('tokens')).access;
    const config = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };
    return config;
}

export default class GroupsService {
    static async fetchGroups () {
        try {
            const url = `${baseUrl()}/messages/groups/`;
            const groups = await axios.get(url, requestDetails());
            return groups;

        } catch (error) {
            console.log('some error happened in fetching groups', error);
        }
    }

    static async postNewGroup (newGroup) {
        const {groupName:name, description} = newGroup;
        try {
            const url = `${baseUrl()}/messages/groups/`;
            const groups = await axios.post(url, {name, description},requestDetails());
            return groups;

        } catch (error) {
            console.log('some error happened in posting groups', error);
        }
    }

    static async postNewMember (newMember) {
        try {
            const {groupId:group, first_name, second_name, phone} = newMember;
            const url = `${baseUrl()}/messages/groups/members`;
            const groups = await axios.post(url, {group, first_name, second_name, phone},requestDetails());
            return groups;
        } catch (error) {
            console.log('some error happened in posting new member', error);
        }
    }

}