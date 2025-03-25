import styled from "styled-components";
import Techno from "../components/Techno";
import TextAbout from "../components/TextAbout";

const StyledAbout = styled.div``;

function About() {
  return (
    <StyledAbout>
      <TextAbout />
      <Techno />
    </StyledAbout>
  );
}

export default About;
