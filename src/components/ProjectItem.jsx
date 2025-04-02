import styled from "styled-components";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

import yellowButton from "../assets/images/portfolio/select-button.png";
import pinkButton from "../assets/images/portfolio/selected-button.png";
import reactIcon from "../assets/images/about/react-icon.png";
import tailwindIcon from "../assets/images/about/tailwind-icon.png";
import htmlIcon from "../assets/images/about/html-icon.png";
import cssIcon from "../assets/images/about/css-icon.png";

const data = [
  { name: "react", img: reactIcon },
  { name: "tailwind", img: tailwindIcon },
  { name: "html", img: htmlIcon },
  { name: "css", img: cssIcon },
];

const StyledProjectItem = styled.div`
  background-color: #5561d3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const H3 = styled.h3`
  font-family: "Press Start 2P", system-ui;
  text-align: center;
`;

const SelectImage = styled.img`
  width: 10em;
  cursor: pointer;
  display: block;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Icon = styled.img`
  width: 3em;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  margin: 1em;
`;

function ProjectItem({ name, img, techno, desc, url }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <StyledProjectItem>
        <H3>{name}</H3>
        <ProjectImage src={img} alt={name} />

        <IconContainer>
          {data
            .filter((item) => techno.includes(item.name))
            .map((item, index) => (
              <Icon key={index} src={item.img} alt={item.name} />
            ))}
        </IconContainer>

        <SelectImage
          src={isModalOpen ? pinkButton : yellowButton}
          alt="select button"
          onClick={openModal}
        />
      </StyledProjectItem>

      {isModalOpen && (
        <ProjectModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          name={name}
          desc={desc}
          url={url}
          img={img}
        />
      )}
    </>
  );
}

export default ProjectItem;
