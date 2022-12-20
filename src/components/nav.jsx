
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MarkovNav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse>
            <Nav className="me-auto">
                <Nav.Link href="/">Inicio</Nav.Link>
                <Nav.Link href="/articles">Articulos</Nav.Link>
                <Nav.Link href="/exercises">Ejercicios</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MarkovNav;