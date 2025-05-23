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

import logo from "../assets/react.svg";
import { useState } from "react";

export const Header = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const toggleLoginModalVisibility = () => {
    setLoginModalVisible((prevValue) => !prevValue);
  };

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
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Button variant="primary" type="submit">
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
