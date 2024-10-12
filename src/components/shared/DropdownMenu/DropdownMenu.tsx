import { Link } from "react-router-dom";
import classNames from "classnames";

import { TCategoreis } from "src/store/slices/home/home.types";

import { MovieServicesLogos } from "../MovieServicesLogos/MovieServicesLogos";

import styles from "./DropdownMenu.module.css";

export const DropdownMenu = ({
  subCategories,
  openMenuId,
  categoryId,
}: {
  subCategories: TCategoreis[];
  openMenuId: null | number;
  categoryId: number;
}) => {
  return (
    <div
      className={classNames(styles.dropdown, {
        [styles.open]: openMenuId === categoryId,
      })}
    >
      <div className={styles.dropdownContainer}>
        <ul className={styles.dropdownLinks}>
          {subCategories.map((sub) => (
            <li key={sub.id} className={styles.dropdownLinksItem}>
              <Link to={`/films/${sub.type}`} className={styles.dropdownLink}>
                {sub.name}
              </Link>
            </li>
          ))}
        </ul>
        <MovieServicesLogos />
      </div>
    </div>
  );
};
