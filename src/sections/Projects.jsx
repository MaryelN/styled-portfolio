import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import triptrack from "../assets/images/portfolio/triptrack2.png";
import reactbites from "../assets/images/portfolio/react-bites.png";

const StyledProjects = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 960px) {
    margin: 20vh;
  }
`;

const H2 = styled.h2`
  font-family: "Press Start 2P", system-ui;
  text-align: center;
  color: #ffffff;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <H2>Projects</H2>
      <Container>
        <ProjectItem
          name="Trip Track"
          img={triptrack}
          techno="[react, tailwind]"
          desc="TripTrick App est une application permetttant d'enregistrer ses dépenses en voyage"
          url="https://triptrack-teal.vercel.app/"
        />
        <ProjectItem
          name="React Bites"
          img={reactbites}
          techno="[react, tailwind, css]"
          desc="React Bites est une application qui permet de chercher des recettes"
          url="https://react-bites.vercel.app/"
        />
        <ProjectItem
          name="Trip Track"
          img={triptrack}
          techno={["react", "tailwind", "html"]}
        />
      </Container>
    </StyledProjects>
  );
}

export default Projects;
