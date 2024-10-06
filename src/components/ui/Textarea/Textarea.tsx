import { useCallback } from "react";
import classNames from "classnames";

// styles
import styles from "./Textarea.module.css";

type Props = {
  name: string;
  callback: (name: string, value: string) => Promise<void> | void;
  size?: "default";
  isDisabled?: boolean;
  value: string;
  label: string;
};

export const Textarea = ({
  name,
  callback,
  size = "default",
  isDisabled,
  value,
  label,
}: Props) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (!isDisabled) {
        void callback(e.target.value, name);
      }
    },
    [callback, isDisabled, name]
  );

  return (
    <div className={styles.textareaWrapper}>
      <label className={styles.textareaLabel} htmlFor={name}>
        {label}:
      </label>
      <textarea
        className={classNames(styles.toggleTextarea, {
          [styles.defaultSize]: size === "default",
        })}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
