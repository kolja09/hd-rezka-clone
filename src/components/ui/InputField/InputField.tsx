import React, { useCallback } from "react";

// styles
import styles from "./InputField.module.css";

// types
interface InputFieldProps {
  label?: string;
  type?: string;
  value: string;
  callback: (name: string, value: string) => Promise<void> | void;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  name: string;
  className?: string;
  isDisabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label = "",
  type = "text",
  value,
  callback,
  placeholder = "",
  required = false,
  errorMessage = "",
  name,
  className,
  isDisabled = false,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isDisabled) {
        void callback(e.target.value, name);
      }
    },
    [callback, isDisabled, name]
  );

  return (
    <div className={styles.inputField}>
      {!!label && (
        <label htmlFor={name} className={styles.label}>
          {label} {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        id={name}
        onChange={handleChange}
        placeholder={placeholder}
        className={`${styles.input}  ${className} ${
          errorMessage ? styles.errorInput : ""
        }`}
      />
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};
