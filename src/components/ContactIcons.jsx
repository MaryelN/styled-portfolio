import styled from "styled-components";
import LinkIcons from "./LinkIcons";
import GithubIcon from "../assets/images/contact/github-default.png";
import GithubIconHover from "../assets/images/contact/github-hover.png";
import LinkedinIcon from "../assets/images/contact/linkedin-default.png";
import LinkedinIconHover from "../assets/images/contact/linkedin-hover.png";
import WebIcon from "../assets/images/contact/web-default.png";
import WebIconHover from "../assets/images/contact/web-hover.png";
import MaltIcon from "../assets/images/contact/malt-default.png";
import MaltIconHover from "../assets/images/contact/malt-hover.png";
import LogoImg from "../assets/images/studio-logo.png";

function ContactIcons() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `;

  const Info = styled.div`
    margin-bottom: 1rem;
    color: #ffffff;
    font-family: "Press Start 2P", system-ui;
    font-size: 1rem;
  `;

  const IconsContainer = styled.div`
    display: flex;
    gap: 1.5rem;
  `;

  const Logo = styled.img``;

  return (
    <Container>
      <Info>
        <p>email@example.com</p>
        <p>+00.00.00.</p>
      </Info>
      <IconsContainer>
        <LinkIcons
          iconDefault={GithubIcon}
          iconHover={GithubIconHover}
          link="https://github.com/"
        />
        <LinkIcons
          iconDefault={LinkedinIcon}
          iconHover={LinkedinIconHover}
          link="https://linkedin.com/"
        />
        <LinkIcons
          iconDefault={WebIcon}
          iconHover={WebIconHover}
          link="mailto:email@example.com"
        />
        <LinkIcons iconDefault={MaltIcon} iconHover={MaltIconHover} link="" />
      </IconsContainer>
      <Logo src={LogoImg} />
    </Container>
  );
}

export default ContactIcons;
