import styled from "styled-components";
import Bg from "../assets/images/formation/background.png";

const FormationContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ContainerBg = styled.section`
  height: 75vh;
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerMobileBg = styled.section`
  height: 75vh;
  width: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: "Press Start 2P", system-ui;
`;

function Formation() {
  return (
    <>
      <FormationContainer>
        <ContainerBg>
          <Title>Formation</Title>
        </ContainerBg>
        <ContainerMobileBg>
          <Title>Formation</Title>
        </ContainerMobileBg>
      </FormationContainer>
    </>
  );
}

export default Formation;
