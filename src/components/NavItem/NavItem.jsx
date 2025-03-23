import styles from "./NavItem.module.css";

const NavItem = ({ icon, label }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.icon}>
        <img src={icon} alt={`${label} icon`} className={styles.icon} />
      </div>
    </div>
  );
};

export default NavItem;
