import { Card, Container, Button } from "react-bootstrap";
import { CarouselBoxHk } from "../components/CarouselBoxHk";

import DevelopersImg from '../assets/developers.jpg'
import NaturalScientistsImg from '../assets/natural-scientists.jpg'
import MarketersImg from '../assets/marketers.jpg'

export const Home = () => {
  return (
    <div>
      <CarouselBoxHk />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <div className="row">
          <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
              <Card.Img
                variant="top"
                src={DevelopersImg}
              />
              <Card.Body>
                <Card.Title>Розробники</Card.Title>
                <Card.Text>Команда 1</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
              <Card.Img
                variant="top"
                src={NaturalScientistsImg}
              />
              <Card.Body>
                <Card.Title>Природознавці</Card.Title>
                <Card.Text>Команда 2</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="col">
            <Card className="m-4 text-center" bg="light" border="primary">
              <Card.Img
                variant="top"
                src={MarketersImg}
              />
              <Card.Body>
                <Card.Title>Маркетологи</Card.Title>
                <Card.Text>Команда 3</Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};
