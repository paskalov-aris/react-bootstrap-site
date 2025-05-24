import { useParams } from "react-router-dom";
import { TEAMS } from "../constants/mockData";
import { Col, Container, ListGroup, Row } from "react-bootstrap";

export const AboutTeam = () => {
  const { teamId } = useParams();

  const team = TEAMS.find((team) => team.id === Number(teamId));

  return (
    <Container>
      <Row className="w-100">
        <Col md={9} className="d-flex flex-column align-items-center">
          <img src={team.coverUrl} className="mb-3" width={300} alt={team.department} />
          <p className="mb-0 text-left">Команда {Number(teamId) + 1}</p>
          <h2>{team.department}</h2>
          <p>Склад команди:</p>
          <ListGroup className="w-100">
            {team.members.map((member) => (
              <ListGroup.Item key={member} className="w-100">{member}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
