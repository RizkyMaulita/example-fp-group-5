import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavbarComp() {
  const navigate = useNavigate();

  const movePage = (path) => {
    navigate(path);
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand onClick={() => movePage("/")}>Logo Brand</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Sub Nav 1</Nav.Link>
          <Nav.Link>Sub Nav 2</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={() => movePage("/login")}>Login</Nav.Link>
          <Nav.Link onClick={() => movePage("/register")}>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
