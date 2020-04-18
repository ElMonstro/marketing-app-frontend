import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

import './index.scss';

const Homepage =() => {

    return(
    <>
    <div className="main-sect">
    <Bounce right>
        <div className="action-sect">
            <div className="message-sect">
                Reach more customers with fast & 
                realiable SMS messaging
            </div>
            <div className="buttons-sect">
                <div className="reg-button">GET STARTED</div>
                <div className="vid-button"><i className="fa fa-play-circle" aria-hidden="true"></i>WATCH VIDEO</div>
            </div>
        </div>
    </Bounce>
    </div>
    <div className="choose-us-sect">
    <Zoom>
        <div className="reason-title">why choose us</div>
        <div className="reasons-sect">
            <div  className="reason-card">
                <div className="reason-img"></div>
                <div className="reason-title">User Experience</div>
                <div className="reason-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
            <div  className="reason-card">
                <div className="reason-img"></div>
                <div className="reason-title">User Experience</div>
                <div className="reason-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
            <div  className="reason-card">
                <div className="reason-img"></div>
                <div className="reason-title">User Experience</div>
                <div className="reason-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
        </div>
    </Zoom>
    </div>
    <div className="about-sect">
        <div className="about-title">who we are</div>
        <div className="intro-sect">
            <div className="intro-sect-title">soft search limited</div>
            <div className="intro-sect-content">Our Bulk SMS system ensures that you can reach your customers
instantly with a quick and simple integration. Not only can you send
relevant, targeted messages with only one API request, but also to a
particular group. Brand your messages with your company or service name
  by using sender ID. After sending, you are notified of the delivery.
Our Bulk SMS system ensures that you can reach your customers
instantly with a quick and simple integration. Not only can you send
relevant, targeted messages with only one API request, but also to a
particular group. Brand your messages with your company or service name
by using sender ID. After sending, you are notified of the delivery.</div>
        <div className="action-btn">sign up now</div>
        </div>
    </div>
    <div className="what-we-do-sect">

    </div>
    </>
    );

}

export default Homepage;