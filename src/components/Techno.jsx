import bootstrap from "../assets/images/about/bootstrap-icon.png";
import css from "../assets/images/about/css-icon.png";
import js from "../assets/images/about/js-icon.png";
import docker from "../assets/images/about/docker-icon.png";
import figma from "../assets/images/about/figma-icon.png";
import git from "../assets/images/about/git-icon.png";
import html from "../assets/images/about/html-icon.png";
import mongo from "../assets/images/about/mongo-icon.png";
import react from "../assets/images/about/react-icon.png";
import sass from "../assets/images/about/sass-icon.png";
import symfony from "../assets/images/about/symfony-icon.png";
import tailwind from "../assets/images/about/tailwind-icon.png";
import php from "../assets/images/about/php-icon.png";
import mysql from "../assets/images/about/mysql-icon.png";
import TechnoItem from "./TechnoItem";
import styled from "styled-components";
import Level from "./Level";
import background from "../assets/images/about/icons-background.png";
import { useState } from "react";

const data = [
  { name: "html", image: html, level: 5 },
  { name: "css", image: css, level: 5 },
  { name: "js", image: js, level: 4 },
  { name: "react", image: react, level: 5 },
  { name: "bootstrap", image: bootstrap, level: 5 },
  { name: "tailwind", image: tailwind, level: 5 },
  { name: "sass", image: sass, level: 3 },
  { name: "php", image: php, level: 2 },
  { name: "symfony", image: symfony, level: 4 },
  { name: "docker", image: docker, level: 3 },
  { name: "mongo", image: mongo, level: 3 },
  { name: "mysql", image: mysql, level: 4 },
  { name: "git", image: git, level: 4 },
  { name: "figma", image: figma, level: 4 },
];

const StyledTechno = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;

  @media (min-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100vw;

  @media (min-width: 960px) {
    width: 35vw;
  }
`;

const BackgroundImage = styled.img`
  max-width: 100%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  margin: auto;
  top: 35%;
  margin-left: 20px;

  @media (min-width: 960px) {
    top: 30%;
    gap: 20px;
    left: 5%;
  }
`;

const H3 = styled.h3`
  color: #ffffff;
  font-family: "Press Start 2P", system-ui;
  font-size: 4vw;
  text-align: center;

  @media (min-width: 960px) {
    font-size: 1vw;
  }
`;

function Techno() {
  const [selectedTechno, setSelectedTechno] = useState("html");

  return (
    <StyledTechno>
      <Level selectedTechno={selectedTechno} data={data} />
      <Container>
        <H3>SELECT A TECHNOLOGY</H3>
        <BackgroundImage src={background} alt="background" />

        <ImageWrapper>
          {data.map((item) => (
            <TechnoItem
              key={item.name}
              item={item}
              onSelect={setSelectedTechno}
              selectedTechno={selectedTechno}
            />
          ))}
        </ImageWrapper>
      </Container>
    </StyledTechno>
  );
}

export default Techno;
