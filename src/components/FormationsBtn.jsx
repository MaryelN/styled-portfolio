import { useState, useEffect } from "react";
import styled from "styled-components";
import TextBg from "../assets/images/formation/Text-bg.png";
import Boy from "../assets/images/formation/boy.png";

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
  top: ${({ position }) => position?.top || "auto"};
  left: ${({ position }) => position?.left || "auto"};
  right: ${({ position }) => position?.right || "auto"};
  bottom: ${({ position }) => position?.bottom || "auto"};
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
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: 768px) {
    top: -180px;
  }
`;

const Character = styled.img`
  position: absolute;
  width: 3.5rem;
  margin-left: 0.5rem;
  margin-bottom: 5rem;
  pointer-events: none; /* Prevents the GIF from interfering with clicks */
  top: ${({ position }) => position?.top || "auto"};
  left: ${({ position }) => position?.left || "auto"};
  right: ${({ position }) => position?.right || "auto"};
  bottom: ${({ position }) => position?.bottom || "auto"};
`;

function FormationsBtn({ data }) {
  const [textToShow, setTextToShow] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const handleClick = (dataLabel) => {
    if (selectedButton === dataLabel) {
      setTextToShow("");
      setSelectedButton(null);
    } else {
      const buttonData = data[dataLabel] || {};
      setTextToShow({
        text: buttonData.text || "",
        title: buttonData.title || "",
      });
      setSelectedButton(dataLabel);
    }
  };

  return (
    <ButtonContainer>
      {Object.keys(data).map((key) => (
        <Button
          key={key}
          onClick={() => handleClick(key)}
          position={
            screenWidth < 768
              ? data[key].position2 // Show position2 if screen < 768px
              : data[key].position1
          }
        >
          {data[key].date}
        </Button>
      ))}
      {selectedButton && (
        <Character
          src={Boy}
          position={
            screenWidth < 768
              ? data[selectedButton].position2
              : data[selectedButton].position1
          }
        />
      )}
      {textToShow && (
        <TextContainer>
          <h3>{textToShow.title}</h3>
          <p>{textToShow.text}</p>
        </TextContainer>
      )}
    </ButtonContainer>
  );
}
export default FormationsBtn;
