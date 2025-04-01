import styled from "styled-components";
import Img from "../../assets/images/nav/up-icon.png";

const UpBtn = styled.img`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  width: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 958px) {
    display: none;
  }
`;

function UpButton({ onClick }) {
  return (
    <>
      <UpBtn src={Img} alt="up button icon" onClick={onClick} />
    </>
  );
}

export default UpButton;
