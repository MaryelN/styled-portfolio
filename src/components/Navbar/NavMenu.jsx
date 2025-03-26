import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavIcon from "./NavIcon";
import menuIcon from "../../assets/images/nav/menu-icon.png";
import menuSelected from "../../assets/images/nav/menu_selected-icon.png";
import pauseIcon from "../../assets/images/nav/pause-icon.png";
import ButtonBg from "../../assets/images/nav/button.png";
import ButtonSelected from "../../assets/images/nav/button-selected.png";

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
  z-index: 999;
  right: 0;
  margin: 1rem;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const BlurOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(10px); /* Blur effect */
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay for contrast */
  z-index: 998; /* Below the menu but above the content */
`;

const MenuList = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1000;
`;
const TitlePause = styled.img`
  width: 10rem;
  margin: 2rem;
`;

const MenuItem = styled.div`
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
  cursor: pointer;
`;

const NavTitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

function Navmenu({ navIcons }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  const handleMenuClick = (label, target) => {
    setSelectedItem(label);

    const targetElement = document.getElementById(target);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setMenuVisible(false);
      setSelectedItem(null);
    }, 700); // Hides menu after 700 ms
  };

  return (
    <div>
      <Menu>
        <a>
          <BtnMenu
            src={menuVisible ? menuSelected : menuIcon}
            alt="pause icon menu"
            onClick={toggleMenu}
          />
        </a>
        <AnimatePresence>
          {menuVisible && (
            <>
              <BlurOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleMenu}
              />
              <MenuList isVisible={menuVisible}>
                <TitlePause src={pauseIcon} alt="pause title" />

                {navIcons.map((icon) => (
                  <MenuItem
                    key={icon.label}
                    selected={selectedItem === icon.label}
                    onClick={() => handleMenuClick(icon.label, icon.target)}
                  >
                    <NavTitle>{icon.label}</NavTitle>
                    <NavIcon icon={icon.icon} label={icon.label} />
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </AnimatePresence>
      </Menu>
    </div>
  );
}

export default Navmenu;
