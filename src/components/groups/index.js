import React, { Component } from 'react';
import {connect} from 'react-redux';

import { fetchGroups } from './../../redux/action-creator';
import './index.scss';
class Groups extends Component {
    state = {
        groupActiveSms: true,
    }

    componentDidMount () {
        // fetch the groups and their data
        const {fetchGroups} = this.props;
        fetchGroups();

    }

    render() {
        const { groupActiveSms } = this.state;
        console.log(groupActiveSms)
        return(
            <div className="groups-container">
                <div className="groups">
                    <div className="group-toggle">
                        <div className={`${groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: true})}>Sms Groups</div>
                        <div className={`${!groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: false})}>Email Groups</div>
                    </div>
                    <div className="all-groups"></div>
                    <div className="new-group-btn">
                        <i className="fa fa-plus" aria-hidden="true"></i>add new group
                    </div>
                </div>
                <div className="group-members">
                    <div className="members-title">Members</div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchGroups,
}

const mapStateToProps = (state) => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Groups);