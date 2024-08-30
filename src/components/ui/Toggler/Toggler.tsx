import { useCallback } from "react";
import classNames from "classnames";

// icons
import moon from "../../../assets/moon.svg";
import sun from "../../../assets/sun.svg";

// styles
import styles from "./Toggler.module.css";

type Props = {
  isChecked: boolean;
  name: string;
  callback: () => Promise<void> | void;
  size?: "default";
  isDisabled?: boolean;
};

export const Toggler = (props: Props) => {
  const {
    isChecked = false,
    isDisabled = false,
    size = "default",
    name,
    callback,
  } = props;

  const handleChange = useCallback(() => {
    if (!isDisabled) void callback();
  }, [callback, isDisabled]);

  return (
    <div className={styles.toggler}>
      <img alt="moon" src={moon} className={styles.iconMoon} />
      <img alt="sun" src={sun} className={styles.iconSun} />
      <input
        className={classNames(styles.toggleInput, {
          [styles.checked]: isChecked,
        })}
        id={name}
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label
        className={classNames(styles.toggleLabel, {
          [styles.checked]: isChecked,
          [styles.disabled]: isDisabled,
          [styles.defaultSize]: size === "default",
        })}
        htmlFor={name}
      >
        Toggle
      </label>
    </div>
  );
};
