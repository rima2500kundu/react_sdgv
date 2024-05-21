import React from 'react'

function Footer() {
  return (
    <>
        <footer className="full_width">
            <div className="footer_sub">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-sm-12 col-lg-4 col-xl-4">
                            <div className="footer_sub_logo"><a href="/"><img src="images/logo_black.png" alt="Logo" /></a></div>
                            <div className="footer_sub_map">
                                <img src="images/world_map.png" alt="images" />
                                <div id="horizontalTab2">
                                    <ul className="resp-tabs-list">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>

                                    <div className="resp-tabs-container">
                                        <div>
                                            <div className="footer_sub_loaction ">  
                                            <h2>Canada</h2>
                                            <h3>Toronto</h3>
                                            <p>5399 Eglinton Ave. <br /> West Suite 212,<br /> Toronto, ON, M9C 5K6</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="footer_sub_loaction ">
                                                <h2>Colombia</h2>
                                                <h3>Medellin</h3>
                                                <p>Cra. 42 #3 Sur 81 Torre  1 Piso 15,<br /> El Poblado,<br /> Medellín, Antioquia, Colombia</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="footer_sub_loaction">
                                            <h2>India</h2>
                                            <h3>Kolkata</h3>
                                            <p>Shaila Tower, EP-204, <br /> Salt Lake, Sector-V,<br /> Kolkata - 700091 <br />
                                            info@sourcedeskglobal.com</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="footer_sub_loaction">
                                                <h2>USA</h2>
                                                <h3>New York</h3>
                                                <p>One Liberty Plaza, <br /> 165 Broadway,<br />  Suite 2301,  New York, 10006</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-8 col-sm-12 col-lg-8 col-xl-8">
                            <div className="row quick_links">
                                <div className="col-12 col-md-6 col-sm-6 col-lg-4 col-xl-4">
                                    <h2>Developer</h2>
                                    <ul>
                                        <li><a href="/">Hire Developer By Specific Skills</a></li>
                                        <li><a href="hire-development-team.html">Hire Development Team</a></li>
                                        <li><a href="book-a-call.html">Book A Call</a></li>
                                        <li><a href="/">Job Description Example</a></li>
                                        <li><a href="/">Employer Referral</a></li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3">
                                    <h2>Candidate</h2>
                                    <ul>
                                        <li><a href="/">Employee Referral</a></li>
                                        <li><a href="/">Resume Guide</a></li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-6 col-sm-6 col-lg-2 col-xl-2">
                                    <h2>Support</h2>
                                    <ul>
                                        <li><a href="schedule-a-call.html">Contact Us</a></li>
                                        <li><a href="/">Privacy Policy</a></li>
                                        <li><a href="/">Terms of Service</a></li>
                                    </ul>
                                </div>

                                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3">
                                    <h2>About Us</h2>
                                    <ul>
                                        <li><a href="social-responsibility.html">Social Responsibility</a></li>
                                        <li><a href="events.html">Events</a></li>
                                        <li><a href="/">Customer Reviews</a></li>
                                        <li><a href="/">Blog</a></li>
                                        <li><a href="/">Career</a></li>
                                        <li><a href="/">Culture and Values</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row">
                                <div className="connect_us">
                                    <h2>Connect With Us</h2>
                                    <ul>
                                        <li><a href="/"><img src="images/instagram.png" alt="Icon" /></a></li>
                                        <li><a href="/"><img src="images/fb.png" alt="Icon" /></a></li>
                                        <li><a href="/"><img src="images/twitter.png" alt="Icon" /></a></li>
                                        <li><a href="/"><img src="images/in.png" alt="Icon" /></a></li>
                                        <li><a href="/"><img src="images/youtube.png" alt="Icon" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright">
                <div className="container justify-content-center">
                    <p>© Copyright 2024, Sourcedesk Global All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer;