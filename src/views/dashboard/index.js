import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Layout, Menu, PageHeader } from 'antd';


import Groups from './../../components/groups';
import Send from './../../components/send';
import Recharge from '../../components/recharge';
import logo from '../../assets/logo.svg';
import './index.scss';

const { Content, Sider } = Layout;


class Dashboard extends Component {
    state = {
        activeNavItem: 'Send',
    }

    componentDidMount (){
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom();
    }

    handleClickedNavItem = (e) => {
        const itemClickedKey = e.key;
        console.log(e)
        if (itemClickedKey){
            this.setState({activeNavItem: itemClickedKey});
        }
    }

    returnDynamicSection = () => {
        const { activeNavItem } = this.state
        switch (activeNavItem) {
            case '2':
                return Groups

            case '1':
                return Send
            case '3':
                return Recharge
            default:
                return Send 
        }
    }

    render(){
        const navItems = [
            { title: 'Dashboard', icon:"fa fa-bar-chart" }, 
            { title: 'Send', icon: "fa fa-paper-plane" }, 
            { title: 'Recharge', icon: "fa fa-money" }, 
            { title: 'Schedule', icon: "fa fa-clock-o" }, 
            { title: 'Groups', icon: "fa fa-users" }, 
            { title: 'Settings', icon: "fa fa-cog" }
        ];
        const CurrentComponent = this.returnDynamicSection();
        console.log(CurrentComponent)
        return(
            <Layout style={{height: '100vh'}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                }}
                style={{ backgroundColor: '#00A0D3', color: 'white', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}
                >

                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={['1']} style={{ marginTop: '200px', backgroundColor: '#00A0D3', color: 'white' }}>
                  <Menu.Item onClick={this.handleClickedNavItem} key="1" icon={<i class="fa fa-paper-plane"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Send</span>
                  </Menu.Item>  
                  <Menu.Item onClick={this.handleClickedNavItem} key="2" icon={<i class="fa fa-users"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Groups</span>
                  </Menu.Item>
    
                  <Menu.Item onClick={this.handleClickedNavItem} key="3" icon={<i class="fa fa-money"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Recharge</span>
                  </Menu.Item>

                </Menu>

              </Sider>
            
              <Layout>
                <PageHeader
                  theme="dark"
                  ghost={false}
                  onBack={() => window.history.back()}
                  className="site-page-header"
                  style={{ paddingTop: '0'}}
                >
                <img src={logo} alt="Jambo SMS"/>
                </PageHeader>

                <Content style={{ margin: '24px 16px 0', overflow: 'scroll', background: 'white', padding: '20px' }}>
                   <CurrentComponent />
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