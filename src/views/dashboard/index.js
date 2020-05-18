import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout, Menu, PageHeader, Row, Col, Avatar, Tabs, Table, Tag, Space} from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';


import DashboardSection from '../../components/dashboardSection';
import Settings from './../../components/settings';
import Groups from './../../components/groups';
import './index.scss';

const { Header, Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;

class Dashboard extends Component {
    state = {
        activeNavItem: 'Dashboard',
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
                    <Groups />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Jambo SMS ©2020 Created by Softsearch Limited.</Footer>
              </Layout>
          </Layout>
            // <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
            //     <header className="mdl-layout__header mdl-layout__header--transparent">
            //         <div className="mdl-layout__header-row">
            //         {/* <!-- Title --> */}
            //         <span className="mdl-layout-title">Jambo SMS</span>
            //         {/* <!-- Add spacer, to align navigation to the right --> */}
            //         <div className="mdl-layout-spacer"></div>
            //         {/* <!-- Navigation --> */}
            //         <div></div>
            //         </div>
            //     </header>
            //     <div className="mdl-layout__drawer">
            //         <nav className="mdl-navigation">
            //             {
            //             navItems.map((item) => (
            //                 activeNavItem === item.title ?
            //                 <div className="nav-item-active" id={item.title} onClick={this.handleClickedNavItem}>
            //                 <div className="icon">
            //                         <i className={item.icon} aria-hidden="true"></i>
            //                     </div>
            //                         {item.title}
            //                 </div>
            //                     : 
            //                 <div className="nav-item" id={item.title} onClick={this.handleClickedNavItem}>
            //                     <div className="icon">
            //                         <i className={item.icon} aria-hidden="true"></i>
            //                     </div>
            //                         {item.title}
            //                 </div>
            //             ))
            //         }
            //         </nav>
                    
            //     </div>

            //     <main className="mdl-layout__content">
            //         <div className="page-content">
            //             {this.returnDynamicSection(this.state.activeNavItem)}
            //         </div>
            //     </main>
            // </div>
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