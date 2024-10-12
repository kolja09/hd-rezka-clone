import { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import searchIcon from "./../../../assets/search.svg";

import { TSearchFilms } from "src/store/slices/home/home.types";
import { getSearchFilmsThunk } from "src/store/slices/home/home.thunk";

import { useAppDispatch, useAppSelector } from "src/store/hooks";

import styles from "./NavSearchInput.module.css";

export const NavSearchInput = () => {
  const dispatch = useAppDispatch();
  const { searchFilms } = useAppSelector((state) => state.home);

  const [isActive, setIsActive] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<TSearchFilms[]>([]);

  const navigate = useNavigate();

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
    setQuery("");
    setFilteredResults([]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    const filtered = searchFilms.filter((result) =>
      result.title.toLowerCase().includes(queryValue.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  const handleSearchClick = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      navigate("/films");
    }
  };

  useEffect(() => {
    dispatch(getSearchFilmsThunk({}));
  }, []);

  return (
    <div
      className={classNames(styles.navbarSearch, { [styles.active]: isActive })}
    >
      <div className={styles.inputWrapper}>
        <div className={styles.navbarSearchIcon} onClick={handleSearchClick}>
          <img src={searchIcon} alt="search" />
        </div>
        <input
          type="text"
          value={query}
          className={styles.navbarSearchInput}
          placeholder="Поиск фильмов и сериалов"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
        />
      </div>

      <div
        className={classNames(styles.navbarSearchResults, {
          [styles.active]: filteredResults.length > 0 || query.length > 0,
        })}
      >
        <ul className={styles.resultsList}>
          {filteredResults.length > 0 ? (
            filteredResults.slice(0, 5).map((result, index) => (
              <li key={index} className={styles.resultItem} onClick={() => {}}>
                <span className={styles.resultTitle}>{result.title}</span>
                <span className={styles.resultType}>({result.type}</span>,
                <span className={styles.resultYear}>{result.year})</span>
                {result.rating && (
                  <span
                    data-title={result.numberOfVotes}
                    className={classNames(styles.resultRating, {
                      [styles.highRating]: result.rating > 7,
                      [styles.lowRating]: result.rating < 3,
                      [styles.mediumRating]:
                        result.rating >= 3 && result.rating <= 7,
                    })}
                  >
                    {result.rating}
                  </span>
                )}
              </li>
            ))
          ) : (
            <li className={styles.noResultsMessage}>Ничего не найдено</li>
          )}

          {filteredResults.length > 5 && (
            <li className={styles.seeAllResults} onClick={() => {}}>
              Смотреть все результаты ({filteredResults.length - 5} совпадений)
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
