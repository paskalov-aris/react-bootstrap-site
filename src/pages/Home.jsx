import { Container } from "react-bootstrap";
import { CarouselBoxHk } from "../components/CarouselBoxHk";

import { TEAMS } from "../constants/mockData";
import { TeamCard } from "../components/TeamCard";

export const Home = () => {
  return (
    <div>
      <CarouselBoxHk />
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <div className="row">
          {TEAMS.map((team) => (
            <TeamCard key={team.id} id={team.id} department={team.department} coverUrl={team.coverUrl} />
          ))}
        </div>
      </Container>
    </div>
  );
};
