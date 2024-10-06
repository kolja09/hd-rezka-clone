import { useState } from "react";
import { Outlet } from "react-router-dom";

// store
import { useAppSelector } from "src/store/hooks";

// shared components
import { Footer, Header, LoginModal, Navbar } from "src/components/shared";

// assets
import sideLogo from "src/assets/side-logo.png";
import sideCall from "src/assets/side-call.png";
import sideBtn from "src/assets/side-btn.png";
import rightElem from "src/assets/right-elem.png";
import leftElem from "src/assets/left-elem.png";
import headerCall from "src/assets/header-call.png";
import headerMan from "src/assets/header-man.png";
import sideCallBottom from "src/assets/side-call-bottom.png";
import closeBanner from "src/assets/closeBanner.svg";

// styles
import styles from "./PageLayout.module.css";

export const PageLayout = () => {
  const { isOpenLoginModal } = useAppSelector((state) => state.auth);

  const [isOpenBanner, setIsOpenBanner] = useState(true);

  const handleCloseBanner = () => {
    setIsOpenBanner(false);
  };

  return (
    <div className={styles.pageLayoutWrapper}>
      <div className={styles.sideBoxWrapper}>
        <img src={sideLogo} alt="side logo image" className={styles.sideLogo} />
        <img src={sideCall} alt="side call image" className={styles.sideCall} />
        <img src={sideBtn} alt="side button image" className={styles.sideBtn} />
        <img src={leftElem} alt="side element" className={styles.leftElem} />
      </div>
      <div className={styles.pageContentWrapper}>
        <div className={styles.topAdWrapper}>
          <img
            src={headerCall}
            alt="header call image"
            className={styles.headerCall}
          />
          <img
            src={headerMan}
            alt="header man image"
            className={styles.headerMan}
          />
        </div>
        <div className={styles.pageContainer}>
          <Header />
          <Navbar />
          <Outlet />
          <Footer />
        </div>
        <div
          className={`${styles.bottomAdWrapper} ${
            !isOpenBanner ? styles.hidden : ""
          }`}
        >
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            className={styles.imagesAdWrapper}
          >
            <img
              className={styles.bottomImage}
              src={sideCallBottom}
              alt="side call image"
            />
          </a>
          <img
            onClick={handleCloseBanner}
            className={styles.closeBanner}
            src={closeBanner}
            alt="close banner image"
          />
        </div>
      </div>
      <div className={styles.sideBoxWrapper}>
        <img src={sideLogo} alt="side logo image" className={styles.sideLogo} />
        <img src={sideCall} alt="side call image" className={styles.sideCall} />
        <img src={sideBtn} alt="side button image" className={styles.sideBtn} />
        <img src={rightElem} alt="side element" className={styles.rightElem} />
      </div>
      {isOpenLoginModal && <LoginModal />}
    </div>
  );
};
