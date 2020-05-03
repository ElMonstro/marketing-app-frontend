import axios from 'axios';
import baseUrl from './baseURL';

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
            const groups = await axios.post(url, {group, first_name, last_name, phone}, requestDetails());
            return groups;

        } catch (error) {
            console.log('error in posting new member', error);
        }
    }

    static async fetchAllGroupMembers (params) {
        try {
            const {groups, activeGroupIndex} = params;
            const {members} = groups[activeGroupIndex];

            if(members){
                const groupMembers = await members.map(
                    async eachMember => {
                        const url = `${baseUrl()}/messages/group-members/${eachMember}/`;
                        const groupMember = await axios.get(url, requestDetails());
                        console.log(groupMember.data)
                        return groupMember.data;
                    }
                )
                const groupMembersResolved = await Promise.all(groupMembers)
                return groupMembersResolved;
            }

            return null;

        } catch (error) {
            console.log('error in fetching member', error);
        }
    }

}