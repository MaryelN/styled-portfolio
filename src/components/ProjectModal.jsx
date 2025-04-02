import styled from "styled-components";

import bg from "../assets/images/portfolio/background-modal.png";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #5561d3;
  padding: 2rem;
  text-align: center;
  position: relative;
  /* background-image: url(${bg}); */
  width: 90vw;
  height: 90vh;

  @media (min-width: 960px) {
    width: 50vw;
    height: 70vh;
  }
`;

const CloseButton = styled.button`
  color: #e8be00;
  font-family: "Press Start 2P", system-ui;
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  font-size: 40px;
  top: 20px;
  right: 10px;

  &:hover {
    transform: scale(1.1);
  }
`;

const H2 = styled.h2`
  color: white;
  font-family: "Press Start 2P", system-ui;
`;

const P = styled.p`
  color: white;
  font-family: "VT323", monospace;
  font-size: 1.2rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 90vw;
  height: auto;

  @media (min-width: 960px) {
    width: 60%;
    height: 60%;
  }
`;

function ProjectModal({ isModalOpen, closeModal, name, desc, img }) {
  if (!isModalOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>X</CloseButton>
        <H2>{name}</H2>
        <Image src={img}></Image>
        <P>{desc}</P>
      </ModalContent>
    </ModalOverlay>
  );
}

export default ProjectModal;
