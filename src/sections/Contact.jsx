import styled from "styled-components";
import ContactIcons from "../components/ContactIcons";
import ContactForm from "../components/ContactForm";

const Title = styled.h1`
  margin-top: 5rem;
  font-family: "Press Start 2P", system-ui;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  margin: 5rem;
  justify-content: space-around;
  align-items: center;
`;

function Contact() {
  return (
    <section id="contact">
      <Title>Contact Me </Title>
      <Container>
        <ContactIcons />
        <ContactForm />
      </Container>
    </section>
  );
}

export default Contact;
