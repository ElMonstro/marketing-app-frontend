import React, { Component } from 'react';
import {connect} from 'react-redux';
import randomcolor from 'randomcolor';

import { fetchGroups, fetchGroupMembers } from './../../redux/action-creator';
import NewGroupForm from '../forms/groupsForms/newGroupForm';
import NewMemberForm from '../forms/groupsForms/newMemberForm';
import GroupsService from '../../services/groupsServices';
import './index.scss';
class Groups extends Component {
    state = {
        groups: null,
        searching: false,
        groupActiveSms: true,
        activeGroupIndex: 0,
    }

    componentDidMount () {
        const {activeGroupIndex} = this.state;
        const {fetchGroups} = this.props;
        fetchGroups();
        const {groups} = this.props;
        this.setState({groups});
        fetchGroupMembers(groups, activeGroupIndex);
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        const {searching} = prevState;
        if (nextProps.groups !== prevState.groups){
            if (!searching){
                return {groups: nextProps.groups};
            } else {
                return null;
            }
        }else {

            return null;
        }
    }

    renderAllGroups(groups) {
        const {activeGroupIndex} = this.state;
        return groups.map(
            eachGroup => (
                <div className={`member-group ${activeGroupIndex === groups.indexOf(eachGroup) ? "active-member-group": null}`} onClick={() => this.setState({activeGroupIndex: groups.indexOf(eachGroup) })}>
                    <div style={{background: randomcolor({luminosity: 'dark',format: 'rgba'})}} className="first-letter">{eachGroup.name.charAt(0)}</div>
                    <div className="group-content">
                        <div className="group-name">{eachGroup.name}</div>
                        <div className="members-amount">{eachGroup.members.length} &nbsp; members</div>
                    </div>
                </div>
            )
        )
    }

    fetchActiveGroupMembers() {
        const {activeGroupIndex, groups} = this.state;
        if (groups && groups.length > 0){
            const {members} = groups[activeGroupIndex];
            if (members) {
                const allMembers = members.map(
                    async eachMember => {
                        const member = await GroupsService.fetchGroupMember(eachMember);
                        console.log(member)
                        return member;
                }
            );
            this.setState(allMembers);
        }
    }
    }

    // renderGroupMembers(groups) {
    //     const {activeGroupIndex} = this.state;
    //     if (groups.length > 0){
    //         const {members} = groups[activeGroupIndex];
    //         if (members){
    //             return members.map(
    //                 eachMember => (
    //                     <div className="member-item">
    //                         <div className="item-number">{members.indexOf(eachMember) + 1}.</div>
    //                         <div className="item-name">{eachMember}</div>
    //                         <div className="item-phone">+254703456654</div>
    //                         <div className="edit-icon"> <i class="fa fa-edit"></i> </div>
    //                         <div className="delete-icon"> <i class="fa fa-trash"></i></div>
    //                     </div>
    //             )
    //         );
    //     }
    // }
    // }

    renderGroupMembers(groups) {
        const {activeGroupIndex} = this.state;
        if (groups.length > 0){
            const {members} = groups[activeGroupIndex];
            if (members){
                return members.map(
                    eachMember => (
                        <div className="member-item">
                            <div className="item-number">{members.indexOf(eachMember) + 1}.</div>
                            <div className="item-name">{eachMember}</div>
                            <div className="item-phone">+254703456654</div>
                            <div className="edit-icon"> <i class="fa fa-edit"></i> </div>
                            <div className="delete-icon"> <i class="fa fa-trash"></i></div>
                        </div>)
                
            );
        }
    }
    }

    changeModalState = (formId) => {
        var dialog = document.querySelector(formId);
        dialog.showModal();
    }

    renderNewGroupForm = () => {
        return( 
            <NewGroupForm fetchGroups={this.props.fetchGroups}/>
        );
    }

    renderNewMemberForm = () => {

        const {groups} = this.state;

        if (groups) {
            const {activeGroupIndex} = this.state
            const activeGroupId = groups[activeGroupIndex].id;
            return <NewMemberForm fetchGroups={this.props.fetchGroups} activeGroupId={activeGroupId}/>
        }
        return( 
            <NewMemberForm fetchGroups={this.props.fetchGroups}/>
        );
    }

    filterGroups = (e) => {
        e.preventDefault();
        const {groups} = this.props;
        console.log('searchword', e.target.value);
        const filteredGroups = groups.filter(
            eachGroup => eachGroup.name.includes(e.target.value)
        )
        if(e.target.value) {
            this.setState(() => ({groups: filteredGroups, searching: true}));
        }
        else{
            this.setState(() => ({groups: filteredGroups}));
        }
    }

    render() {
        const { groupActiveSms } = this.state;
        const {groups} = this.state;
        return(
            <div className="groups-container">
                {this.renderNewGroupForm()}
                <div className="groups">
                    <div className="group-toggle">
                        <div className={`${groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: true})}>Sms Groups</div>
                        <div className={`${!groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: false})}>Email Groups</div>
                    </div>
                    <div className="search-section">
                        <div className="search-bar">
                            <input placeholder="search" onChange={this.filterGroups}></input>
                            <div className="search-icon"><i class="fa fa-search"></i></div>
                        </div>
                    </div>
                    <div className="all-groups">
                        {groups ? this.renderAllGroups(groups) : null}
                    </div>
                    <div className="new-group-btn" onClick={() => this.changeModalState('#new-group-form')}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        add new group
                    </div>
                </div>
                <div className="group-members">
                    {this.renderNewMemberForm()}
                    <div className="members-title">Members</div>
                    <div className="utilities">
                        <div className="new-member-utility" onClick={() => this.changeModalState('#new-member-form')}><i class="fa fa-plus"></i>add new member</div>
                        <div className="csv-utility"><i class="fa fa-plus"></i>add csv</div>
                    </div>

                    <div className="all-group-members">
                    <div  className="member-item table-header">
                    <div className="item-number">-</div>
                        <div className="item-name" style={{color: 'gray', fontWeight: 400}}>name</div>
                        <div className="item-phone" style={{color: 'gray', fontWeight: 400}}>phone no</div>
                        <div className="edit-icon">-</div>
                        <div className="delete-icon">-</div>
                    </div>
                    {   groups ? this.renderGroupMembers(groups) : null}
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchGroups,
    fetchGroupMembers,
}

const mapStateToProps = ({dashboardStoreState}) => ({
    ...dashboardStoreState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Groups);