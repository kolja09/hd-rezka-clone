import styles from "./Container.module.css";

export const Container = ({
  children,
  title = "",
  text = "",
}: {
  children: React.ReactNode;
  title?: string;
  text?: string;
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {text && <p className={styles.text}>{text}</p>}
      {children}
    </div>
  );
};
