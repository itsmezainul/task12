import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

export default function LogIn({ show, onHide, setSignUp }) {
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
          <h2>Log In</h2>
          <p>
            New to this site?
            <span
              style={{
                cursor: "pointer",
                color: "blue",
              }}
              onClick={() => {
                onHide(false);
                setSignUp(true);
              }}
            >
              Sign Up
            </span>
          </p>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mt-3" size="lg">
            <InputGroup.Text>
              <i className="bi bi-envelope-at"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="User Name / Email Address"
              area-aria-label="email id or user Name"
              required
            />
          </InputGroup>
          <InputGroup className="mt-3" size="lg">
            <InputGroup.Text>
              <i className="bi bi-keyboard"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Enter Password "
              area-aria-label="enter password"
              required
            />
          </InputGroup>

          <Button
            className="d-block mx-auto mt-4 w-50 p-2 fs-4"
            typeof="submit"
          >
            Log In
          </Button>
        </Modal.Body>{" "}
        <Modal.Footer className="d-flex flex-column">
          <p className="d-block mx-auto">---- or log in with ----</p>
          <div>
            <i className="bi bi-facebook fs-1 p-2"></i>
            <i className="bi bi-google fs-1 p-2"></i>
          </div>
        </Modal.Footer>
      </form>
      <Button
        onClick={() => {
          onHide(false);
        }}
      >
        Close
      </Button>
    </Modal>
  );
}
