import { useCallback } from "react";
import classNames from "classnames";

// styles
import styles from "./Toggler.module.css";

type Props = {
  isChecked: boolean;
  name: string;
  callback: () => Promise<void> | void;
  size?: "default";
  isDisabled?: boolean;
  color?: "default";
};

export const Toggler = (props: Props) => {
  const {
    isChecked = false,
    isDisabled = false,
    size = "default",
    color = "default",
    name,
    callback,
  } = props;

  const handleChange = useCallback(() => {
    if (!isDisabled) void callback();
  }, [callback, isDisabled]);

  return (
    <div className={styles.toggler}>
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
          [styles.defaultColor]: color === "default",
        })}
        htmlFor={name}
      >
        Toggle
      </label>
    </div>
  );
};
