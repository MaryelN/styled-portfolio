import aboutIcon from "../../assets/images/nav/about-icon.png";
import formationIcon from "../../assets/images/nav/formation-icon.png";
import codeIcon from "../../assets/images/nav/code-icon.png";
import contactIcon from "../../assets/images/nav/contact-icon.png";
import Nav from "./Nav";
import NavMenu from "./NavMenu";

const navIcons = [
  { icon: aboutIcon, label: "About", target: "about" },
  { icon: formationIcon, label: "Formation", target: "formation" },
  { icon: codeIcon, label: "Code", target: "code" },
  { icon: contactIcon, label: "Contact", target: "contact" },
];

function Navbar() {
  return (
    <header>
      <Nav navIcons={navIcons} />
      <NavMenu navIcons={navIcons} />
    </header>
  );
}

export default Navbar;
