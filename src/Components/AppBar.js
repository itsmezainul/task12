import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import Signup from "./SignUp";
import { useNavigate } from "react-router-dom";

function AppBar({ login, setLogIn, signUp, setSignUp, isLogIn, setIsLogIn }) {
  const [navOpen, setNavOpen] = useState(false);

  function handleLogin() {
    setLogIn(true);
    setSignUp(false);
    setNavOpen(false);
  }
  function handleSignup() {
    setLogIn(false);
    setSignUp(true);
    setNavOpen(false);
  }

  const navigate = useNavigate();
  return (
    <>
      <Navbar className="position-fixed w-100" style={{ zIndex: "1111111" }}>
        <Container>
          <Navbar.Brand>React</Navbar.Brand>
          <Nav className="d-none d-md-flex gap-3">
            <Link to="/">HOME</Link>
          </Nav>
          {!isLogIn ? (
            <div className="d-none d-md-flex">
              <Button className="rounded-5 me-3" onClick={handleLogin}>
                Log In
              </Button>
              <Button
                className="rounded-5"
                variant="secondary"
                onClick={handleSignup}
              >
                Sign Up
              </Button>
            </div>
          ) : (
            <Button
              className="rounded-5"
              onClick={() => {
                setIsLogIn(false);
                navigate("/");
              }}
            >
              LogOut
            </Button>
          )}
          <Button
            variant=""
            className="d-md-none"
            onClick={() => setNavOpen(true)}
          >
            <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
          </Button>
          <ToggleMenu
            show={navOpen}
            handleClose={() => setNavOpen(false)}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
          />
        </Container>
      </Navbar>
      <LogIn
        show={login}
        onHide={setLogIn}
        setSignUp={setSignUp}
        setIsLogIn={setIsLogIn}
      />
      <Signup show={signUp} onHide={setSignUp} setLogIn={setLogIn} />
    </>
  );
}

function ToggleMenu({ show, handleClose, handleLogin, handleSignup }) {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header className="text-end flex-row-reverse">
        <Button variant="" onClick={handleClose}>
          <i className="bi bi-x-lg" style={{ fontSize: "2rem" }}></i>
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column align-items-center gap-5">
        <Link to="/" onClick={handleClose}>
          HOME
        </Link>
        <Link to="/userlist" onClick={handleClose}>
          USER LIST
        </Link>
        <Button className="rounded-5 w-50 py-3" onClick={handleLogin}>
          Log In
        </Button>
        <Button
          className="rounded-5 w-50 py-3"
          variant="secondary"
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default AppBar;
