import React, { Component } from 'react';
import { Layout, Menu, PageHeader } from 'antd';
import { connect } from 'react-redux';
import { changeSessionStatus } from './../../redux/action-creator';
import { useHistory } from "react-router-dom";
import Groups from './../../components/groups';
import Send from './../../components/send';
import Recharge from '../../components/recharge';
import logo from '../../assets/logo.svg';

import './index.scss';

const { Content, Sider } = Layout;

const RouterComponent = props => {

    const history = useHistory();
    const { isSessionExpired, changeSessionStatus } = props;
    isSessionExpired && history.push('/login');
    changeSessionStatus(false);


    return (<></>)
}

const mapDispatchToProps = {
    changeSessionStatus,
}

const mapStateToProps = ({dashboardStoreState}) => {
    const { isSessionExpired } = dashboardStoreState;
    return { isSessionExpired };

};

const RoutingComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
) (RouterComponent);

class Dashboard extends Component {
    state = {
        activeNavItem: this.props.defaultSelectedKey,
    }

    componentDidMount (){
        // eslint-disable-next-line no-undef
        componentHandler.upgradeDom();
    }

    handleClickedNavItem = (e) => {
        const itemClickedKey = e.key;
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
        const { defaultSelectedKey } = this.props;
        const CurrentComponent = this.returnDynamicSection();

        return(
            <Layout style={{height: '100vh'}}>
            <RoutingComponent />
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                }}
                onCollapse={(collapsed, type) => {
                }}
                style={{ backgroundColor: '#00A0D3', color: 'white', borderTopRightRadius: '20px', borderBottomRightRadius: '20px'}}
                >

                <div className="logo" />
                <Menu mode="inline" defaultSelectedKeys={[defaultSelectedKey]} style={{ marginTop: '200px', backgroundColor: '#00A0D3', color: 'white' }}>
                  <Menu.Item onClick={this.handleClickedNavItem} key="1" icon={<i className="fa fa-paper-plane"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Send</span>
                  </Menu.Item>  
                  <Menu.Item onClick={this.handleClickedNavItem} key="2" icon={<i className="fa fa-users"></i>}>
                        <span style={{marginLeft: '20px', fontWeight: 600}}>Groups</span>
                  </Menu.Item>
    
                  <Menu.Item onClick={this.handleClickedNavItem} key="3" icon={<i className="fa fa-money"></i>}>
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



export default Dashboard;
