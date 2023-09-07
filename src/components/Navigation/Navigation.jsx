import React from "react";
import logoDoe from "./logoDoe.png"
import './Navigation.css';

const Navigation = ({ routeChange, scrolled }) => {
        let classname = '';
        if (scrolled) {
            classname += 'scrolled'
        }
        return (
            <nav className={classname}>
                <div className="image">
                    <img src={logoDoe} alt="Logo"/>
                </div>
                <div className="container">
                    <p onClick={() => routeChange('about')}>about</p>
                    <p onClick={() => routeChange('shop')}>shop</p>
                    <p onClick={() => routeChange('shipping')}>shipping</p>
                    <p onClick={() => routeChange('contact')}>contact</p>
                </div>
            </nav>
    )
}

export default Navigation