import aboutIcon from "../../assets/images/nav/about-icon.png";
import contactIcon from "../../assets/images/nav/contact-icon.png";
import formationIcon from "../../assets/images/nav/formation-icon.png";
import codeIcon from "../../assets/images/nav/code-icon.png";
import menuIcon from "../../assets/images/nav/menu-icon.png";
import menuSelected from "../../assets/images/nav/menu_selected-icon.png";
import pauseIcon from "../../assets/images/nav/pause-icon.png";
import NavBg from "../../assets/images/nav/nav-bg.png";
import ButtonBg from "../../assets/images/nav/button.png";
import ButtonSelected from "../../assets/images/nav/button-selected.png";
import ActiveBg from "../../assets/images/nav/active-bg.png";
import NavIcon from "./NavIcon";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const navIcons = [
  { icon: aboutIcon, label: "About", path: "/" },
  { icon: formationIcon, label: "Formation", path: "*" },
  { icon: codeIcon, label: "Code", path: "*" },
  { icon: contactIcon, label: "Contact", path: "*" },
];

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  margin-bottom: 1rem;
  width: 13rem;
  height: 2.6rem;
  background-image: url(${NavBg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem 0;
`;

const NavItemWrapper = styled.div`
  background-image: ${({ isActive }) =>
    isActive ? `url(${ActiveBg})` : "none"};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  padding: 0.5rem;
  transition: background 0.3s ease;
`;

const Menu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const BtnMenu = styled.img`
  width: 1.5rem;
  position: fixed;
  right: 0;
  margin: 1rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuList = styled.div`
  list-style: none;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const TitlePause = styled.img`
  width: 10rem;
  margin: 2rem;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ selected }) =>
    selected ? `url(${ButtonSelected})` : `url(${ButtonBg})`};
  background-size: cover;
  background-position: center;
  margin: 0.5rem;
  width: 20rem;
  height: 7rem;
  text-decoration: none;
  transition: background 0.3s ease;
`;

const NavTitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleMenuClick = (label) => {
    setSelectedItem(label);
    setTimeout(() => {
      setMenuVisible(false);
      setSelectedItem(null);
    }, 800); // Hides menu after 2 seconds
  };

  return (
    <header>
      <NavContainer>
        <Nav>
          {navIcons.map((icon) => (
            <NavLink
              key={icon.label}
              to={icon.path}
              style={{ textDecoration: "none" }}
            >
              {({ isActive }) => (
                <NavItemWrapper isActive={isActive}>
                  <NavIcon
                    icon={icon.icon}
                    label={icon.label}
                    selected={isActive}
                  />
                </NavItemWrapper>
              )}
            </NavLink>
          ))}
        </Nav>
      </NavContainer>

      <Menu>
        <div>
          <a>
            <BtnMenu
              src={menuVisible ? menuSelected : menuIcon}
              alt="pause icon menu"
              onClick={toggleMenu}
            />
          </a>
        </div>
        <MenuList isVisible={menuVisible}>
          <TitlePause src={pauseIcon} alt="pause title" />

          {navIcons.map((icon) => (
            <MenuItem
              key={icon.label}
              to={icon.path}
              selected={selectedItem === icon.label}
              onClick={() => handleMenuClick(icon.label)}
            >
              <NavTitle>{icon.label}</NavTitle>
              <NavIcon icon={icon.icon} label={icon.label} />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </header>
  );
};

export default Navbar;
