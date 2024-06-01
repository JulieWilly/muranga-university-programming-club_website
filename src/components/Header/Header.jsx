import React from 'react';
import './homeSection.css'

import { FaCode } from "react-icons/fa"

const Logo = ({logo, label}) => {
    return (
        <div className="logo_items">
            <div className="logo">
            {logo}
        </div>
        <p>{label}</p>
        </div>
    )
}
const NavigationLinks = ({label}) => {
    return (
        <div className="nav-links">
            <nav>
                <ol>
                    <li><a href="#">{label}</a></li>
                </ol>
            </nav>
        </div>
    )
}

const Header = () => {
    return <section >
        <div className="header">
            <div className="logo_section">
                <Logo logo={<FaCode/>} label="Muranga"/>
            </div>
            <div className='links'>
                <NavigationLinks label="Home"/>
                <NavigationLinks label="Leadership"/>
                <NavigationLinks label="Tracks"/>
                <NavigationLinks label="Events"/>
            </div>
            <button>Apply</button>
        </div>
    </section>

}

export default Header;