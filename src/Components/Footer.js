import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [curAddress, setCurAddress] = useState(1);
  function handleClick(add) {
    setCurAddress(add);
  }
  return (
    <>
      <footer className="full_width">
        <div className="footer_sub">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4 col-sm-12 col-lg-4 col-xl-4">
                <div className="footer_sub_logo">
                  <NavLink to="/">
                    <img src="images/logo_black.png" alt="Logo" />
                  </NavLink>
                </div>
                <div className="footer_sub_map">
                  <img src="images/world_map.png" alt="images" />
                  <div id="horizontalTab2">
                    <ul className="resp-tabs-list">
                      <li
                        onClick={() => handleClick(1)}
                        className={`resp-tab-item ${
                          curAddress === 1 ? "resp-tab-active" : ""
                        }`}
                      ></li>
                      <li
                        onClick={() => handleClick(2)}
                        className={`resp-tab-item ${
                          curAddress === 2 ? "resp-tab-active" : ""
                        }`}
                      ></li>
                      <li
                        onClick={() => handleClick(3)}
                        className={`resp-tab-item ${
                          curAddress === 3 ? "resp-tab-active" : ""
                        }`}
                      ></li>
                      <li
                        onClick={() => handleClick(4)}
                        className={`resp-tab-item ${
                          curAddress === 4 ? "resp-tab-active" : ""
                        }`}
                      ></li>
                    </ul>

                    <div className="resp-tabs-container">
                      <div className={curAddress === 1 ? "d-block" : "d-none"}>
                        <div className="footer_sub_loaction ">
                          <h2>Canada</h2>
                          <h3>Toronto</h3>
                          <p>
                            5399 Eglinton Ave. <br /> West Suite 212,
                            <br /> Toronto, ON, M9C 5K6
                          </p>
                        </div>
                      </div>

                      <div className={curAddress === 2 ? "d-block" : "d-none"}>
                        <div className="footer_sub_loaction ">
                          <h2>Colombia</h2>
                          <h3>Medellin</h3>
                          <p>
                            Cra. 42 #3 Sur 81 Torre 1 Piso 15,
                            <br /> El Poblado,
                            <br /> Medellín, Antioquia, Colombia
                          </p>
                        </div>
                      </div>

                      <div className={curAddress === 3 ? "d-block" : "d-none"}>
                        <div className="footer_sub_loaction">
                          <h2>India</h2>
                          <h3>Kolkata</h3>
                          <p>
                            Shaila Tower, EP-204, <br /> Salt Lake, Sector-V,
                            <br /> Kolkata - 700091 <br />
                            info@sourcedeskglobal.com
                          </p>
                        </div>
                      </div>

                      <div className={curAddress === 4 ? "d-block" : "d-none"}>
                        <div className="footer_sub_loaction">
                          <h2>USA</h2>
                          <h3>New York</h3>
                          <p>
                            One Liberty Plaza, <br /> 165 Broadway,
                            <br /> Suite 2301, New York, 10006
                          </p>
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
                      <li>
                        <NavLink to="/">Hire Developer By Specific Skills</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Hire Development Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Book A Call</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Job Description Example</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Employer Referral</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3">
                    <h2>Candidate</h2>
                    <ul>
                      <li>
                        <NavLink to="/">Employee Referral</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Resume Guide</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 col-md-6 col-sm-6 col-lg-2 col-xl-2">
                    <h2>Support</h2>
                    <ul>
                      <li>
                        <NavLink to="/">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Privacy Policy</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Terms of Service</NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-3">
                    <h2>About Us</h2>
                    <ul>
                      <li>
                        <NavLink to="/">Social Responsibility</NavLink>
                      </li>
                      <li>
                        <NavLink to="/events">Events</NavLink>
                      </li>
                      <li>
                        <NavLink to="/customer-review">Customer Reviews</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blogs">Blog</NavLink>
                      </li>
                      <li>
                        <NavLink href="/">Career</NavLink>
                      </li>
                      <li>
                        <NavLink to="/">Culture and Values</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row">
                  <div className="connect_us">
                    <h2>Connect With Us</h2>
                    <ul>
                      <li>
                        <NavLink to="/">
                          <img src="images/instagram.png" alt="Icon" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <img src="images/fb.png" alt="Icon" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <img src="images/twitter.png" alt="Icon" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <img src="images/in.png" alt="Icon" />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <img src="images/youtube.png" alt="Icon" />
                        </NavLink>
                      </li>
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
  );
}

export default Footer;
