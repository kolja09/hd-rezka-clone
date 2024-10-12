import { Link } from "react-router-dom";

import Netflix from "../../../assets/netflix.svg";
import HBO from "../../../assets/hbo.svg";
import Amazon from "../../../assets/amazon.svg";
import Disney from "../../../assets/disney.svg";
import TV from "../../../assets/tv.svg";
import HUHU from "../../../assets/huhu.svg";
import epix from "../../../assets/epix.svg";
import betterFilms from "../../../assets/betterFilms.svg";

import styles from "./MovieServicesLogos.module.css";

const banners = [
  { src: Netflix, alt: "Netflix" },
  { src: HBO, alt: "HBO" },
  { src: Amazon, alt: "Amazon" },
  { src: Disney, alt: "Disney" },
  { src: TV, alt: "TV" },
  { src: HUHU, alt: "HUHU" },
  { src: epix, alt: "epix" },
];

export const MovieServicesLogos = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoBestFilms}>
        <img
          src={betterFilms}
          className={`${styles.logoImg} ${styles.small}`}
          alt="Лучшие новинки"
        />
        <span>Лучшие новинки</span>
      </div>
      <div className={styles.logos}>
        {banners.map((banner, index) => (
          <Link to={""} key={index} className={styles.logoLink}>
            <img
              className={styles.logoImg}
              src={banner.src}
              alt={banner.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
