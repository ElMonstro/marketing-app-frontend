import React from 'react';
import './index.scss';


const Hamberger = props => {

    const OPEN_CLASS = 'open';
    const offClick = event => {
        const menu = document.getElementsByClassName(OPEN_CLASS);
        menu[0] && menu[0].classList.toggle(OPEN_CLASS);
        document.removeEventListener('click', offClick)
    }

    const {className} = props
    
    const handleOnclick = event => {

        const menu = event.target.parentElement;
        menu.classList.toggle(OPEN_CLASS)
        if (menu.classList.contains(OPEN_CLASS) ){
            document.addEventListener('click', offClick)
        }
    }
    return (
        <div id="nav-icon1" onClick={handleOnclick} className={className}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default Hamberger

