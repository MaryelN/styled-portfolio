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
    overflow: hidden;

    @media (max-width: 960px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
    }
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 960px) {
      height: 75vh;
    }
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
