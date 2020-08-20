import axios from 'axios';
import baseUrl from './baseURL';
import { groupsUrlMappingObject, singleGroupURL, groupMembersCsvUrlMappingObject, newgroupMemberMappingObject } from './urls';
import { requestHeaderDetails, notificationHandler } from './utils';


export default class GroupsService {
    static async fetchGroups (mode="sms") {
        
        try {
            const url = groupsUrlMappingObject[mode];
            const groups = await axios.get(url, requestHeaderDetails());
            return groups;

        } catch (error) {
            console.log('error in fetching groups', error);
        }
    }

    static async postNewGroup (newGroup, mode) {
        const {groupName:name, description} = newGroup;
        try {
            const url = groupsUrlMappingObject[mode];
            const groups = await axios.post(url, {name, description}, requestHeaderDetails());
            notificationHandler(groups, 'Group created successfully')
            return groups;

        } catch (error) {
            notificationHandler(error.response, error.response.data.name);
            console.log('error in posting groups', error);
        }
    }

    static async postNewMember (newMember, mode) {
        let requestData
        try {
            if (mode === 'sms') {
                requestData  = {
                    group: newMember.group,
                    first_name: newMember.firstName,
                    last_name: newMember.secondName,
                    phone: newMember.phoneNumber

                }
            } else {
                requestData = {
                        group: newMember.group,
                        first_name: newMember.firstName,
                        last_name: newMember.secondName,
                        email: newMember.email
                }
            }
            const url = newgroupMemberMappingObject[mode];  
            const response = await axios.post(url, requestData, requestHeaderDetails());
            notificationHandler(response, "Member created successfully");
            return response;

        } catch (error) {
            notificationHandler(error.response, error.response.data.phone?error.response.data.phone: error.response.data.email);
        }
    }

    static async uploadCsv (csvData) {
        try {
            
            const {formData, mode } = csvData;
            const url = groupMembersCsvUrlMappingObject[mode];
            const response = await axios.post(url, formData, requestHeaderDetails());
            notificationHandler(response, "Upload successfull");
            return response;

        } catch (error) {
            notificationHandler(error.response, 'Error uploading csv');
            return console.log(error.response);
        }
    }

    static async fetchAllGroupMembers (params){
        try {
            const {group, mode} = params;
            const url = singleGroupURL(group)[mode];
            const response = await axios.get(url, requestHeaderDetails());
            const { member_list } = response.data;
            return member_list
        } catch (error) {
            console.log('error in fetching member', params);
        }
    }

    static async deleteGroupMember(id){
        try {     
            const url = `${baseUrl()}/messages/group-members/${id}/`;
            const groupMember = await axios.delete(url, requestHeaderDetails());
            return groupMember;
        } catch (error) {
            console.log('error in fetching member', error);
        }
    }

    static async editGroupMember (id, member, group) {
        try {
            const url = `${baseUrl()}/messages/group-members/${id}/`;
            const {firstName:first_name, secondName:last_name, phoneNumber:phone} = member;
            const edittedMember = await axios.put(url, {group:group.id, first_name, last_name, phone}, requestHeaderDetails());
            console.log('EDITTED MEMBER IN SERVICE', edittedMember, group)
            return edittedMember;
            
        } catch (error) {
            console.log('error in fetching member', error);
        }
    }

    static async deleteGroup(id, mode){
        try {     
            const url = singleGroupURL(id)[mode];
            const response = await axios.delete(url, requestHeaderDetails());
            notificationHandler(response, 'Group deleted');
        } catch (error) {
            notificationHandler(error.response, 'Error deleting group');
        }
    }

    static async removeGroupMembers(members, group, mode){
        try {     
            const url = singleGroupURL(group.id)[mode];
            const groupMember = await axios.put(url, {name: group.name, members}, requestHeaderDetails());
            console.log({name: group.name, members})
            notificationHandler(groupMember, 'Members removed');
            console.log(url, groupMember)
        } catch (error) {
            console.log(error.response)
            notificationHandler(error.response, 'Errors removing members');
        }
    }

}