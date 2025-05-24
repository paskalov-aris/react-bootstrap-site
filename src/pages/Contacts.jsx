import { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { EMAIL_REGEXP } from "../constants/regexp";

export const Contacts = () => {
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [reviewDirty, setReviewDirty] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [formValid, setFormValid] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "review":
        setReviewDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);

    if (!EMAIL_REGEXP.test(String(e.target.value.toLowerCase()))) {
      setEmailError("Некоректний email");
    } else {
      setEmailError("");
    }
  };

  const reviewHandler = (e) => {
    setReview(e.target.value);
    if (e.target.value.length < 20) {
      setReviewError("Ваше звернення повинне мати не менше 20 символів");
      if (!e.target.value) {
        setReviewError("Текст не може бути порожнім");
      }
    } else {
      setReviewError("");
    }
  };

  useEffect(() => {
    if (emailError || reviewError) {
      setFormValid(false);
    } else if (email.length > 0 && review.length > 20) {
      setFormValid(true);
    }
  }, [emailError, reviewError, email, review]);

  return (
    <Container>
      <Row>
        <Col md={12} className="d-flex flex-column align-items-start">
          <h2 className="text-center">Contact Us</h2>

          <Form className="d-flex flex-column align-items-start">
            <Form.Group
              controlId="basicEmail"
              className="d-flex flex-column w-100 align-items-start mb-3"
            >
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
            <Form.Group
              controlId="basicText"
              className="d-flex flex-column w-100 align-items-start"
            >
              <Form.Label>Відгук</Form.Label>
              {reviewDirty && reviewError && (
                <div style={{ color: "red" }}>{reviewError}</div>
              )}
              <Form.Control
                as="textarea"
                rows={5}
                name="review"
                placeholder="Enter your review"
                value={review}
                onChange={(e) => reviewHandler(e)}
                onBlur={(e) => blurHandler(e)}
                className="mb-2 w-100"
              />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox" className="mb-3">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button disabled={!formValid} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
