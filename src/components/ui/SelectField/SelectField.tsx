import React, { useState, useRef } from "react";

// icons
import { ArrowForSelect } from "src/components/ui/Icons/ArrowForSelect";

//hooks
import { useClickOutside, useIsMobile } from "src/common/hooks";

//styles
import styles from "./SelectField.module.css";

interface Option {
  value: string | number;
  name: string;
}

interface SelectFieldProps {
  label: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number, name: string) => void;
  required?: boolean;
  errorMessage?: string;
  className?: string;
  name: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  value,
  onChange,
  required = false,
  errorMessage = "",
  className,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(768);

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleOptionClick = (optionValue: number | string) => {
    onChange(optionValue, name);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.selectField} ref={selectRef}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <div
        className={`${styles.selectWrapper} ${className} ${
          isOpen ? styles.activeBorder : ""
        } ${errorMessage ? styles.errorBorder : ""}`}
        onClick={handleToggle}
      >
        <div className={styles.selectedValue}>
          {options.find((option) => option.value === value)?.name ||
            "Select an option"}
        </div>
        <div className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>
          <ArrowForSelect />
        </div>
      </div>
      {isOpen && (
        <>
          {isMobile ? (
            <>
              <div
                className={styles.overlay}
                onClick={() => setIsOpen(false)}
              ></div>
              <div className={styles.mobileModal}>
                {options.map((option) => (
                  <div
                    key={option.value}
                    className={`${styles.option} ${
                      option.value === value ? styles.active : ""
                    } `}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    {option.name}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={styles.optionsWrapper}>
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`${styles.option} ${
                    option.value === value ? styles.active : ""
                  } `}
                  onClick={() => handleOptionClick(option.value)}
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};
