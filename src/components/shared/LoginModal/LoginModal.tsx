import { useCallback, useState } from "react";

// store
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { setIsOpenLoginModal } from "src/store/slices/auth/auth.slice";

// shared components
import { ModalWrapper } from "src/components/shared";

// ui components
import { InputField } from "src/components/ui";

// styles
import styles from "./LoginModal.module.css";

// types
type TFormData = {
  email: string;
  password: string;
};

export const LoginModal = () => {
  const dispatch = useAppDispatch();
  const { isOpenLoginModal } = useAppSelector((state) => state.auth);

  const [formData, setFormData] = useState<TFormData>({
    password: "",
    email: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleCloseModal = () => {
    dispatch(setIsOpenLoginModal(false));
  };

  const hanldeChange = useCallback((value: string | number, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return (
    <ModalWrapper
      isOpen={isOpenLoginModal}
      title="Вход на сайт"
      handleCloseModal={handleCloseModal}
    >
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <InputField
          value={formData.email}
          callback={hanldeChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <InputField
          value={formData.password}
          callback={hanldeChange}
          name="password"
          type="password"
          placeholder="Пароль"
        />
      </form>
      <div className={styles.modalFooter}>
        <span>Ты еще не с нами?</span>
        <span className={styles.registerText}>Регистрируйся!</span>
      </div>
    </ModalWrapper>
  );
};
