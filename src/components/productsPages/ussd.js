import React, {Component} from 'react';

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
        <div style={styles.jamboWorldSvg} className="main-section">
                        <div className="msg-sect">
                            <div className="msg-title">USSD service codes</div>
                            <div className="msg-content">Provide mobile financial services (MFS) on any phone, at low cost, without access to the SIM card or internet !</div>
                        </div>
                    </div>
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
        </>
    );
}

export default ussdProductPage;