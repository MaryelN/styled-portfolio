import styled from "styled-components";
import buildings from "../assets/images/index/buildings-gif.gif";

const StyledBuildings = styled.div`
  justify-content: center;
  align-items: center;

  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Image = styled.img`
  width: 25vw;
`;

function Buildings() {
  return (
    <StyledBuildings>
      <Image src={buildings} alt="buildings" />
    </StyledBuildings>
  );
}

export default Buildings;
