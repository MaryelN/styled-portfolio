import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Icon = styled.img`
  height: 1.5rem;
  @media (max-width: 768px) {
    height: 2.5rem;
    width: auto;
    margin-left: 1rem;
  }
`;

const NavIcon = ({ icon, label, onClick, selected }) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <Icon src={icon} alt={`${label} icon`} />
    </Container>
  );
};

export default NavIcon;
