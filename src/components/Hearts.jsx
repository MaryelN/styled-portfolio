import styled from "styled-components";
import heart from "../assets/images/about/heart-icon.png";
import emptyHeart from "../assets/images/about/white_heart-icon.png";

const Image = styled.img`
  object-fit: contain;
  width: 15vw;
  margin-bottom: 15px;

  @media (min-width: 960px) {
    width: 3vw;
    margin: 5px;
  }
`;

function Hearts({ level }) {
  const hearts = Array.from({ length: 5 }, (_, i) => (
    <Image key={i} src={i < level ? heart : emptyHeart} alt="Heart icon" />
  ));

  return <div>{hearts}</div>;
}

export default Hearts;
