import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './index.scss';

import jamboWorldSvg from './../../assets/jamboWorld.svg';
import feedbackSvg from './../../assets/icon-feedback.svg';
import setupSurveySvg from './../../assets/icon-setup-surveys.svg';
import createQuerySvg from './../../assets/icon-create-query.svg';
import appIcon from './../../assets/app-icon.png';

const styles = {
    jamboWorldSvg: {
        backgroundImage: `url(${jamboWorldSvg})`
    },
    feedbackSvg: {
        backgroundImage: `url(${feedbackSvg})`
    },
    setupSurveySvg: {
        backgroundImage: `url(${setupSurveySvg})`
    },
    createQuerySvg: {
        backgroundImage: `url(${createQuerySvg})`
    },
    appIcon: {
        backgroundImage: `url(${appIcon})`
    },
}

const ussdProductPage = () => {
    return (
        <>
        <Fade top>
                <div style={styles.jamboWorldSvg} className="main-section">
                        <Bounce right>
                            <div className="msg-sect">
                                <div className="msg-title">USSD service codes</div>
                                <div className="msg-content">Get a Customized USSD Service Code that meets your business needs.</div>
                            </div>
                        </Bounce>
                </div>
            </Fade>
            <Zoom>
                    <div className="service-sect">
                        <div className="service-sect-title">Our USSD Services enable you to:</div>
                        <div className="all-services-sect">

                            <div className="service-opt">
                                <div style={styles.feedbackSvg} className="service-svg">
                                </div>
                                <div className="service-title">setup real time surveys</div>
                                <div className="service-content">collect feedback by easily setting up USSD surveys.</div>
                            </div>

                            <div className="service-opt">
                                <div style={styles.setupSurveySvg} className="service-svg">
                                </div>
                                <div className="service-title">build option menu feedback systems</div>
                                <div className="service-content">get comprehensive feedback from surveys with our structured USSD surveys.</div>
                            </div>

                            <div className="service-opt">
                                <div style={styles.createQuerySvg} className="service-svg">
                                </div>
                                <div className="service-title">create query systems</div>
                                <div className="service-content">get important information within seconds i.e accounts data.</div>
                            </div>

                        </div>
                    </div>
                </Zoom>
                    <div className="features-sect">
                        <div className="features-title">features</div>
                        
                        <div  className="features-row">

                        <div  className="feature">
                            <div className="feature-title">Customized Messages</div>
                                    <div className="feature-content">Tailor your USSD menu to meet your end objective.</div>
                            </div>

                            <div  className="feature">
                            <div className="feature-title">Scalable Pricing</div>
                                    <div className="feature-content">View comprehensive reporting on sms delivery.</div>
                            </div>

                            <div className="feature">
                            <div className="feature-title">USSD Surveys</div>
                                    <div className="feature-content">Set up,launch and collect feedback easily setting using a USSD survey.</div>
                            </div>

                            <div  className="feature">
                            <div className="feature-title">Reporting</div>
                                    <div className="feature-content">Analyze performance with comprehensive reporting on USSD service delivery.</div>
                            </div>

                        </div>
                    </div>
        </>
    );
}

export default ussdProductPage;