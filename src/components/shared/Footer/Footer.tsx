import { Link } from "react-router-dom";

import { useAppSelector } from "../../../store/hooks";

import twiterWhite from "../../../assets/twiter-white.svg";

import styles from "./Footer.module.css";

export const Footer = () => {
  const { categories } = useAppSelector((state) => state.categories);

  return (
    <footer className={styles.footer}>
      <div className={styles.navWrapper}>
        <ul className={styles.navLinks}>
          {categories.map((el) => (
            <li className={styles.linkItem} key={el.id}>
              <Link className={styles.link} to={`/films/${el.type}`}>
                {el.name}
              </Link>
            </li>
          ))}
          <li className={styles.linkItem}>
            <Link className={`${styles.link} ${styles.white}`} to={`/support`}>
              Поддержка
            </Link>
          </li>
        </ul>
        <p className={styles.text}>
          HDrezka.me — мы самый лучший онлайн кинотеатр!
        </p>
      </div>
      <div className={styles.contactInfo}>
        <p>© 2024 HDrezka.me</p>
        <img className={styles.twitterImage} src={twiterWhite} alt="twiter white" />
      </div>
    </footer>
  );
};
