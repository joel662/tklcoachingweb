import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">TKL Coaching</Navbar.Brand>
      <Nav className="me-auto" >
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        
      </Nav>
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
      <Button variant="primary">Log In</Button>{' '}
      <Button variant="success">Create an Account</Button>{' '}
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  ) ;
};

export default Header;
