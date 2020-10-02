import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './index.scss';

import bulkSmsSvg from './../../assets/sms-illust.svg';
import sendBulkSvg from './../../assets/icon-send-bulk.svg';
import sendPersonalizedSvg from './../../assets/icon-send-personalized.svg';
import twoWayComSvg from './../../assets/icon-two-way-com.svg';
import appIcon from './../../assets/app-icon.png';

const styles = {
    bulkSmsSvg: {
        backgroundImage: `url(${bulkSmsSvg})`
    },
    sendBulkSvg: {
        backgroundImage: `url(${sendBulkSvg})`
    },
    sendPersonalizedSvg: {
        backgroundImage: `url(${sendPersonalizedSvg})`
    },
    twoWayComSvg: {
        backgroundImage: `url(${twoWayComSvg})`
    },
    appIcon: {
        backgroundImage: `url(${appIcon})`
    }
}

const bulkSmsProductPage = () => {
    return (
        <>
        <Fade top>
        <div style={styles.bulkSmsSvg} className="main-section bulk-sms">
                    <Bounce right>
                        <div className="msg-sect">
                            <div className="msg-title">Bulk SMS Messaging</div>
                            <div className="msg-content"> Increase customer interaction by crafting and sending an SMS to a multitude of individuals within your contact database with ease.</div>
                        </div>
                    </Bounce>
                    </div>
                </Fade>
                    <div className="service-sect">
                        <div className="service-sect-title">Our USSD Services enable you to achieve:</div>
                        <Zoom>
                        <div className="all-services-sect">

                            <div className="service-opt">
                                <div style={styles.sendBulkSvg} className="service-svg">
                                </div>
                                <div className="service-title">Send Bulk SMS</div>
                                <div className="service-content">Increase customer interactions by sending sms at scale.</div>
                            </div>

                            <div className="service-opt">
                                <div style={styles.sendPersonalizedSvg} className="service-svg">
                                </div>
                                <div className="service-title">Personalized Messages</div>
                                <div className="service-content">With personalized Bulk SMS, a single SMS template with variable fields is used to generate unique Bulk SMS messages.</div>
                            </div>

                            <div className="service-opt">
                                <div style={styles.twoWayComSvg} className="service-svg">
                                </div>
                                <div className="service-title">Two-Way Communication</div>
                                <div className="service-content">Enhance sales, marketing and support in real-time by sending and receiving sms.</div>
                            </div>

                        </div>
                        </Zoom>
                    </div>
                    <div className="features-sect">
                        <div className="features-title">features</div>
                        <div className="features-row">
                            <div style={styles.schedule} className="feature">
                                <div className="feature-title">schedule SMS</div>
                                    <div className="feature-content">Plan ahead with scheduled messages programmed to be sent at a specific time in the future.</div>
                            </div>

                            <div style={styles.autoResponse}  className="feature">
                            <div className="feature-title">Auto Responses</div>
                                    <div className="feature-content">Give instant feedback to incoming sms by enabling automatic responses.</div>
                            </div>

                            <div style={styles.deliveryReport} className="feature">
                            <div className="feature-title">Delivery Report</div>
                                    <div className="feature-content">View comprehensive reporting on sms delivery.</div>
                            </div>

                            <div style={styles.realTime} className="feature">
                            <div className="feature-title">Real-time Analytics</div>
                                    <div className="feature-content">Measure your marketing outcomes with real-time analytics once your SMS have been delivered.</div>
                            </div>

                        </div>
                        <div className="features-row">

                        <div  className="feature">
                            <div className="feature-title">Customized Messages</div>
                                    <div className="feature-content">Measure your marketing outcomes with real-time analytics once your SMS have been delivered.</div>
                            </div>

                            <div  className="feature">
                            <div className="feature-title">Scalable Pricing</div>
                                    <div className="feature-content">View comprehensive reporting on sms delivery.</div>
                            </div>

                            <div className="feature">
                            <div className="feature-title">SMS Surveys</div>
                                    <div className="feature-content">Collect feedback by easily setting up SMS surveys.</div>
                            </div>

                            <div  className="feature">
                            <div className="feature-title">Reporting</div>
                                    <div className="feature-content">View comprehensive reporting on sms delivery.</div>
                            </div>

                        </div>
                    </div>
        </>
    );
}

export default bulkSmsProductPage;