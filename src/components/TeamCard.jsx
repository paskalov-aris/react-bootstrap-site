import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const TeamCard = ({ id, department, coverUrl }) => {
  const navigate = useNavigate();

  const handleAboutTeamButtonPress = () => {
    navigate(`/about-team/${id}`);
  };

  return (
    <div className="col">
      <Card className="m-4 text-center" bg="light" border="primary">
        <Card.Img variant="top" src={coverUrl} />
        <Card.Body>
          <Card.Title>{department}</Card.Title>
          <Card.Text>Команда {id + 1}</Card.Text>
          <Button variant="primary" onClick={handleAboutTeamButtonPress}>
            About team
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
