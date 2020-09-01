import React, {useState} from 'react';

import { Row, Col, Table, Button, Modal, Input, Form} from 'antd';
import { UsergroupAddOutlined } from '@ant-design/icons';

import NewGroupForm from '../forms/groupsForms/newGroupForm';
import groupIcon from '../../assets/group-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';
import {connect} from 'react-redux';

import GroupService from '../../services/groupsServices';
import { fetchGroupMembers } from '../../redux/action-creator';

const { Search } = Input;

const groupIconStyle = {
  height: '30px',

};

const groupNameStyle = {
  fontWeight: 700,

};

const deleteIconStyle = {
  height: '15px',
  cursor: 'pointer'
}


const GroupsTable = props => {
  const { filteredGroups, groups, mode, columns, parentComponentObject } = props;
  return (
    <Table columns={columns} dataSource={filteredGroups? filteredGroups: groups} 
                rowClassName={(record, index) => index === parentComponentObject.state.activeGroupIndex ? 'active-group-row' : null}
                onRow={(record, rowIndex) => {
                    return {
                      onClick: event => {
                        parentComponentObject.setState({activeGroupIndex: rowIndex});
                        props.fetchGroupMembers(groups[rowIndex].id, mode);
                      }
                    };
                  }}
            />
  )
}

export const DeleteButton = props => {

  const { mode, itemId, deleteIconStyle, deleteFunction, updateGroups } = props;
  
  const deleteItem = async event => {
    const response = await deleteFunction(itemId, mode);
    updateGroups();
  }
  
  return (<span>
  <img onClick={deleteItem} alt={'delete icon'} src={deleteIcon} style={deleteIconStyle} />
  </span>);
};

const GroupSection = props => {

    const { parentComponentObject, groups, mode } = props;
    const [ form ] = Form.useForm();
    groups && groups.map(group => {group.memberNo = group.members.length});

    const [filteredGroups, setGroups] = useState(null);
    const [addGroupVisible, showAddGroupModal] = useState(false);
    const filterGroups = (e) => {
      const value = e.target.value;
      e.preventDefault();
      const filteredGroups = groups.filter(
          eachGroup => eachGroup.name.toLowerCase().includes(value.toLowerCase())
      );
      
      value? setGroups(filteredGroups): setGroups(null);

    };

    const onFinish = async (values) => {  
      const response = await GroupService.postNewGroup(values, mode);
      const fetchCurrentGroupsFunc = parentComponentObject.getCurrentGroupsFunc();
      fetchCurrentGroupsFunc();
      if (response){
          showAddGroupModal(false);
          form.resetFields();
      };
    }

    const columns = [
        {
          title: '',
          width: 50,
          dataIndex: 'group-icon',
          render:  () => <img alt={'group icon'} src={groupIcon} style={groupIconStyle} />
      },
        {
      dataIndex: 'name',
      key: 'name',
      width: 200,
      render: text => (
        <span style={groupNameStyle}>{text}</span>
      )
        },
    {
      dataIndex: 'memberNo',
      key: 'memberNo',
      width: 500,
      render: text => (
        <span>{text} members</span>
      )
    },
    {
      dataIndex: 'id',
      key: 'id',
      width: 100,
      render: text => (
        <DeleteButton itemCategory="group" itemId={text} 
        deleteIconStyle={deleteIconStyle}
        mode={mode} 
        deleteFunction={GroupService.deleteGroup} 
        updateGroups={parentComponentObject.getCurrentGroupsFunc()}/>
      )
    },
  ];  
    return (
      <>
      <Row gutter={30} style={{ backgroundColor: '#fff!important'}}>
          <Col span={12} style={{ backgroundColor: '#fff!important'}}>
            <Search placeholder="search groups" onChange={filterGroups} />
          </Col>
          <Col span={6} offset={6}>
            <Button type="primary" 
            style={{ backgroundColor: '#00A0D3', color: 'white'}} 
            icon={<UsergroupAddOutlined />} 
            size={'medium'}  onClick={() => showAddGroupModal(true)}>
            Add Group</Button>
          </Col>
          
      </Row>
      <Row>
          <Col span={24}>
                <Modal
                    title="Add New Group"
                    visible={addGroupVisible}
                    onOk={parentComponentObject.handleOk}
                    onCancel={() => (showAddGroupModal(false))}
                    footer={null}
                    >
                        <NewGroupForm onFinish={onFinish} form={form}/>
                    </Modal>
            <GroupsTable columns={columns} groups={groups}
             filteredGroups={filteredGroups} fetchGroupMembers={props.fetchGroupMembers}
              parentComponentObject={parentComponentObject} mode={mode} />
          </Col>
      </Row>
      </>
    )
    }

  const mapDispatchToProps = {
      fetchGroupMembers,
  }

  const mapStateToProps = ({dashboardStoreState}) => (
  {
      ...dashboardStoreState
  });
  
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  ) (GroupSection);
  
