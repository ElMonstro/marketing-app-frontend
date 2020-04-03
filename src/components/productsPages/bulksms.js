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
    schedule: {
        backgroundImage: `url(${"https://i.insider.com/5ddd80d6fd9db26d9400cd7a?width=1100&format=jpeg&auto=webp"})`
    },
    autoResponse: {
        backgroundImage: `url(${"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/18ixb16x3cll9jpg.jpg"})`
    },
    deliveryReport: {
        backgroundImage: `url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLu9dWIgclEs9EHabpEyAYrrA0t-AEwZKFZjjGrFhNxlj16BfC&usqp=CAU"})`
    },
    realTime: {
        backgroundImage: `url(${"data:image/jpeg;base64,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"})`
    },
    customized: {
        backgroundImage: `url(${"https://www.sabre.com/wp/wp-content/uploads/shutterstock_256134238.jpg"})`
    },
    scalable: {
        backgroundImage: `url(${"https://catalystforbusiness.com/wp-content/uploads/2017/12/scalable-startups-1024x768.jpg"})`
    },
    smsSurvey: {
        backgroundImage: `url(${"https://a1surveys.com/wp-content/uploads/2019/03/b.jpg"})`
    },
    reporting: {
        backgroundImage: `url(${"https://cfa-wpengine.netdna-ssl.com/marketintegrity/files/2016/08/bargraphs-1.jpg"})`
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
                    <div className="features-sect">
                        <div className="features-title">features</div>
                        <div className="features-row">
                            <div style={styles.schedule} className="feature">
                                <div className="feature-title">schedule SMS</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">schedule SMS</div>
                                    <div className="feature-display-content">Send sms at a specific time in the future.</div>
                                </div>
                            </div>
                            <div style={styles.autoResponse}  className="feature">
                            <div className="feature-title">Auto Responses</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Auto Responses</div>
                                    <div className="feature-display-content">Give instant feedback to incoming sms by enabling automatic responses.</div>
                                </div>
                            </div>
                            <div style={styles.deliveryReport} className="feature">
                            <div className="feature-title">Delivery Report</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Delivery Report</div>
                                    <div className="feature-display-content">View comprehensive reporting on sms delivery.</div>
                                </div>
                            </div>
                            <div style={styles.realTime} className="feature">
                            <div className="feature-title">Real-time Analytics</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Real-time Analytics</div>
                                    <div className="feature-display-content">get Real-time Analytics specific time in the future.</div>
                                </div>
                            </div>
                        </div>
                        <div  className="features-row">

                        <div style={styles.customized}  className="feature">
                            <div className="feature-title">Customized Messages</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Customized Messages</div>
                                    <div className="feature-display-content">View comprehensive reporting on sms delivery.</div>
                                </div>
                            </div>

                            <div style={styles.scalable}  className="feature">
                            <div className="feature-title">Scalable Pricing</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Scalable Pricing</div>
                                    <div className="feature-display-content">View comprehensive reporting on sms delivery.</div>
                                </div>
                            </div>
                            <div style={styles.smsSurvey}  className="feature">
                            <div className="feature-title">SMS Surveys</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">SMS Surveys</div>
                                    <div className="feature-display-content">View comprehensive reporting on sms delivery.</div>
                                </div>
                            </div>
                            <div style={styles.reporting}  className="feature">
                            <div className="feature-title">Reporting</div>
                                <div className="feature-display">
                                    <div className="feature-display-title">Reporting</div>
                                    <div className="feature-display-content">View comprehensive reporting on sms delivery.</div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );
}

export default bulkSmsProductPage;