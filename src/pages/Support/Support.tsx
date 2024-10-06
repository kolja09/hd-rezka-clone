import { useCallback, useState } from "react";

// shared components
import { Container } from "src/components/shared";

// ui components
import { InputField, SelectField, Textarea, Button } from "src/components/ui";

// enums
import { TypeThemeEnum } from "src/common/enum/TypeThemeEnum";

// styles
import styles from "./Support.module.css";

export type TFormData = {
  description: string;
  typeProblemTheme: TypeThemeEnum;
  email: string;
};

export const Support = () => {
  const [formData, setFormData] = useState<TFormData>({
    description: "fsdfsd sfd",
    typeProblemTheme: TypeThemeEnum.generalQuestions,
    email: "",
  });

  const hanldeChange = useCallback((value: string | number, name: string) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  const options = [
    { value: "general", name: "Общие вопросы" },
    { value: "video-issues", name: "Проблемы с воспроизведением видео" },
    { value: "cooperation", name: "Сотрудничество" },
    { value: "advertising", name: "Реклама на сайте" },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container title="Поддержка">
      <form onSubmit={handleSubmit} className={styles.form}>
        <SelectField
          label="Тема:"
          name="typeProblemTheme"
          onChange={hanldeChange}
          value={formData.typeProblemTheme}
          options={options}
        />
        <Textarea
          label="Сообщение"
          name="description"
          value={formData.description}
          callback={hanldeChange}
        />
        <InputField
          value={formData.email}
          callback={hanldeChange}
          label="Твой email:"
          name="email"
          type="email"
        />
        <Button className={styles.buttonStyles} type="submit">Отправить</Button>
      </form>
    </Container>
  );
};
