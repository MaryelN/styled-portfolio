import styled from "styled-components";
import { motion } from "framer-motion";
import Bg from "../assets/images/formation/bg-lg.png";
import BgMobile from "../assets/images/formation/bg-sm.png";
import LampImg from "../assets/images/formation/lamp.gif";
import FormationsBtn from "../components/FormationsBtn";

const FormationContainer = styled.section`
  display: flex;
  justify-content: center;
  min-height: 75vh;
  margin-top: 5rem;
`;

const ContainerBg = styled(motion.section)`
  height: 75vh;
  width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-image: url(${Bg});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerMobileBg = styled(motion.section)`
  margin-top: 12rem;
  height: 75vh;
  width: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-image: url(${BgMobile});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Title = styled(motion.h1)`
  color: #fff;
  text-align: center;
  font-family: "Press Start 2P", system-ui;
  @media (max-width: 768px) {
    position: absolute;
    top: -250px;
    left: 120px;
  }
`;

const Lamp = styled(motion.img)`
  position: absolute;
  width: 5rem;
  bottom: 130px;
  margin-left: 2rem;
  @media (max-width: 768px) {
    top: -160px;
    left: 140px;
  }
`;

const data = {
  1: {
    date: "2000",
    title: "Formation Title 1",
    text: "This is the text for Button 1.",
    position1: { bottom: "16%", left: "3%" },
    position2: { top: "0%", left: "35%" },
  },
  2: {
    date: "2020",
    title: "Formation Title 2",
    text: "Here is some information for Button 2.",
    position1: { bottom: "16%", left: "15%" },
    position2: { top: "15%", left: "35%" },
  },
  3: {
    date: "2020",
    title: "Formation Title 3",
    text: "Here is some information for Button 2.",
    position1: { top: "17%", left: "25%" },
    position2: { top: "30%", left: "35%" },
  },
  4: {
    date: "2020",
    title: "Formation Title 4",
    text: "Text related to Button 3.",
    position1: { top: "17%", left: "40%" },
    position2: { top: "45%", left: "35%" },
  },
  5: {
    date: "2020",
    title: "Formation Title 5",
    text: "Button 4's text.",
    position1: { bottom: "16%", right: "40%" },
    position2: { top: "60%", left: "35%" },
  },
  6: {
    date: "2020",
    title: "Formation Title 6",
    text: "Button 4's text.",
    position1: { bottom: "2%", right: "10%" },
    position2: { top: "75%", left: "35%" },
  },
};

function Formation() {
  return (
    <>
      <FormationContainer id="formation">
        <ContainerBg
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Title
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Formation
          </Title>
          <Lamp src={LampImg} />
          <FormationsBtn data={data} />
        </ContainerBg>
        <ContainerMobileBg
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Title>Formation</Title>
          <Lamp src={LampImg} />
          <FormationsBtn data={data} />
        </ContainerMobileBg>
      </FormationContainer>
    </>
  );
}

export default Formation;
