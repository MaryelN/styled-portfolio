import aboutIcon from "../../assets/images/nav/about-icon.png";
import contactIcon from "../../assets/images/nav/contact-icon.png";
import formationIcon from "../../assets/images/nav/formation-icon.png";
import codeIcon from "../../assets/images/nav/code-icon.png";
import menuIcon from "../../assets/images/nav/menu-icon.png";
import pauseIcon from "../../assets/images/nav/pause-icon.png";
import NavItem from "../NavItem/NavItem";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: aboutIcon, label: "About", path: "/" },
  { icon: formationIcon, label: "Formation", path: "*" },
  { icon: codeIcon, label: "Code", path: "*" },
  { icon: contactIcon, label: "Contact", path: "*" },
];

const Navbar = () => {
  return (
    <heather>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <NavItem icon={item.icon} label={item.label} />
            </NavLink>
          ))}
        </nav>
      </div>

      <div className={styles.menu}>
        <div>
          <img
            src={menuIcon}
            alt="pause icon menu"
            className={styles.menu_btn}
          ></img>
        </div>
        <div className={styles.menu_list}>
          <div>
            <img src={pauseIcon} alt="pause icon" />
          </div>
          <div>
            {navItems.map((item) => (
              <div className={styles.menu_item}>
                {item.label}
                <NavLink key={item.label} to={item.path}>
                  <NavItem icon={item.icon} label={item.label} />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </heather>
  );
};

export default Navbar;
