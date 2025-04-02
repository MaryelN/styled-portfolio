import { useState } from "react";
import styled from "styled-components";
import FormButton from "../components/FormButton";
import BackgroundImage from "../assets/images/contact/form-bg.png";

const FormContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-content-center;
`;

const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  font-family: "Press Start 2P", system-ui;
  font-size: 0.8rem;
  width: 80%;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  font-family: "Press Start 2P", system-ui;
  font-size: 0.8rem;
  width: 80%;
  resize: none;
  height: 120px;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <FormContainer>
      <h2>Contact Us</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <FormButton type="submit" />
      </Form>
    </FormContainer>
  );
}

export default ContactForm;
