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


const LandingPage = props => {

    const { routeToRegister } = props;

    return(
    <>
    <div className="main-sect" style={{backgroundImage:`url(${homePicture})`}}>
    <Bounce right>
        <div className="action-sect">
            <div className="message-sect">
            Stay Ahead With Effective Bulk SMS Solutions!
            </div>
            <div className="buttons-sect">
            <div className="reg-button" onClick={routeToRegister}>GET STARTED</div>
                <div className="vid-button"><img src={videoIcon} alt="Video Icon" />&nbsp;WATCH VIDEO</div>
            </div>
        </div>
    </Bounce>
    </div>
    <div className="choose-us-sect">
        <div className="title">Why Choose Us</div>
        <div className="cards-sect">
            <div  className="card">
                <div className="card-img"><img src={bestRatesIcon} alt="Best Rates"/></div>
                <div className="title">Best Rates</div>
                <div className="card-content">Effective Solutions, affordable rates.</div>
            </div>
            <div  className="card">
                <div className="card-img"><img src={flexibleRatesIcon} alt="Flexible"/></div>
                <div className="title">Flexible & Fast</div>
                <div className="card-content">Tailored Solutions, quick delivery turnaround.</div>
            </div>
            <div  className="card">
                <div className="card-img"><img src={userExperienceIcon} alt="UX"/></div>
                <div className="title">User Experience</div>
                <div className="card-content">Satisfactory experience, ease of use.</div>
            </div>
        </div>
    </div>
    <div id="about-sect">
            <div className="blue-title">- About -</div>
        <div className="bg-image-div" style={{backgroundImage:`url(${aboutUsImage})`, 
        backgroundPosition: '100% 5%', backgroundRepeat: "no-repeat", backgroundSize: "380px"}}>
        <div className="about-title" >
        Who We Are
        </div>
        
        <div className="intro-sect">
            <div className="intro-sect-title">soft search limited</div>
            <div className="intro-sect-content">In a world where an average person spends at least 5 hours on their mobile devices, there is no better way to reach out to your target audience than through their mobile device.
                As Soft Search Limited, we developed Jambo SMS to enable enterprises to stay ahead of the pack by effectively reaching out to their potential customers, using the right mobile communication products. 
                Jambo SMS is a handy service that will enable you to reach, interact, engage and transact with your customers at an almost personal level. 
                Whats more, we are true to our promise and guarantee quality products that will substantially improve your customer engagement leading onto an improved brand perception among your customers.
                Our Bulk SMS system ensures that you can reach your customers instantly with a quick and simple integration. Not only can you send relevant, targeted messages with only one API request,
                but also to a larger group. Even more,you can brand each message with your company or service name.
                Indeed, Jambo SMS is nothing short of what your enterprise needs for all its Bulk SMS needs.
            </div>

            <div className="action-btn" onClick={routeToRegister}>sign up now</div>
        </div>
        </div>
    </div>
    <div id="what-we-do-sect">
    <div className="blue-title">- Features -</div>

        <div className="title">What We Do</div>
        <div gutter={5} className="cards-sect">

                <div  className="card">
                    <div className="card-img"><img src={phoneIcon} alt="Phone Icon"/></div>
                    <div className="title">SMS Marketing Campaigns</div>
                    <div className="card-content">Nothing speaks directly to your customers than an SMS sent to them right on the palm of their hands.
                     Our SMS Marketing solution will enable your business to target your customers directly thereby increasing your chances of realizing sales on the products or services you wish to market.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={loudHornIcon} alt="Flexible"/></div>
                    <div className="title">Promo SMS</div>
                    <div className="card-content">For those looking to run a marketing promotion to a wide audience, then Promo SMS is the solution for you. This solution allows you to craft promotional messages that are disseminated in Bulk to all customers.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={sendIcon} alt="send"/></div>
                    <div className="title">Product Launch SMS</div>
                    <div className="card-content">What better way to inform your clients of a new product that by an SMS direct to their phone. Our Product Launch SMS is the key to effectively informing your customers of new products.</div>
                </div>


                <div  className="card">
                    <div className="card-img"><img src={messagesIcon} alt="messages"/></div>
                    <div className="title">SMS Alerts</div>
                    <div className="card-content">Do you need to keep your customers informed consistently? If so, then SMS Alerts is the solution for you. This solution allows you to craft SMS alerts which can be sent to all your customers in a timely manner.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={likeButton} alt="Flexible"/></div>
                    <div className="title">Greeting SMS</div>
                    <div className="card-content">Say hello or pass any general greeting to all your customers with our Greeting SMS solution. This solution will enable you to craft greeting messages that will be sent directly to your clients mobile phone.</div>
                </div>
                <div  className="card">
                    <div className="card-img"><img src={worldIcon} alt="UX"/></div>
                    <div className="title">Targeted SMS Marketing</div>
                    <div className="card-content">
                    Are you looking to target a specific group from your customer database? If yes, then Targeted SMS Marketing is the solution for you. This solution allows you to craft marketing messages which are sent to a select group of customers. 
                     </div>
                </div>

        </div>
    </div>
    <div id="pricing-sect">
        <div className="blue-title">- Pricing -</div>
        <div className="title">SMS</div>
        <div className="centering-wrapper">
            <div id="pricing-content">
                <table id="pricing">
                    <tr>
                        <th className="title-row" id="row-title">Telco</th>
                        <th className="title-row plan">Gold (KES 10,000 - 399,999)</th>
                        <th className="title-row plan">Silver (KES 10,000 - 99,999)</th>
                        <th className="title-row plan">Bronze (KES 0 - 9999)</th>      
                    </tr>
                    <tr>
                        <th className="telcos">Safaricom</th>
                        <th className="values">0.6&nbsp;Kes</th>
                        <th className="values">0.7&nbsp;Kes</th>
                        <th className="values">1.00&nbsp;Kes</th>

                    </tr>
                    <tr className="pricing-row central-row"  >
                        <th className="telcos">Airtel</th>
                        <th className="values">0.6&nbsp;Kes</th>
                        <th className="values">0.7&nbsp;Kes</th>
                        <th className="values">1.00&nbsp;Kes</th>

                    </tr>
                    <tr className="pricing-row" >
                        <th className="telcos">Other</th>
                        <th className="values">0.6&nbsp;Kes</th>
                        <th className="values">0.7&nbsp;Kes</th>
                        <th className="values">1.00&nbsp;Kes</th>
                    </tr>
                </table>
            </div>
        </div>

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
                        <div className="contact-info">info@softsearch.co.ke</div>
                    </div>
                    <div className="contact">
                        <div className="contact-name">Phone</div>
                        <div className="contact-info">+254777101005</div>
                    </div>
                    <div className="social-media">
                    <a href="https://www.facebook.com/jambosms/" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/Jambo_sms?s=08" target="_blank"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/company/softsearch/" target="_blank"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );

}

export default LandingPage;