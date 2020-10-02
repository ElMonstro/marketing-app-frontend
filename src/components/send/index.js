import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import {  Tabs, Row, Col, message} from 'antd';

import './index.scss'
import SendForm from '../forms/sendForms/sendForm';
import { truncate } from '../../services/utils';
import { fetchSMSHistory, fetchEmailHistory, changeCurrentMessages } from './../../redux/action-creator';

const { TabPane } = Tabs;

const messagesTabMapper = {
    1: 'sms',
    2: 'emails'
}

const messageHistoryStyle = {
    /* Rectangle 102 */
    width: '100%',
    height: '75px, auto',
    left: '0px',
    top: '0px',
    marginBottom: '10px',

    /* Primary color - clients Dash */

    background: '#00A0D3',
    borderRadius: '5px',
    paddingTop: "5px",
    color: "white",
    paddingBottom: "5px"
}

const timeSpanStyle = {
    fontSize: "10px",
    display: "none"
}


const MessagesColumn = props => {
    const { messages, currentMessages } = props
    const messagesToDisplay = messages[currentMessages]
    const children = messagesToDisplay.map(message => {
        message.message = truncate(message.message, 25, true)
        return (<Col style={messageHistoryStyle} key={message.id}>
            <Row><Col offset={15} style={timeSpanStyle}>33 min ago</Col></Row>
            <Row>
                <span><i className="fa fa-comments-o" aria-hidden="true"></i> Message: &nbsp; </span>
                {message.message}
            </Row>
            <Row><span><i className="fa fa-users" aria-hidden="true"></i> Recipients: &nbsp; </span>
                {message.recepients.length}
            </Row>
        </Col>);
    }
    );
    return (
        <Col>
            <div id={'history-header'}><span className={"header"}><h6>Message History</h6></span></div>
            <div className={"msg-history"}>
            { children }
            </div>
        </Col>
    )
    }


const Send =  props => {

        const { emails, sms, fetchSMSHistory, fetchEmailHistory, currentMessages, changeCurrentMessages } = props
        const messages = {
            emails,
            sms
        }

        useEffect( () => {
            fetchEmailHistory();
            fetchSMSHistory();
            
            }, []);
        
        const onTabChange = key => {
            changeCurrentMessages(messagesTabMapper[key]);    
        }



        return (
        <Row gutter={16}>
            <Col span={18}>
                <Tabs defaultActiveKey="1" onChange={onTabChange}>
                    <TabPane
                        tab={
                        <span style={{marginLeft: '30px'}}>
                            <i class="fa fa-comments-o" aria-hidden="true"></i>
                            <span style={{marginLeft: '15px'}}>SMS</span>
                        </span>
                        }
                        key="1">
                        <SendForm mode='sms'/>
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
                            <SendForm mode='email'/>
                    </TabPane>
                </Tabs>
            </Col>
            <Col span={6}>
                <MessagesColumn messages={messages} currentMessages={currentMessages}/>
            </Col>
        </Row>
        )

}

const mapDispatchToProps = {
    fetchSMSHistory,
    fetchEmailHistory,
    changeCurrentMessages,
}

const mapStateToProps = ({sendStoreState}) => ({
    ...sendStoreState
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (Send);
