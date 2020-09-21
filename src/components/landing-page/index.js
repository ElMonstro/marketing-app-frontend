import React from 'react';
import Bounce from 'react-reveal/Bounce';
import homePicture from '../../assets/home-picture.svg';
import videoIcon from '../../assets/video-icon.svg';
import bestRatesIcon from '../../assets/best-rates-icon.svg';
import flexibleRatesIcon from '../../assets/flexible-rates-icon.svg';
import userExperienceIcon from '../../assets/user-experience-icon.svg';
import aboutUsImage from '../../assets/about-us-image.svg';
import worldIcon from '../../assets/world-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import likeButton from '../../assets/like-button.svg';
import loudHornIcon from '../../assets/loud-horn.svg';
import sendIcon from '../../assets/send.svg';
import messagesIcon from '../../assets/messages-icon.svg';
import locationMap from '../../assets/location-map.svg';

import './index.scss';

const Homepage =() => {

    return(
    <>
    <div className="main-sect" style={{backgroundImage:`url(${homePicture})`}}>
    <Bounce right>
        <div className="action-sect">
            <div className="message-sect">
                Reach more customers with fast & 
                realiable SMS messaging
            </div>
            <div className="buttons-sect">
                <div className="reg-button">GET STARTED</div>
                <div className="vid-button"><img src={videoIcon} alt="Video Icon" />&nbsp;WATCH VIDEO</div>
            </div>
        </div>
    </Bounce>
    </div>
    <div className="choose-us-sect">
        <div className="card-title">Why Choose Us</div>
        <div className="cards-sect">
            <div  className="card">
                <div className="card-img"><img src={bestRatesIcon} alt="Best Rates"/></div>
                <div className="card-title">Best Rates</div>
                <div className="card-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
            <div  className="card">
                <div className="card-img"><img src={flexibleRatesIcon} alt="Flexible"/></div>
                <div className="card-title">Flexible & Fast</div>
                <div className="card-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
            <div  className="card">
                <div className="card-img"><img src={userExperienceIcon} alt="UX"/></div>
                <div className="card-title">User Experience</div>
                <div className="card-content">Choose from a wide variety of customized pocket friendly rates.</div>
            </div>
        </div>
    </div>
    <div className="about-sect">
            <div className="blue-title">- About -</div>
        <div className="bg-image-div" style={{backgroundImage:`url(${aboutUsImage})`, 
        backgroundPosition: '100% 5%', backgroundRepeat: "no-repeat", backgroundSize: "380px"}}>
        <div className="about-title" >
        Who We Are
        </div>
        
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
    </div>
    <div className="what-we-do-sect">
    <div className="blue-title">- Features -</div>

        <div className="card-title">What We Do</div>
        <div gutter={5} className="cards-sect">

                <div  className="card">
                    <div className="card-img"><img src={phoneIcon} alt="Phone Icon"/></div>
                    <div className="card-title">SMS Marketing Campaigns</div>
                    <div className="card-content">How will customers be aware of your products if you do not market them? To keep your business in the game then marketing is key. 
                    Marketing can catapult your business from level 0 to 10 in such a short time.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={loudHornIcon} alt="Flexible"/></div>
                    <div className="card-title">Promo SMS</div>
                    <div className="card-content">Our system gives you a platform to send notifications for the promotions you have for your products.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={sendIcon} alt="send"/></div>
                    <div className="card-title">Product Launch SMS</div>
                    <div className="card-content">Your business products has a sole target for a particular group of people. Our Bulk SMS system is giving you the option of reaching your target market</div>
                </div>


                <div  className="card">
                    <div className="card-img"><img src={messagesIcon} alt="messages"/></div>
                    <div className="card-title">SMS Alerts</div>
                    <div className="card-content">A matter may be of urgency and you need your notification to reach your esteemed customers or employees as soon as possible. Response to emails may not bring positive results as an SMS medium.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={likeButton} alt="Flexible"/></div>
                    <div className="card-title">Greeting SMS</div>
                    <div className="card-content">It is worth it to break the ice and wish you esteemed customers season greetings. It will create a rapport and a safe haven.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={worldIcon} alt="UX"/></div>
                    <div className="card-title">Targeted SMS Marketing</div>
                    <div className="card-content">Your business products has a sole target for a particular group of people. Our Bulk SMS system is giving you the option of reaching your target market</div>
                </div>

        </div>
    </div>
    <div className="pricing">

    </div>
    <div id="contact-sect">
    <div className="blue-title">- Contact Us -</div>
        <div className="title">Get In Touch With us</div>
        <div id="contact-content" style={{backgroundImage:`url(${locationMap})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

            <div id="contacts">
                <div id="contact-title">
                    <span>Contacts</span> <span id="white-space">&nbsp;</span>
                </div>
                <div id="contacts-list">
                    <div className="contact">
                        <div className="contact-name">Location</div>
                        <div className="contact-info"> Parklands Fairview road</div>
                    </div>
                    <div className="contact">
                        <div className="contact-name">Building</div>
                        <div className="contact-info">Diamond Plaza 2nd Floor</div>
                    </div>
                    <div className="contact">
                        <div className="contact-name">Email</div>
                        <div className="contact-info">Hello@softsearch.co.ke</div>
                    </div>
                    <div className="contact">
                        <div className="contact-name">Phone</div>
                        <div className="contact-info">+254725101001</div>
                    </div>
                    <div id="social-media">
                    <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>

                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
    );

}

export default Homepage;