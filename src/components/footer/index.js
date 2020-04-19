import React from 'react';

const footer = () => {
    return(
    <footer class="mdl-mega-footer" style={{backgroundColor: 'rgb(7, 60, 95)'}}>
                            
    <div style={{width: '100%', height: '200px', display: 'flex', justifyContent: 'space-around'}}>

    <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>FAQ's</h6></li>
            <li>Questions</li>
            <li>Answers</li>
            <li>Contact us</li>
        </ul>
        </div>
        <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>Social Links</h6></li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
        </div>

        <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>Contacts</h6></li>
            <li>jambosms@info.com</li>
            <li>+254700111222</li>
            <li>+254711222333</li>
        </ul>
        </div>
    </div>

    <div style={{textAlign: 'center'}} class="mdl-mega-footer__bottom-section">
        <div class="mdl-logo">Jambo SMS</div>
        <ul class="mdl-mega-footer__link-list">
        <li>Help</li>
        <li>Privacy & Terms</li>
        </ul>
    </div>
</footer>);
}

export default footer;