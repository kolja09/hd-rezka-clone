import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../../components/shared";

import sideLogo from "../../assets/side-logo.png";
import sideCall from "../../assets/side-call.png";
import sideBtn from "../../assets/side-btn.png";
import rightElem from "../../assets/right-elem.png";
import leftElem from "../../assets/left-elem.png";
import headerCall from "../../assets/header-call.png";
import headerMan from "../../assets/header-man.png";
import sideCallBottom from "../../assets/side-call-bottom.png";
import closeBanner from "../../assets/closeBanner.svg";

import styles from "./PageLayout.module.css";

export const PageLayout = () => {
  const [isOpenBanner, setIsOpenBanner] = useState(true);

  const handleCloseBanner = () => {
    setIsOpenBanner(false);
  };

  return (
    <div className={styles.pageLayoutWrapper}>
      <div className={styles.bgImage}></div>
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
    </div>
  );
};
