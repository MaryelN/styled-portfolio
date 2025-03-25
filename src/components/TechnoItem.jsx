import styled from "styled-components";
import selectGif from "../assets/images/about/select-gif.gif";

const StyledTechoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  object-fit: contain;
  height: 4vh;

  @media (min-width: 960px) {
    height: 4.5vh;
  }
`;

const SelectedImage = styled.img`
  object-fit: contain;
  height: 4vh;
  position: absolute;
  top: -90%;
  left: -15%;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
`;

function TechnoItem({ item, onSelect, selectedTechno }) {
  return (
    <StyledTechoItem>
      <Container>
        {selectedTechno === item.name && (
          <SelectedImage src={selectGif} alt="Selected gif" />
        )}
        <Image
          src={item.image}
          alt={item.name}
          onClick={() => onSelect(item.name)}
        />
      </Container>
    </StyledTechoItem>
  );
}

export default TechnoItem;
