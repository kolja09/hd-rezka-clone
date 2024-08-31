import { useEffect, useState } from "react";

import search from "../../../assets/search.svg";
import dropDownArrow from "../../../assets/drop-down-arrow.svg";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import styles from "./Navbar.module.css";
import { getCategoriesThunk } from "../../../store/slices/categories/categories.thunk";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.categories);

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdown = (type: string) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
    setSearchActive(e.target.value !== "");
  };

  const deactivateSearch = () => {
    setSearchActive(false);
    setSearchQuery("");
  };

  const results = [
    { title: "Радости рыбалки", type: "Аниме", year: 2012, rating: 6.53 },
    {
      title: "История одержимости: Кукла Ёцуги",
      type: "Аниме",
      year: 2014,
      rating: 7.38,
    },
  ];

  const filteredResults = results.filter((result) =>
    result.title.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    dispatch(getCategoriesThunk({}));
  }, []);

  console.log(categories, "categories");

  return (
    <nav className={styles.navbarCustom}>
      <div
        className={`${styles.navbarToggle} ${
          menuOpen ? styles.navbarToggleOpen : ""
        }`}
        onClick={handleToggleMenu}
      >
        <span className={styles.navbarToggleBar}></span>
        <span className={styles.navbarToggleBar}></span>
        <span className={styles.navbarToggleBar}></span>
      </div>
      <ul
        className={`${styles.navbarMenuCustom} ${
          menuOpen ? styles.navbarMenuOpen : ""
        }`}
      >
        {categories?.map((category) => (
          <li key={category.id} className={styles.navbarItem}>
            <div
              className={styles.navbarItemText}
              onClick={() => handleDropdown(category.type)}
            >
              <span>{category?.name}</span>
              <img
                src={dropDownArrow}
                alt="Dropdown Arrow"
                className={styles.dropdownArrow}
              />
            </div>
            <div
              className={`${styles.customDropdown} ${
                activeDropdown === category.type ? styles.navbarItemOpen : ""
              }`}
            >
              <div className="custom-dropdown-left-block">
                <ul className="custom-dropdown-menu-links">
                  {category?.subCategories?.map((subCategory) => (
                    <li
                      key={subCategory?.id}
                      className="custom-dropdown-menu-item"
                    >
                      <Link className="custom-dropdown-menu-link" to="/films">
                        {subCategory?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* <div className="navbar-banners-block">
                  <div className="navbar-banners-header">
                    <img
                      src="./img/betterFilms.svg"
                      className="navbar-banners-img small"
                      alt="Лучшие новинки"
                    />
                    <span>Лучшие новинки</span>
                  </div>
                  <div className="navbar-banners-items">
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        className="navbar-banners-img"
                        src="./img/netflix.svg"
                        alt="Netflix"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        className="navbar-banners-img"
                        src="./img/hbo.svg"
                        alt="HBO"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        className="navbar-banners-img"
                        src="./img/amazon.svg"
                        alt="Amazon"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        className="navbar-banners-img"
                        src="./img/disney.svg"
                        alt="Disney"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        class="navbar-banners-img"
                        src="./img/tv.svg"
                        alt="TV"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        class="navbar-banners-img"
                        src="./img/huhu.svg"
                        alt="HUHU"
                      />
                    </a>
                    <a className="navbar-banners-item" href="./movies.html">
                      <img
                        className="navbar-banners-img"
                        src="./img/epix.svg"
                        alt="epix"
                      />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div
        className={`${styles.navbarSearch} ${
          searchActive ? styles.navbarSearchActive : ""
        }`}
      >
        <div className={styles.navbarSearchIcon} onClick={handleToggleMenu}>
          <img src={search} alt="search" />
        </div>
        <input
          type="text"
          className={styles.navbarSearchInput}
          placeholder="Поиск фильмов и сериалов"
          value={searchQuery}
          onChange={handleSearch}
          onFocus={() => setSearchActive(true)}
          onBlur={deactivateSearch}
        />
        <div
          className={`${styles.navbarSearchResults} ${
            searchActive ? styles.navbarSearchResultsActive : ""
          }`}
        >
          <ul>
            {filteredResults.slice(0, 5).map((result, index) => (
              <li key={index}>{result.title}</li>
            ))}
            {filteredResults.length > 5 && (
              <li className={styles.seeAllResults}>
                Смотреть все результаты ({filteredResults.length - 5}{" "}
                совпадений)
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
