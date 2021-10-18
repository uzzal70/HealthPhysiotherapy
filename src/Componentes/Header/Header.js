import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () =>
{
    return (
        <Navbar className="bg-info" collapseOnSelect expand="lg" sticky="top">
            <Container className="d-flex">
                <div className="justify-content-start">
                    <NavLink className="Navbar-brand text-decoration-none" to="/"><span className="text-white fw-bold"><h3>Physiotherapy Center</h3></span></NavLink>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <div className="justify-content-end">
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/Home">Home</NavLink>
                            <NavLink className="nav-link" to="/Services">Services</NavLink>
                            <NavLink className="nav-link" to="/AboutUs">About us</NavLink>
                            <NavLink className="nav-link" to="/Apointment">Appointment</NavLink>
                            <NavLink className="nav-link" to="/Login"><span className="btn-danger rounded-pill px-3 pb-1 ">LogIn</span></NavLink>
                            <NavLink className="nav-link" to="/Logout"><span className="btn-danger rounded-pill px-3 pb-1 ">LogOut</span></NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;

// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import "./Header.css";

// const Header = () =>
// {
//     return (
//         <Navbar bg="light" collapseOnSelect expand="lg" sticky="top">
//             <Container>
//                 <NavLink className="navbar-brand text" to="/">
//                     Employee
//                 </NavLink>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <NavLink className="nav-link" to="/home">
//                             Home
//                         </NavLink>
//                         <NavLink className="nav-link" to="/about">
//                             About
//                         </NavLink>
//                         <NavLink className="nav-link" to="/service">
//                             Service
//                         </NavLink>
//                         <NavLink className="nav-link" to="/contact">
//                             Contact
//                         </NavLink>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Header;


