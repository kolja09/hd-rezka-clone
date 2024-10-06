// icons
import closeIcon from "src/assets/close.svg";

// styles
import styles from "./ModalWrapper.module.css";

// types
type TModalWrapper = {
  children: React.ReactNode;
  title: string;
  handleCloseModal: () => void;
  isOpen: boolean;
};

export const ModalWrapper = ({
  children,
  title = "Title",
  handleCloseModal,
  isOpen,
}: TModalWrapper) => {
  return (
    <div className={`${styles.modalWrapper} ${isOpen ? styles.isOpen : ""}`}>
      <div className={styles.modalDialog}>
        <div className={styles.modalHeader}>
          <h5 className={styles.modalTitle}>{title}</h5>
          <img
            onClick={handleCloseModal}
            src={closeIcon}
            className={styles.closeIcon}
            alt="Close"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
