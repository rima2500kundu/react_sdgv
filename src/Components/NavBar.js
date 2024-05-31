import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="">
                    <Container fluid>
                        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavDropdown title="Why SDG" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">How It works</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Distinct Vetting Process</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">SDG Advantage</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Pricing</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Our Team</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="Hire Our Genius Minds" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">Developers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">Marketers</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Accountants & Finance</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">Virtual Assistant</NavDropdown.Item>
                                        <NavDropdown.Item href="#action5">QA Tester</NavDropdown.Item>
                                    </NavDropdown>

                                    <NavDropdown title="AI/ML" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="#action3">AI/ML Development</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">AI/ML Developer</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;