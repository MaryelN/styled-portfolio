import styled from "styled-components";

function TextAbout() {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 4rem;
    margin-left: 20px;
    margin-right: 20px;
  `;

  const StyledTextAbout = styled.div`
    max-width: 1048px;
  `;

  const H2 = styled.h2`
    color: #ffffff;
    font-family: "Press Start 2P", system-ui;
    font-size: 1.5em;
  `;

  const P = styled.p`
    color: white;
    font-family: "VT323", monospace;
    font-size: 1.8em;
  `;
  return (
    <Container>
      <StyledTextAbout>
        <H2>ABOUT ME</H2>
        <P>
          Le rôle de l’infirmière dans le maintien des personnes dépendantes à
          domicile est crucial et multidimensionnel. Notre objectif principal
          est de garantir la sécurité de chaque patient tout en leur permettant
          de vivre chez eux, dans un environnement familier, le plus longtemps
          possible. Nous évaluons les besoins de la personne dépendante en
          matière de soins, d’hygiène, de nutrition, de mobilité et de sécurité.
          Cette évaluation permet de mettre en place un plan de soins
          personnalisés.
        </P>
      </StyledTextAbout>
    </Container>
  );
}

export default TextAbout;
