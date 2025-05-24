import { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contacts } from "../pages/Contacts";
import { Blog } from "../pages/Blog";
import { EMAIL_REGEXP } from "../constants/regexp";

import logo from "../assets/react.svg";

export const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const toggleLoginModalVisibility = () => {
    setLoginModalVisible((prevValue) => !prevValue);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (!EMAIL_REGEXP.test(String(e.target.value.toLowerCase()))) {
      setEmailError("Некоректний email");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.length > 8) {
      setPasswordError("Пароль повинен мати не менше 3 і не більше 8 символів");
      if (!e.target.value) {
        setPasswordError("Пароль не може бути порожнім");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else if (email.length > 0 && password.length > 0) {
      setFormValid(true);
    }
  }, [emailError, passwordError, email, password]);

  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="React logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/"> Home </Nav.Link>
              <Nav.Link href="/about"> About us </Nav.Link>
              <Nav.Link href="/contacts"> Contacts </Nav.Link>
              <Nav.Link href="/blog"> Blog </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="me-sm-3"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
            <Button className="ms-2" onClick={toggleLoginModalVisibility}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={loginModalVisible} onHide={toggleLoginModalVisibility}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicEmail">
              <Form.Label>Email Address</Form.Label>
              {emailDirty && emailError && (
                <div style={{ color: "red" }}>{emailError}</div>
              )}
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              {passwordError && passwordDirty && (
                <div style={{ color: "red" }}>{passwordError}</div>
              )}
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => passwordHandler(e)}
                onBlur={(e) => blurHandler(e)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button disabled={!formValid} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
};
