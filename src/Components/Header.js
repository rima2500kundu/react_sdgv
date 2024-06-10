import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function Header() {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".main_header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="full_width main_header" id="header">
      <div className="container d-flex justify-content-between align-items-center align-items-lg-end">
        <div className="head_logo">
          <NavLink to="/">
            <img src="images/logo.png" alt="logo" />
          </NavLink>
        </div>
        <div className="header_links d-none d-xl-block">
          <ul>
            <li className="current-menu-item">
              <a href="/"> Why SDG</a>
              <ul className="sub-menu">
                <li>
                  <a href="/">How It works</a>
                </li>
                <li>
                  <NavLink to="/distinctvettingprocess">
                    Distinct Vetting Process
                  </NavLink>
                </li>
                <li>
                  <a href="/">SDG Advantage</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Our Team</a>
                </li>
              </ul>
              <span className="down-icon"></span>
            </li>

            <li className="current-menu-item">
              <a href="/"> Hire Our Genius Minds</a>
              <ul className="sub-menu">
                <li>
                  <a href="/">Developers</a>
                </li>
                <li>
                  <a href="/">Marketers</a>
                </li>
                <li>
                  <a href="/">Accountants & Finance</a>
                </li>
                <li>
                  <a href="/">Virtual Assistant</a>
                </li>
                <li>
                  <a href="/">QA Tester</a>
                </li>
              </ul>
              <span className="down-icon"></span>
            </li>

            <li className="current-menu-item">
              <a href="/">AI/ML</a>
              <ul className="sub-menu">
                <li>
                  <a href="/">AI/ML Development</a>
                </li>
                <li>
                  <a href="/">AI/ML Developer</a>
                </li>
              </ul>
              <span className="down-icon"></span>
            </li>
          </ul>
        </div>

        <div className="header_links d-none d-xl-block">
          <ul>
            <li>
              <a href="/">Apply for Jobs</a>
            </li>
            <li>
              <a href="/" className="cmn_btn_stroke">
                Hire Developers
              </a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>

        <div className="d-xl-none">
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="">
              <Container fluid>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      <NavLink to="/">
                        <img src="images/logo.png" alt="logo" />
                      </NavLink>
                    </Offcanvas.Title>
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavDropdown
                        title="Why SDG"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="/">
                          How It works
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          {/* href="/distinctvettingprocess" */}
                          <NavLink to="/distinctvettingprocess">
                            Distinct Vetting Process
                          </NavLink>
                          {/* Distinct Vetting Process */}
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          SDG Advantage
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">Pricing</NavDropdown.Item>
                        <NavDropdown.Item href="/">Our Team</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Hire Our Genius Minds"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="/">Developers</NavDropdown.Item>
                        <NavDropdown.Item href="/">Marketers</NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Accountants & Finance
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          Virtual Assistant
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">QA Tester</NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="AI/ML"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="/">
                          AI/ML Development
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/">
                          AI/ML Developer
                        </NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link href="/">Apply for Jobs</Nav.Link>
                      <Nav.Link href="/">Hire Developers</Nav.Link>
                      <Nav.Link href="/">Login</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
