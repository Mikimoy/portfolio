import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import foto from '../assets/logo192.png';
function Header() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">
            <img
              alt=""
              src={foto}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
         
          
         
        </Nav>
        <Nav>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#About Us">About Us</Nav.Link>
          <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#web">Web Developer</NavDropdown.Item>
            <NavDropdown.Item href="game">
            Game Developer
            </NavDropdown.Item>
            <NavDropdown.Item href="3d">3D Artist</NavDropdown.Item>
   
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>
  );
}

export default Header;
