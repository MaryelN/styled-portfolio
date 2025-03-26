import { useState } from "react";
import styled from "styled-components";
import TextBg from "../assets/images/formation/Text-bg.png";

const ButtonContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Button = styled.button`
  background-color: rgb(240, 39, 146);
  color: #fff;
  font-size: 1.2rem;
  padding: 1.2rem 1rem;
  box-shadow: 3px 3px rgba(176, 52, 255, 1);
  border: none;
  cursor: pointer;
  margin: 1rem;
  border-radius: 100%;
  transition: background-color 0.3s ease;
  position: absolute;

  &:hover {
    background-color: rgb(255, 191, 29);
  }

  // Dynamically applying the position properties
  top: ${({ position1 }) => position1?.top || "auto"};
  left: ${({ position1 }) => position1?.left || "auto"};
  right: ${({ position1 }) => position1?.right || "auto"};
  bottom: ${({ position1 }) => position1?.bottom || "auto"};
`;

const TextContainer = styled.div`
  position: absolute;
  top: -80px;
  margin-left: 1rem;
  padding: 1rem;
  width: 22.5rem;
  height: 8.5rem;
  background-image: url(${TextBg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

function FormationsBtn({ data }) {
  const [textToShow, setTextToShow] = useState("");

  const handleClick = (buttonLabel) => {
    setTextToShow(data[buttonLabel]?.text || "");
  };

  return (
    <ButtonContainer>
      {Object.keys(data).map((key) => (
        <Button
          key={key}
          onClick={() => handleClick(key)}
          position1={data[key].position1}
        >
          {data[key].date}
        </Button>
      ))}
      {textToShow && <TextContainer>{textToShow}</TextContainer>}
    </ButtonContainer>
  );
}
export default FormationsBtn;
