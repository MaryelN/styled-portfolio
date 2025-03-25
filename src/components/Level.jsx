import styled from "styled-components";
import Hearts from "./Hearts";

const StyledLevel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  color: white;
  font-size: 1rem;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
`;

const Span = styled.span`
  color: #ffd100;
  font-size: 1.3rem;
  font-family: "Press Start 2P", system-ui;
  text-transform: uppercase;
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
`;

function Level({ selectedTechno, data }) {
  const techno = data.find((item) => item.name === selectedTechno);
  const level = techno ? Number(techno.level) : null;

  return (
    <StyledLevel>
      <P>
        Level : <Span>{selectedTechno}</Span>
      </P>

      <Container>
        <Hearts level={level} />
      </Container>
    </StyledLevel>
  );
}

export default Level;
