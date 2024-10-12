import styles from "./MenuBurger.module.css";

export const MenuBurger = () => {
  return (
    <div className={styles.navgarToggle} id="navbarToggle">
      <span className={styles.bart}></span>
      <span className={styles.bart}></span>
      <span className={styles.bart}></span>
    </div>
  );
};
