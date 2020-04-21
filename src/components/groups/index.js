import React, { Component } from 'react';
import {connect} from 'react-redux';
import randomcolor from 'randomcolor';

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

    renderAllGroups(groups) {
        return groups.map(
            eachGroup => (
                <div className="member-group">
                    <div style={{background: randomcolor({luminosity: 'dark',format: 'rgba'})}} className="first-letter">{eachGroup.name.charAt(0)}</div>
                    <div className="group-content">
                        <div className="group-name">{eachGroup.name}</div>
                        <div className="members-amount">members number</div>
                    </div>
                </div>
            )
        )
    }

    render() {
        const { groupActiveSms } = this.state;
        const {groups} = this.props;
        console.log('groups state', groups);
        return(
            <div className="groups-container">
                <div className="groups">
                    <div className="group-toggle">
                        <div className={`${groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: true})}>Sms Groups</div>
                        <div className={`${!groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: false})}>Email Groups</div>
                    </div>
                    <div className="all-groups">
                        {groups ? this.renderAllGroups(groups) : null}
                    </div>
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

const mapStateToProps = ({dashboardStoreState}) => ({
    ...dashboardStoreState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Groups);