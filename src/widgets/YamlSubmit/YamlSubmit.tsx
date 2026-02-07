import { FileUploader } from "@/features/FileUploader";
import { TextUploader } from "@/features/TextUploader";
import type { FC } from "react";
import styles from "./YamlSubmit.module.css";

export const YamlSubmit: FC = () => {
  return (
    <div className={styles.yamlSubmit}>
      <div className={styles.yamlSubmitContainerLeft}>
        <h2 className={styles.yamlSubmitTitle}>Загрузите файл или вставьте текст из файла .yaml:</h2>
        <FileUploader />
      </div>
      <div className={styles.line}></div>
      <div className={styles.yamlSubmitContainerRight}>
        <TextUploader />
      </div>
    </div>
  );
};
