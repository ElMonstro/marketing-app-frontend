import React from 'react';

const footer = () => {
    return(
    <footer class="mdl-mega-footer" style={{backgroundColor: 'rgb(20, 66, 97)'}}>
                            
    <div style={{width: '100%', height: '200px', display: 'flex', display: 'flex', justifyContent: 'space-around'}}>

    <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>FAQ's</h6></li>
            <li><a>Questions</a></li>
            <li><a>Answers</a></li>
            <li><a>Contact us</a></li>
        </ul>
        </div>
        <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>Social Links</h6></li>
            <li><a>Facebook</a></li>
            <li><a>Twitter</a></li>
            <li><a>Instagram</a></li>
        </ul>
        </div>

        <div  class="mdl-mega-footer__drop-down-section">
        <ul class="mdl-mega-footer__link-list">
            <li><h6 style={{color: '#ffffff'}}>Contacts</h6></li>
            <li><a>Email</a></li>
            <li><a>Phone 1</a></li>
            <li><a>Phone 2</a></li>
        </ul>
        </div>
    </div>

    <div style={{textAlign: 'center'}} class="mdl-mega-footer__bottom-section">
        <div class="mdl-logo">Title</div>
        <ul class="mdl-mega-footer__link-list">
        <li><a>Help</a></li>
        <li><a>Privacy & Terms</a></li>
        </ul>
    </div>
</footer>);
}

export default footer;