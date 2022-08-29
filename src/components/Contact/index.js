import React, { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { validateEmail } from "../../utils/helpers";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
init(process.env.REACT_APP_USER_ID);

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(event) {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  const [nameEJS, setName] = useState("");
  const [emailEJS, setEmail] = useState("");
  const [messageEJS, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (nameEJS && emailEJS && messageEJS) {
      const serviceId = "service_m1r31zs";
      const templateId = "template_qz58mwb";
      const userId = "QeEdti2xaaRq_5ozI";

      const templateParams = {
        nameEJS,
        emailEJS,
        messageEJS,
      };
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));

      setName("");
      setEmail("");
      setMessage("");
      setEmailSent(true);
      setIsVisible(true);
      console.log("Email sent!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const [isVisible, setIsVisible] = useState(false);

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
                placeholder="Name"
                onBlur={handleChange}
                value={nameEJS}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="m-3">
              <Form.Label htmlFor="email">Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleChange}
                value={emailEJS}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="your message here..."
                onBlur={handleChange}
                value={messageEJS}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>

            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
            <Button variant="outline-success" type="submit" onClick={submit}>
              Submit
            </Button>
          </Form>
          {isVisible && emailSent && (
            <span>Thanks for your message! I'll be in touch soon!</span>
          )}
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
