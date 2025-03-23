import styled from "styled-components";
import helloGif from "../assets/images/index/hello-gif.gif";

const StyledHeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10vw;
`;

const Image = styled.img`
  width: 12vw;
  height: 24vh;
`;

const P = styled.p`
  color: white;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  margin-top: -3vw;
  font-size: 1vw;
`;

function HeroText() {
  return (
    <StyledHeroText>
      <Image src={helloGif} />
      <P>Welcome to my porfolio</P>
    </StyledHeroText>
  );
}

export default HeroText;
