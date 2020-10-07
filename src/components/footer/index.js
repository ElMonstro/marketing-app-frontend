import React from 'react';
import logo from '../../assets/white-logo.svg';
import './index.scss';

const footer = () => {
    return(
    <footer class="mdl-mega-footer" style={{backgroundColor: 'black'}}>
                            
    <div className="footer-content" >

    <div  class="mdl-mega-footer__drop-down-section">
        <div id="company-content">
            <div id="logo"><img src={logo} alt="Jambo SMS" /></div>
            <div id="company-statement">We make it easy, fast and affordable to send SMS marketing campaigns and engage with your customers.</div>
            <div className="social-media">
                <a href="https://www.facebook.com/jambosms/" target="_blank"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
                <a href="https://twitter.com/Jambo_sms?s=08" target="_blank"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/company/softsearch/" target="_blank"><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
            </div>

        </div>
    </div>

    <div  class="mdl-mega-footer__drop-down-section">
        
        <ul class="mdl-mega-footer__link-list">
            <li><h5 style={{color: '#ffffff'}}>FAQ's</h5></li>
            <li>Questions</li>
            <li>Answers</li>
            <li>Contact us</li>
        </ul>
    </div>
    

    <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h5 style={{color: '#ffffff'}}>Contacts</h5></li>
            <li>info@softsearch.co.ke</li>
            <li>+254777101005</li>
            <li>4th Parklands Diamond Plaza 2nd Floor</li>
        </ul>
    </div>

    <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h5 style={{color: '#ffffff'}}>Patners</h5></li>
            <li>SoftSearch</li>
            <li>Kulmi</li>
            <li>Omaar Marketplace</li>
        </ul>
    </div>
    </div>

    <div style={{textAlign: 'center', color:"#ffffff"}}>
        <div class="footer-logo"> @SoftSearch 2020</div>
    </div>

</footer>);
}

export default footer;