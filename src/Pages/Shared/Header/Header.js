import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <header className='sticky-top'>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-start'>
                        <img className='w-50 ' src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Nav className="ms-auto fs-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </header>
    );
};

export default Header;