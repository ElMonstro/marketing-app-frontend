import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout, Menu, PageHeader, Row, Col, Avatar, Tabs, Table, Tag, Space} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';


import DashboardSection from '../../components/dashboardSection';
import Settings from './../../components/settings';
import Groups from './../../components/groups';
import Send from './../../components/send';
import Recharge from '../../components/recharge';
import './index.scss';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

class Dashboard extends Component {
    state = {
        activeNavItem: 'Send',
    }

    componentDidMount (){
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom()
    }

    handleClickedNavItem = (e) => {
        const itemClickedId = e.target.id;
        if (itemClickedId){
            this.setState({activeNavItem: itemClickedId});
        }
    }

    returnDynamicSection = (activeNavItem) => {
        switch (activeNavItem) {
            case 'Dashboard':
                return <DashboardSection />
            case 'Groups':
                return <Groups />
            case 'Settings':
                return <Settings />
            case 'Send':
                return <Send />
            case 'Recharge':
                return <Recharge />
            default:
                return <DashboardSection />
        }
    }

    render(){
        const { activeNavItem}  = this.state;
        const navItems = [
            { title: 'Dashboard', icon:"fa fa-bar-chart" }, 
            { title: 'Send', icon: "fa fa-paper-plane" }, 
            { title: 'Recharge', icon: "fa fa-money" }, 
            { title: 'Schedule', icon: "fa fa-clock-o" }, 
            { title: 'Groups', icon: "fa fa-users" }, 
            { title: 'Settings', icon: "fa fa-cog" }
        ];

        return(
            <Layout style={{height: '100vh'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
                theme='light'>

                <div className="logo" />
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} style={{marginTop: '200px'}}>
                  <Menu.Item key="1" icon={<i class="fa fa-bar-chart"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Dashboard</span>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<i class="fa fa-paper-plane"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Send</span>
                  </Menu.Item>
                  <Menu.Item key="3" icon={<i class="fa fa-money"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Recharge</span>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<i class="fa fa-clock-o"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Schedule</span>
                  </Menu.Item>
                  <Menu.Item key="5" icon={<i class="fa fa-users"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Groups</span>
                  </Menu.Item>
                  <Menu.Item key="6" icon={<i class="fa fa-cog"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Settings</span>
                  </Menu.Item>
                </Menu>

              </Sider>
            
              <Layout>
                <PageHeader
                  title="Jambo  SMS"
                  ghost={false}
                  onBack={() => window.history.back()}
                  className="site-page-header"
                  extra={[
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                  ]}
                  avatar={{ src: '.a/src/assets/app-icon.png' }}
                >
                </PageHeader>

                <Content style={{ margin: '24px 16px 0', overflow: 'scroll', background: 'white', padding: '20px' }}>
                    <Recharge />
                </Content>
              </Layout>
          </Layout>
        );
    }
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard)