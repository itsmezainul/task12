import React from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const errorStyle = {
  fontSize: ".7rem",
  color: "red",
  marginBottom: "-15px",
  marginTop: "10px",
};

const schema = yup.object().shape({
  fName: yup
    .string("Enter Valid First Name")
    .required("First Name is Required"),
  lName: yup.string("Enter Valid Last Name").required("Last Name is Required"),
  age: yup
    .number("Enter Valid age")
    .min(1)
    .max(100)
    .required("Age is Required"),
  email: yup
    .string("Enter Valid email")
    .email("Enter Valid email")
    .required("email is Required"),
  mobile: yup
    .number("Enter Valid Number")
    .integer("Enter Valid Number")
    .positive("Enter Valid Number")
    .required("Mobile Number is Required"),
  password: yup.string().min(8).max(16).required("Password is Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});
export default function SignUp({ show, onHide, setLogIn }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  function onHandleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Modal
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
    >
      <form
        action="#"
        onSubmit={handleSubmit((data) => {
          fetch("http://localhost:8080/userList", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then(onHide(false))
            .then(setLogIn(true))
            .catch((err) => toast.error("failed " + err.message));
        })}
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
          <p className="d-flex justify-content-around" style={errorStyle}>
            <span>{errors.fName?.message}</span>{" "}
            <span>{errors.lName?.message}</span>
          </p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-file-person-fill"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              area-aria-label="First Name"
              {...register("fName")}
            />
            <Form.Control
              placeholder="Last Name"
              area-aria-label="Last Name"
              {...register("lName")}
            />
          </InputGroup>
          <p style={errorStyle}>{errors.age ? "Enter Valid Age" : ""}</p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-calendar"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Age"
              area-aria-label="age"
              {...register("age")}
            />
          </InputGroup>
          <p style={errorStyle}>{errors.email?.message}</p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-envelope-at"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Email Address"
              area-aria-label="email id"
              {...register("email")}
            />
          </InputGroup>
          <p style={errorStyle}>{errors.mobile ? "Enter Valid Number" : ""}</p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-phone"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Mobile Number"
              area-aria-label="Mobile number"
              {...register("mobile")}
            />
          </InputGroup>
          <p style={errorStyle}>{errors.password?.message}</p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-keyboard"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Create Password"
              area-aria-label="create password"
              type="password"
              {...register("password")}
            />
          </InputGroup>
          <p style={errorStyle}>
            {errors.confirmPassword ? "Enter Valid Password" : ""}
          </p>
          <InputGroup className="my-4">
            <InputGroup.Text>
              <i className="bi bi-keyboard"></i>
            </InputGroup.Text>
            <Form.Control
              placeholder="Re-enter Password"
              area-aria-label="re-enter password"
              type="password"
              {...register("confirmPassword")}
            />
          </InputGroup>
          <Button className="d-block mx-auto mt-4 w-50 p-2 fs-4" type="submit">
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
