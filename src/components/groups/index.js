import React, { Component } from 'react';
import {connect} from 'react-redux';
import randomcolor from 'randomcolor';
import Swal from 'sweetalert2';

import { Layout, Menu, PageHeader, Row, Col, Alert , Tabs, Table, Button, Modal, Form, Input, Typography} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, UsergroupAddOutlined } from '@ant-design/icons';

import GroupService from '../../services/groupsServices';
import { fetchGroups, fetchGroupMembers } from './../../redux/action-creator';
import NewGroupForm from '../forms/groupsForms/newGroupForm';
import NewMemberForm from '../forms/groupsForms/newMemberForm';
import EditMemberForm from '../forms/groupsForms/editForm';
import './index.scss';


const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
const { Title } = Typography;
class Groups extends Component {
    state = {
        groups: null,
        searching: false,
        groupActiveSms: true,
        activeGroupIndex: 0,
        activeGroupMembers: [],
        memberToBeEditted: "",
        visible: false,
    }

    componentDidMount () {
        const {activeGroupIndex} = this.state;
        const {fetchGroups, fetchGroupMembers} = this.props;
        fetchGroups();
        const {groups, activeGroupMembers} = this.props;
        this.setState({groups, activeGroupMembers});
        fetchGroupMembers(groups, activeGroupIndex)
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        console.log('getderivedstatefromprops', nextProps, prevState)
        const {searching} = prevState; 
        const {activeGroupIndex} = prevState;
        const {fetchGroupMembers, groups} = nextProps;
        if (nextProps.groups !== prevState.groups){
            if (!searching){
                fetchGroupMembers(groups, activeGroupIndex);
                return {groups: nextProps.groups};
            } else {
                return null;
            }
        }else if (nextProps.activeGroupMembers !== prevState.activeGroupMembers) {
            return {activeGroupMembers: nextProps.activeGroupMembers};
        }
    }

    renderAllGroups(groups) {
        console.log('RENDER ALL GROUPS RUNS')
        const {activeGroupIndex} = this.state;
        return groups.map(
            eachGroup => (
                <div className={`member-group ${activeGroupIndex === groups.indexOf(eachGroup) ? "active-member-group": null}`} 
                    onClick={() => this.updateActiveGroupMembersInStore(groups.indexOf(eachGroup))}>
                        <div style={{background: randomcolor({luminosity: 'dark',format: 'rgba'})}} className="first-letter">{eachGroup.name.charAt(0)}</div>
                        <div className="group-content">
                            <div className="group-name">{eachGroup.name}</div>
                            <div className="members-amount">{eachGroup.members.length} &nbsp; members</div>
                        </div>
                </div>
            )
        )
    }

    updateActiveGroupMembersInStore (groupIndex) {
        const {fetchGroupMembers} = this.props;
        this.setState({activeGroupIndex: groupIndex});
        const {groups} = this.state;
        fetchGroupMembers(groups, groupIndex)
    }

    renderGroupMembers(activeGroupMembers) {
            if (activeGroupMembers){
                return activeGroupMembers.map(
                    eachMember => (
                        <div className="member-item">
                            <div className="item-number">{activeGroupMembers.indexOf(eachMember) + 1}.</div>
                            <div className="item-name">{(eachMember.first_name)+" "+ (eachMember.last_name)}</div>
                            <div className="item-phone">{eachMember.phone}</div>
                            <div className="edit-icon" onClick={() => this.showEditDialogAndForm(true, eachMember, )}> <i class="fa fa-edit"></i> </div>
                            <div className="delete-icon" onClick={() => this.deleteGroupMember(eachMember)}> <i class="fa fa-trash"></i></div>
                        </div>
                )
            );
        }
    }

