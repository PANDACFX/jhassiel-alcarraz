import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ConectarWallet from './ConectarWallet';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container> 
        <Navbar.Brand href="#home">
          <img
            src="/img/logo2.png"
            alt="Logo del proyecto"
            width="250"
            height="250"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-5">
            <Nav.Link href="#inicio"> Inicio</Nav.Link>
            <Nav.Link href="#seccion1">(Coming Soon)</Nav.Link>
            <Nav.Link href="#seccion2">(Coming Soon)</Nav.Link>
            <Nav.Link href="#seccion3">(Coming Soon)</Nav.Link>
          </Nav>
          <ConectarWallet />
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;