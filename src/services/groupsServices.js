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
            console.log('GROUPS SERVICE RESPONSE', groups)
            return groups;

        } catch (error) {
            console.log('error in fetching groups', error);
        }
    }

    static async postNewGroup (newGroup) {
        const {groupName:name, description} = newGroup;
        try {
            const url = `${baseUrl()}/messages/groups/`;
            const groups = await axios.post(url, {name, description}, requestDetails());
            return groups;

        } catch (error) {
            console.log('error in posting groups', error);
        }
    }

    static async postNewMember (newMember) {
        try {
            const {group, firstName:first_name, secondName:last_name, phoneNumber:phone} = newMember;
            const url = `${baseUrl()}/messages/groups/members/`;
            console.log('ADDING NEW MEMBER', {group, first_name, last_name, phone})
            const groups = await axios.post(url, {group, first_name, last_name, phone}, requestDetails());
            console.log('ADDING NEW MEMBER response', groups)
            return groups;

        } catch (error) {
            console.log('error in posting new member', error);
        }
    }

    static fetchGroupMembers (id) {
        try {
            const url = `${baseUrl()}/messages/group-members/${id}/`;
            const groupMember = axios.get(url, requestDetails());
            return groupMember;

        } catch (error) {
            console.log('error in fetching member', error);
        }
    }

}