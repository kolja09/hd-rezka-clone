import React, { useLayoutEffect, useMemo, useState } from "react";
import Cookie from "js-cookie";

// consts
import { DARK_THEME, LIGHT_THEME } from "src/common/consts/theme.const";

// types
import { ThemeColorType } from "src/common/types/theme.types";

const ThemeContext = React.createContext<{
  theme: string;
  toggleTheme: (value: string) => void;
}>({
  theme: LIGHT_THEME,
  toggleTheme: () => {},
});

export default ThemeContext;

export function ThemeProvider(props: { children: React.ReactNode }) {
  const getThemeFromBrowser = () => {
    const datasetTheme = document.documentElement.dataset.theme as
      | ThemeColorType
      | undefined;

    const isOsDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const osMode = isOsDarkMode.matches ? DARK_THEME : LIGHT_THEME;

    return datasetTheme ?? osMode;
  };

  const [theme, setTheme] = useState<ThemeColorType>(getThemeFromBrowser);

  const setDataAttrTheme = () => {
    if (document.documentElement && document.documentElement.dataset) {
      document.documentElement.dataset.theme = theme;
    }
  };

  const toggleTheme = (value: string): void => {
    setTheme(value === LIGHT_THEME ? LIGHT_THEME : DARK_THEME);
    Cookie.set("theme", value, {
      expires: 365,
      path: "/",
      secure: true,
    });
  };

  const memoizedValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  useLayoutEffect(() => {
    setDataAttrTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}
