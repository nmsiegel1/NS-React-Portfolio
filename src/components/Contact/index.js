import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="container">
      <div className="row">
        <div>
          <h2 className="title m-5">
            <u>Contact me</u>
          </h2>
        </div>
        <div className="col-xs-12 col-md-8 mb-4">
          <Form
            id="contact-form"
            className="container mx-5"
            onSubmit={handleSubmit}
            style={{ width: "80%", color: "var(--quint-color)" }}
          >
            <Form.Group className="m-3">
              <Form.Label htmlFor="name">Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                defaultValue={name}
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={email}
                onBlur={handleChange}
              />
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label className="form" htmlFor="message">
                Message:
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows="5"
                defaultValue={message}
                onBlur={handleChange}
              />
            </Form.Group>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-xs-12 col-md-4 contact-div rounded mt-5 d-flex align-items-center">
          <p>
            I'd love to hear from you! I am eager to join a collaborative team
            where I can continue honing my skills. Please fill out this form or
            email me at{" "}
            <a
              href="mailto: siegel.nina.m@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me"
            >
              siegel.nina.m@gmail.com
            </a>
            . Want to see more? Checkout my GitHub{" "}
            <a
              href="https://github.com/nmsiegel1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-me"
            >
              nmsiegel1
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
