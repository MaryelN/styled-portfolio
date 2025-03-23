import styled from "styled-components";
import ProfileCard from "../components/ProfileCard";
import HeroText from "../components/HeroText";
import Buildings from "../components/Buildings";
import Sky from "../components/Sky";
import Bus from "../components/Bus";

function Hero() {
  const StyledHero = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr auto;
    height: 100vh;
  `;

  const Container = styled.div`
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <>
      <Sky />
      <Container>
        <StyledHero>
          <ProfileCard />
          <HeroText />
          <Buildings />
          <Bus />
        </StyledHero>
      </Container>
    </>
  );
}

export default Hero;
