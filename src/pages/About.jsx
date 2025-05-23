import { Container, Col, Nav, Row, Tab } from "react-bootstrap";

export const About = () => {
  return (
    <Container>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Program</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Library</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <img
                  src="https://i.pinimg.com/originals/aa/f0/69/aaf069dc6de7618a63de784b70ad4370.jpg"
                  className="d-block w-100"
                  alt="picture one"
                />
                <p>Lorem</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img
                  className="d-block w-100"
                  src="https://images01.nicepagecdn.com/page/10/91/website-design-preview-109156.jpg"
                  alt="picture two"
                />
                <p>Lorem</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img
                  className="d-block w-100"
                  src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png"
                  alt="picture three"
                />
                <p>Lorem</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img
                  className="d-block w-100"
                  src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
                  alt="picture fourth"
                />
                <p>Lorem</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img
                  className="d-block w-100"
                  src="https://programminglibrarian.org/sites/default/files/partnerships_2.jpg"
                  alt="picture fifth"
                />
                <p>Lorem</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
