import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDashboardDataAction } from './../../redux/action-creator';

class DashboardSection extends Component {

    componentDidMount() {
        fetchDashboardDataAction();
    }

    render() {
        return(
            <div>Dashboard</div>
        );
    }
}

const mapDispatchToProps = {
    fetchDashboardDataAction,
}

const mapStateToProps = (data) => ({
    data: data
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DashboardSection)