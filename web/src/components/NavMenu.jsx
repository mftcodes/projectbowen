import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavMenu = () => {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  return (
    <>
      <Navbar
        id="header"
        expand="lg"
        data-bs-theme="dark"
        className="text-center"
      >
        <Container className="stage">
          <Navbar.Brand href="/">
            <h1>The LOCR</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              {!isAuthenticated && (
                <Nav.Link onClick={() => loginWithRedirect({})}>Login</Nav.Link>
              )}
              {isAuthenticated && (
                <Nav.Link href="/create">New Resource</Nav.Link>
              )}
              {isAuthenticated && (
                <NavDropdown title=<strong>{user.name}</strong> id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">
                    <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => logoutWithRedirect({})}>
                    <FontAwesomeIcon icon="power-off" className="mr-3" /> Log out
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
