import { useContext, useCallback, useMemo, useState, useEffect } from "react";

// providers
import ThemeContext from "src/providers/ThemeProvider/ThemeProvider";

// ui components
import { Toggler } from "src/components/ui";

// consts
import { DARK_THEME, LIGHT_THEME } from "src/common/consts/theme.const";

// styles
import styles from "./ChangeTheme.module.css";

export const ChangeTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [currentTheme, setCurrentTheme] = useState(theme);

  const isLightTheme = useMemo(
    () => currentTheme === LIGHT_THEME,
    [currentTheme]
  );
  const isDarkTheme = useMemo(
    () => currentTheme === DARK_THEME,
    [currentTheme]
  );

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    toggleTheme(isLightTheme ? DARK_THEME : LIGHT_THEME);
  }, [toggleTheme, isLightTheme]);

  return (
    <div className={styles.changeThemeBlock}>
      <Toggler
        name="theme-toggler"
        isChecked={isDarkTheme}
        callback={handleToggleTheme}
        size="default"
      />
    </div>
  );
};
