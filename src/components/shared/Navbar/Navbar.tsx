import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import dropDownArrow from "../../../assets/drop-down-arrow.svg";

import { getCategoriesThunk } from "../../../store/slices/home/home.thunk";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { NavSearchInput } from "../NavSearchInput/NavSearchInput";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.home);

  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getCategoriesThunk({}));
  }, [dispatch]);

  const handleMenuOpen = (id: number) => {
    setOpenMenuId(id);
  };

  const handleMenuClose = () => {
    setOpenMenuId(null);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarMenu}>
        {categories.map((el) => (
          <li
            key={el.id}
            className={classNames(styles.navbarItem, {
              [styles.open]: openMenuId === el.id,
            })}
            onMouseEnter={() => handleMenuOpen(el.id)}
            onMouseLeave={handleMenuClose}
          >
            <div className={styles.navbarItemText}>
              <Link className={styles.link} to={`/films/${el.type}`}>
                {el.name}
              </Link>
              <img
                src={dropDownArrow}
                alt="Dropdown Arrow"
                className={styles.dropdownArrow}
              />
            </div>
            <DropdownMenu
              categoryId={el.id}
              openMenuId={openMenuId}
              subCategories={el.subCategories}
            />
          </li>
        ))}
      </ul>
      <NavSearchInput />
    </nav>
  );
};
