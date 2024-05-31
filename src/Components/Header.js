import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

// https://www.youtube.com/watch?v=SygE7sKjTCk&ab_channel=StillLearning

function Header() {
  return (
    <header className="full_width main_header navbar-fixed-top sticky" id="header">
        <div className="container d-flex justify-content-between align-items-end">
            <div className="head_logo"><NavLink to="/"><img src="images/logo.png" alt="logo" /></NavLink></div>
            <div className="header_links d-none d-xl-block">
                <ul>
                    <li><NavLink className={`${(navData)=> navData.isActive ? 'active' : ''}`} to="/about">About</NavLink></li>

                    <li className="current-menu-item">
                        <a href='/'> Why SDG</a>
                        <ul className="sub-menu">
                            <li><a href="how-it-works.html">How It works</a></li>
                            <li><a href="/distinctvettingprocess">Distinct Vetting Process</a></li>
                            <li><a href="SDG_advantage.html">SDG Advantage</a></li>
                            <li><a href="/">Pricing</a></li>
                            <li><a href="our-team.html">Our Team</a></li>
                        </ul>
                        <span className="down-icon"></span>
                    </li>

                    <li className="current-menu-item">
                        <a href="/"> Hire Our Genius Minds</a>
                        <ul className="sub-menu">
                            <li><a href="developers.html">Developers</a></li>
                            <li><a href="digital-marketers.html">Marketers</a></li>
                            <li><a href="accountants-finance.html">Accountants & Finance</a></li>
                            <li><a href="virtual-assistant.html">Virtual Assistant</a></li>
                            <li><a href="QA-tester.html">QA Tester</a></li>
                        </ul>
                        <span className="down-icon"></span>
                    </li>

                    <li className="current-menu-item">
                        <a href="/">AI/ML</a>
                        <ul className="sub-menu">
                            <li><a href="/">AI/ML Development</a></li>
                            <li><a href="/">AI/ML Developer</a></li>
                        </ul>
                        <span className="down-icon"></span>
                    </li>
                </ul>
            </div>

            <div className="header_links d-none d-xl-block">
                <ul>
                    <li><a href="apply-as-talent.html">Apply for Jobs</a></li>
                    <li><a href="schedule-a-call.html" className="cmn_btn_stroke">Hire Developers</a></li>
                    <li><a href="/">Login</a></li>                    
                </ul>
            </div>

            <div className='d-xl-none'>
                <NavBar />
            </div>
        </div>
    </header>
  )
}

export default Header;