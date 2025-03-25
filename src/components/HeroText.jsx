import styled from "styled-components";
import helloGif from "../assets/images/index/hello-gif.gif";
import startButton from "../assets/images/index/start-button.png";

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 960px) {
    height: 75vh;
    margin-top: -10vw;
  }
`;

const HelloGif = styled.img`
  width: 30vw;
  @media (min-width: 960px) {
    width: 12vw;
    height: auto;
  }
`;

const P = styled.p`
  color: white;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  margin-top: -10vw;
  font-size: 5vw;
  text-align: center;

  @media (min-width: 960px) {
    margin-top: -3vw;
    font-size: 1vw;
  }
`;

const StartImage = styled.img`
  display: none;
  cursor: pointer;

  @media (min-width: 960px) {
    width: 10vw;
    display: block;
    margin: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

function HeroText() {
  return (
    <StyledHeroText>
      <HelloGif src={helloGif} />
      <P>Welcome to my porfolio</P>
      <StartImage src={startButton} />
    </StyledHeroText>
  );
}

export default HeroText;
