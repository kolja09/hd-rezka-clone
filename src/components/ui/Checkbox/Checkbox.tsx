import React from "react";

import styles from "./Checkbox.module.css";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <span className={styles.customCheckbox}></span>
      {label}
    </label>
  );
};
