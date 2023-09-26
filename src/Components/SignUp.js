import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

export default function SignUp({ show, onHide, setLogIn }) {
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          onHide(false);
        }}
      >
        <Modal.Header className="d-flex flex-column">
          <h2>Sign Up</h2>
          <p>
            Already a member?
            <span
              style={{
                cursor: "pointer",
                color: "blue",
              }}
              onClick={() => {
                onHide(false);
                setLogIn(true);
              }}
            >
              Log In
            </span>
          </p>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-file-person-fill"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              area-aria-label="First Name"
              required
            />
            <Form.Control placeholder="Last Name" area-aria-label="Last Name" />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-calendar"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="DD-MM-YYYY"
              area-aria-label="dob"
              required
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-envelope-at"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Email Address"
              area-aria-label="email id"
              required
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-phone"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Mobile Number"
              area-aria-label="Mobile number"
              required
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-keyboard"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Create Password"
              area-aria-label="create password"
              required
            />
          </InputGroup>
          <InputGroup className="mt-3">
            <InputGroup.Text>
              <i className="bi bi-keyboard"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Re-enter Password"
              area-aria-label="re-enter password"
              required
            />
          </InputGroup>
          <Button
            className="d-block mx-auto mt-4 w-50 p-2 fs-4"
            typeof="submit"
          >
            Sign Up
          </Button>
        </Modal.Body>{" "}
        <Modal.Footer className="d-flex flex-column">
          <p className="d-block mx-auto">---- or sign up with ----</p>
          <div>
            <i className="bi bi-facebook fs-1 p-2"></i>
            <i className="bi bi-google fs-1 p-2"></i>
          </div>
        </Modal.Footer>
      </form>
      <Button onClick={() => onHide(false)}>Close</Button>
    </Modal>
  );
}
