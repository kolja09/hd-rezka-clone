import { Link } from "react-router-dom";

// store
import { useAppDispatch } from "src/store/hooks";
import { setIsOpenLoginModal } from "src/store/slices/auth/auth.slice";

// icons
import twitter from "src/assets/twitter.svg";
import telegram from "src/assets/telegram.svg";
import subscribe from "src/assets/subscribe.svg";
import signIn from "src/assets/sign-in.svg";

// shared components
import { ChangeTheme } from "src/components/shared";

// styles
import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useAppDispatch();

  const handleOpenLoginModal = () => {
    dispatch(setIsOpenLoginModal(true));
  };

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
        <div onClick={handleOpenLoginModal} className={styles.signIn}>
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
