import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import NavIcon from "./NavIcon";
import NavBg from "../../assets/images/nav/nav-bg.png";
import ActiveBg from "../../assets/images/nav/active-bg.png";
import UpButton from "./UpButton";

const NavContainer = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  bottom: 0;
  width: 100%;
  z-index: 999;
  left: 0;
  right: 0;
  margin: 1rem auto;
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItems = styled.nav`
  background-image: url(${NavBg});
  background-size: cover;
  background-position: center;
  width: 13rem;
  height: 2.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 0;
`;

const NavItemWrapper = styled(motion.div)`
  background-image: ${({ isActive }) =>
    isActive ? `url(${ActiveBg})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
`;

const Nav = ({ navIcons }) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "hero";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 100) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavContainer>
      <NavItems>
        {navIcons.map((icon) => (
          <NavItemWrapper
            key={icon.label}
            isActive={activeSection === icon.target}
            onClick={() => scrollToSection(icon.target)}
            whileHover={{ scale: 1.1 }}
          >
            <NavIcon icon={icon.icon} label={icon.label} />
          </NavItemWrapper>
        ))}
      </NavItems>
      <UpButton />
    </NavContainer>
  );
};

export default Nav;
