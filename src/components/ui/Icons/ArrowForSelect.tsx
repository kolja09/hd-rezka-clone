import { useContext } from "react";

// providers
import ThemeContext from "src/providers/ThemeProvider/ThemeProvider";

export const ArrowForSelect = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.193 1.06992C10.3338 0.929093 10.5248 0.849976 10.724 0.849976C10.9232 0.849976 11.1142 0.929093 11.255 1.06992C11.3958 1.21075 11.4749 1.40176 11.4749 1.60092C11.4749 1.80009 11.3958 1.99109 11.255 2.13192L6.53 6.85592C6.38938 6.99637 6.19875 7.07526 6 7.07526C5.80125 7.07526 5.61063 6.99637 5.47 6.85592L0.745002 2.13192C0.604172 1.99109 0.525055 1.80009 0.525055 1.60092C0.525055 1.40176 0.604172 1.21075 0.745002 1.06992C0.885832 0.929093 1.07684 0.849976 1.276 0.849976C1.47517 0.849976 1.66617 0.929093 1.807 1.06992L6 5.26292L10.193 1.06992Z"
        fill={theme === "dark" ? "#FFFFFF" : "#000000"}
      />
    </svg>
  );
};