    deleteGroupMember(groupMember) {
        Swal.fire({
            title: 'Are you sure?',
            text: `you're about to delete ${(groupMember.first_name)+' '+(groupMember.last_name)}.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#808080',
            confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
              if(result.value){
                    const deletedMember = await GroupService.deleteGroupMember(groupMember.id)
                if (deletedMember.status === 204) {
                        const {fetchGroups} = this.props;
                        fetchGroups();
                    Swal.fire(
                        'Deleted!',
                        `${(groupMember.first_name)+' '+(groupMember.last_name)} has been deleted successfully.`,
                        'success'
                    )
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Delete was not successfull.Please try again',
                    })
                }
              }
          })
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

      onFinish = async (values) => {
        console.log('Success:', values);
        alert(JSON.stringify(values, null, 2));
        const response = await GroupService.postNewGroup(values);
        console.log('response add group++++++++++++++', response);
        fetchGroups();
        // this.setState({
        //     visible: false,
        //   });
      };
    
      onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
        
        // this.setState({
        //     visible: false,
        //   });
      };
    

    changeModalState = (formId) => {
        var dialog = document.querySelector(formId);
        dialog.showModal();
    }

    showEditDialogAndForm = (editFormVisible, memberToBeEditted) => {
        this.setState({editFormVisible, memberToBeEditted}, this.changeModalState("#edit-member-form"));
        
    }

    renderNewGroupForm = () => {
        return <NewGroupForm fetchGroups={this.props.fetchGroups}/>;
    }

    renderEditMemberForm = () => {
        const {memberToBeEditted, groups} = this.state;
        console.log('member to be edited', memberToBeEditted)
        return <EditMemberForm memberToBeEditted={memberToBeEditted} groups={groups} fetchGroups={this.props.fetchGroups}/>;
    }

    renderNewMemberForm = () => {
        const {groups} = this.state;
        if (groups) {
            const {activeGroupIndex} = this.state
            const activeGroupId = groups[activeGroupIndex].id;
            return <NewMemberForm 
                        fetchGroups={this.props.fetchGroups} 
                        activeGroupId={activeGroupId}
                        activeGroupMembers={this.props.activeGroupMembers} 
                        groups={groups} 
                        activeGroupIndex={activeGroupIndex}
                        fetchGroupMembers={fetchGroupMembers}
                    />
        }
        return( 
            <NewMemberForm fetchGroups={this.props.fetchGroups} />
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
        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
          };
          const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
          };

        const { groupActiveSms, editFormVisible } = this.state;
        const {groups, activeGroupMembers} = this.state;
          
          const data = groups;
          const columns = [{
            title: 'First Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
          },{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 150,
          }];

          const activeUserColumns = [{
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
            // width: 150,
          },{
          title: 'Last Name',
          dataIndex: 'last_name',
          key: 'last_name',
        //   width: 150
        },
        {
            title: 'Phone ',
            dataIndex: 'phone',
            key: 'phone',
            // width: 150
          }] 

        return(
            <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Row>
                    <Col span={24}>
                        <Title level={4}>Groups</Title>
                    </Col>
                </Row>
              <Tabs defaultActiveKey="2">
                <TabPane
                  tab={
                    <span style={{marginLeft: '30px'}}>
                      <i class="fa fa-comments-o" aria-hidden="true"></i>
                        <span style={{marginLeft: '15px'}}>SMS</span>
                    </span>
                  }
                  key="1">
                    <Row gutter={[16, 16]}>
                      <Col span={24}>
                        <Button type="primary" icon={<UsergroupAddOutlined />} size={'large'} block onClick={this.showModal}>Add New Group</Button>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={24}>
                      <Modal
                        title="Create New Group"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={null}
                        >
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: false }}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                                >
                                <Form.Item
                                    label="Group Name"
                                    name="groupName"
                                    rules={[{ required: true, message: 'Please input your group name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Description"
                                    name="description"
                                    rules={[{ required: true, message: 'Please input your group description!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                        <Table columns={columns} dataSource={groups} />
                      </Col>
                  </Row>
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
                  Email Stuff
                </TabPane>
              </Tabs>

            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{background: '#f5f5f5'}}>
                 <Row gutter={[16, 16]}>
                      <Col span={24}>
                      <Title level={4}>Members</Title>
                      </Col>
                  </Row>
                  <Row>
                      <Col span={24}>
                            <Table columns={activeUserColumns} dataSource={activeGroupMembers} />
                      </Col>
                  </Row>
            </Col>
          </Row>


            // <div className="groups-container">
            //     {this.renderNewGroupForm()}
            //     {/* {editFormVisible ? this.renderEditMemberForm() : null} */}
            //     {this.renderEditMemberForm()}
            //     <div className="groups">
            //         <div className="group-toggle">
            //             <div className={`${groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: true})}>Sms Groups</div>
            //             <div className={`${!groupActiveSms ? 'group-toggle-item active-group': 'group-toggle-item'}`} onClick={() => this.setState({groupActiveSms: false})}>Email Groups</div>
            //         </div>
            //         <div className="search-section">
            //             <div className="search-bar">
            //                 <input placeholder="search" onChange={this.filterGroups}></input>
            //                 <div className="search-icon"><i class="fa fa-search"></i></div>
            //             </div>
            //         </div>
            //         <div className="all-groups">
            //             {groups ? this.renderAllGroups(groups) : null}
            //         </div>
            //         <div className="new-group-btn" onClick={() => this.changeModalState('#new-group-form')}>
            //             <i className="fa fa-plus" aria-hidden="true"></i>
            //             add new group
            //         </div>
            //     </div>
            //     <div className="group-members">
            //         {this.renderNewMemberForm()}
            //         <div className="members-title">Members</div>
            //         <div className="utilities">
            //             <div className="new-member-utility" onClick={() => this.changeModalState('#new-member-form')}><i class="fa fa-plus"></i>add new member</div>
            //             <div className="csv-utility"><i class="fa fa-plus"></i>add csv</div>
            //         </div>

            //         <div className="all-group-members">
            //         <div  className="member-item table-header">
            //         <div className="item-number">-</div>
            //             <div className="item-name" style={{color: 'gray', fontWeight: 400}}>name</div>
            //             <div className="item-phone" style={{color: 'gray', fontWeight: 400}}>phone no</div>
            //             <div className="edit-icon">-</div>
            //             <div className="delete-icon">-</div>
            //         </div>
            //         {   groups ? this.renderGroupMembers(activeGroupMembers) : null}
            //         </div>
            //     </div>
            // </div>
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