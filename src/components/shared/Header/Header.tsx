import { Link } from "react-router-dom";

// icons
import twitter from "../../../assets/twitter.svg";
import telegram from "../../../assets/telegram.svg";
import subscribe from "../../../assets/subscribe.svg";
import signIn from "../../../assets/sign-in.svg";

// components
import { ChangeTheme } from "../ChangeTheme/ChangeTheme";

// styles
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.dropdownContainer}>
        <button className={styles.dropbtn}>
          <img src={subscribe} alt="Subscribe Icon" />
          <span className={styles.subscribeText}>ПОДПИШИСЬ</span>
        </button>
        <div className={styles.dropdownContent}>
          <a href="https://tm.com">
            <img src={telegram} alt="Telegram" />
            <span>Telegram</span>
          </a>
          <a href="https://x.com/">
            <img src={twitter} alt="Twitter" />
            <span>Твиттер</span>
          </a>
        </div>
      </div>
      <Link to="/" className={styles.logo}></Link>
      <div className={styles.authorizationContainer}>
        <div className={styles.signIn}>
          <span className={styles.authorizationText}>ВХОД</span>
          <img src={signIn} alt="Sign In" />
        </div>
        <div className={styles.signUp}>
          <span className={styles.authorizationText}>РЕГИСТРАЦИЯ</span>
          <ChangeTheme />
        </div>
      </div>
    </header>
  );
};
