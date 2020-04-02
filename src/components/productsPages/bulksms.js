import React from 'react';

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
    },
}

const bulkSmsProductPage = () => {
    return (
        <>
        <div style={styles.bulkSmsSvg} className="main-section bulk-sms">
                        <div className="msg-sect">
                            <div className="msg-title">Bulk SMS Messaging</div>
                            <div className="msg-content"> Increase customer engagement by sending the right SMS at the right time, at the right scale.Enhance customer support, sales and marketing by using our SMS product.</div>
                        </div>
                    </div>
                    <div className="service-sect">
                        <div className="service-sect-title">Our USSD Services enable you to:</div>
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
                                <div className="service-title">Send Personalized Messages</div>
                                <div className="service-content">With personalized Bulk SMS, a single SMS template with variable fields is used to generate unique Bulk SMS messages.</div>
                            </div>

                            <div className="service-opt">
                                <div style={styles.twoWayComSvg} className="service-svg">
                                </div>
                                <div className="service-title">Two-Way Communication</div>
                                <div className="service-content">Enhance sales, marketing and support in real-time by sending and receiving sms.</div>
                            </div>

                        </div>
                    </div>
        </>
    );
}

export default bulkSmsProductPage;