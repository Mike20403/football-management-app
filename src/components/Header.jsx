import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Image from 'react-bootstrap/Image';
import { BsLayoutSidebar } from "react-icons/bs";
import { useState } from 'react';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container style={{
          margin:"0"
        }}>
         <BsLayoutSidebar style={{
          color:"white",
          width:"1.5rem",
          height:"1.5rem",
          marginRight:"30px",
          marginLeft:"20px",
          padding:"10px",
          boxSizing : 'content-box'
         }}
         className='sidebar-icon'
         onClick={toggleSidebar}
         />
         <Image style={{
          width:"2rem", 
         height:"2rem",
         marginRight:'10px',
         backgroundColor:'transparent'}} src="src/assets/ball.png"/>
          <Navbar.Brand href='/'>Football Management</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/login'>
                <FaSignInAlt /> Sign In
              </Nav.Link>
              <Nav.Link href='/login'>
                <FaSignOutAlt /> Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;