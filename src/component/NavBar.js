import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = props => {
  const [isOpen, setIsOpen] = userState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isLogin, setLogin] = useState({
    status: JSON.parse(localStorage.getItem("status"))
  });

  const signOut = () => {
    setLogin(prevState => {
      return (prevState.status = false);
    });

    localStorage.setItem("status", false);
  };

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          React-DOM
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse isOpen={isOpen} id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
            <Nav.Link as={Link} to="/class">
              Class Components
            </Nav.Link>
            <Nav.Link as={Link} to="/function">
              Function Components
            </Nav.Link>
            <Nav.Link as={Link} to="/reviewfunction">
              Review Function
            </Nav.Link>
            <Nav.Link as={Link} to="/todolist">
              Todo List
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            {isLogin.status ? (
              <NavItem>
                <Nav.Link as={Link} to="#/" onClick={signOut}>
                  Sign Out
                </Nav.Link>
              </NavItem>
            ) : (
              <Fragment>
                <NavItem>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                </NavItem>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
