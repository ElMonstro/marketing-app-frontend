import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Row, Col, notification, Tabs, Table, Button, Modal, Typography} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

import GroupService from '../../services/groupsServices';
import { fetchSMSGroups, fetchEmailGroups, fetchGroupMembers } from './../../redux/action-creator';
import NewMemberForm from '../forms/groupsForms/newMemberForm';
import GroupSection from './GroupSection';
import { UploadGroupsCsv } from './upload'; 
import './index.scss';
import deleteIcon from '../../assets/delete-icon.svg';


const { TabPane } = Tabs;
const { Title } = Typography;


class Groups extends Component {
    state = {
        smsGroups: [],
        emailGroups: [],
        searching: false,
        groupActiveSms: true,
        activeGroupIndex: 0,
        activeGroupMembers: [],
        visible: false,
        contactTitle: 'Phone',
        mode: 'sms',
        currentGroups: [],
        selectedRowKeys: []
    }

    componentDidMount () {
        const {fetchEmailGroups, fetchSMSGroups} = this.props;
        fetchEmailGroups();
        fetchSMSGroups();
      }

      onFinishGroupMember = async (values) => {
        const { fetchGroupMembers } = this.props;
        values.phoneNumber = '+254' + values.phoneNumber;
        const groups  = this.getCurrentGroups();
        const response = await GroupService.postNewMember({group: groups[this.state.activeGroupIndex].id, ...values}, this.state.mode);
        const fetchCurrentGroupsFunc = this.getCurrentGroupsFunc();
        fetchCurrentGroupsFunc();
        const mode = this.state.mode;
        fetchGroupMembers(groups[this.state.activeGroupIndex].id, mode);
        if (response) {
            this.setState({
                    visible: false,
                  });
        }
        
      };
    
      onFinishGroupMemberFailed = errorInfo => {
        this.openNotificationWithIcon('error', 'Groups', 'Error occurred try to add group member again.');
   
      };

      openNotificationWithIcon = (type, message, description) => {
        notification[type]({
          message: message,
          description:
            description,
        });
      };
    

    changeModalState = (formId) => {
        var dialog = document.querySelector(formId);
        dialog.showModal();
    }

    getCurrentGroups = () => {
      const { smsGroups, emailGroups } = this.props;
      const { contactTitle } = this.state;
      const currentGroupsMapper = {
        'Phone': smsGroups,
        'Email': emailGroups
      };
  
      return currentGroupsMapper[contactTitle];
  
    }

    getCurrentGroup = () => {
      const groups = this.getCurrentGroups();
      let group = null;
      groups?group = groups[this.state.activeGroupIndex]: group = null;
      group?group = group.id: group = null;
      return group;
    }

    getCurrentGroupsFunc = () => {
      const { fetchSMSGroups, fetchEmailGroups } = this.props;
      const currentGroupsFuctionMapper = {
        'Phone': fetchSMSGroups,
        'Email': fetchEmailGroups
      }
      return currentGroupsFuctionMapper[this.state.contactTitle]

    }



    onTabSwitch = activeKey => {
      let mode;
      let groups;
      const { smsGroups, emailGroups } = this.props;
        if (activeKey === "1") {
          mode = 'sms';
          groups = smsGroups;
          this.setState({
            contactTitle: 'Phone',
            mode,
          })} else {
            mode = 'email';
            groups = emailGroups;
            this.setState({
              contactTitle: 'Email',
              mode,
            });
        }
        this.setState({
          activeGroupIndex: 0
        })
        const { fetchGroupMembers } = this.props;
        console.log(groups, mode);
        if (groups.length > 0) { fetchGroupMembers(groups[0].id, mode); console.log(groups, 'ndani') }
    }

    onCheckboxChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys});
        console.log(selectedRowKeys)
    }

    onRemoveMembersClick = async event => {
      const { fetchGroupMembers } = this.props;
      const groups = this.getCurrentGroups();
      let group = null;
      groups?group = groups[this.state.activeGroupIndex]: group = null;
      const mode = this.state.mode;
      await GroupService.removeGroupMembers(this.state.selectedRowKeys, group, mode);
      this.state.selectedRowKeys && fetchGroupMembers(groups[this.state.activeGroupIndex].id, mode);
      this.setState({ selectedRowKeys: [] });
      fetchGroupMembers(this.getCurrentGroup(), mode);
      this.getCurrentGroupsFunc()();
      
    }
  
    render() {
      const contactKey = this.state.contactTitle.toLocaleLowerCase()
      const {emailGroups, smsGroups, activeGroupMembers, fetchGroupMembers } = this.props;
      activeGroupMembers && activeGroupMembers.map(member => {
        member.key = member.id;

      }) 

      if (!activeGroupMembers && this.getCurrentGroup) {
        fetchGroupMembers(this.getCurrentGroup(), this.state.mode)
      }
      const deleteButtonStyle = {
        height: '17px',
        cursor: 'pointer'
      }
      const activeUserColumns = [{
            title: 'First Name',
            dataIndex: 'first_name',
          },{
          title: 'Last Name',
          dataIndex: 'last_name',
        },
        {
            title:  this.state.contactTitle,
            dataIndex: contactKey,
    
          }]

      
      

        const mode = this.state.mode;
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onCheckboxChange,
        };


        return(
            <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Row>
                    <Col span={24}>
                        <Title level={4}>Groups</Title>
                    </Col>
                </Row>
              <Tabs defaultActiveKey="1" onChange={this.onTabSwitch}>
                <TabPane
                  tab={
                    <span style={{marginLeft: '30px'}}>
                      <i class="fa fa-comments-o" aria-hidden="true"></i>
                        <span style={{marginLeft: '15px'}}>SMS</span>
                    </span>
                  }
                  key="1">
                    <GroupSection groups={smsGroups} parentComponentObject={this} mode={mode} />
                </TabPane>
                <TabPane
                  tab={
                    <span style={{marginLeft: '30px'}}>
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <span style={{marginLeft: '15px'}}>EMAIL</span>
                    </span>
                  }
                  key="2"
                >
                  <GroupSection groups={emailGroups} parentComponentObject={this} mode={mode} />
                </TabPane>
              </Tabs>

            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{background: '#f5f5f5'}}>
                 <Row>
                      <Col span={24}>
                      <Title level={4}>Members</Title>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={8}>
                      <Button onClick={this.onRemoveMembersClick} type="link" style={{marginLeft: '5px', marginTop: '10px', color: 'red'}}>
                        <img alt={'delete icon'} src={deleteIcon} style={deleteButtonStyle} />&nbsp;delete
                        </Button>
                      </Col>
                      <Col span={8}>
                        <Button type="link" icon={<UserAddOutlined />}  size={'large'} block onClick={() => this.setState({visible: true})}><span style={{paddingTop: '5px'}}>add</span></Button>
                      </Col>
                      <Col span={8}>
                        <UploadGroupsCsv getCurrentGroup={this.getCurrentGroup} fetchGroups={this.getCurrentGroupsFunc()} fetchGroupMembers={this.props.fetchEmailGroups} mode={mode}/>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={24}>
                      <Modal
                        title="Create New Group Member"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={() => this.setState({visible: false})}
                        footer={null}
                        >
                            <NewMemberForm onFinish={this.onFinishGroupMember} onFinishFailed={this.onFinishGroupMemberFailed} mode={this.state.mode} />
                        </Modal>
                            <Table columns={activeUserColumns} dataSource={activeGroupMembers} rowSelection={rowSelection}/>
                      </Col>
                  </Row>
            </Col>
          </Row>
        );
    }
}

const mapDispatchToProps = {
    fetchEmailGroups,
    fetchSMSGroups,
    fetchGroupMembers,
}

const mapStateToProps = ({dashboardStoreState}) => (
{
    ...dashboardStoreState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Groups);
