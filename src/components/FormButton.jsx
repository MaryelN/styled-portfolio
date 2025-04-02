import { useState } from "react";
import styled from "styled-components";
import ButtonDefault from "../assets/images/contact/send-button.png"; // Default image
import ButtonHover from "../assets/images/contact/sent-button.png"; // Hover image

const ButtonContainer = styled.button`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 140px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  margin-left: 32%;
  transition: background-image 0.3s ease;
`;

function FormButton({ type }) {
  const [image, setImage] = useState(ButtonDefault);

  return (
    <ButtonContainer
      type={type}
      image={image}
      onMouseEnter={() => setImage(ButtonHover)}
      onMouseLeave={() => setImage(ButtonDefault)}
    />
  );
}

export default FormButton;
