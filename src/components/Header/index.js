import "./styles.css";
import logo from "../../assets/logo.png";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <Navbar className="navbar" fixed="top" bg="muted" variant="dark" expand="md">
        <Container>
          <img src={logo} width={60} alt="logo" />
          <Navbar.Brand>Portifólio | Nayla Ueda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => scrollToComponent("home")}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent("about")}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent("designer")}>Designer</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent("coder")}>Coder</Nav.Link>
              <Nav.Link onClick={() => scrollToComponent("social")}>Social</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
