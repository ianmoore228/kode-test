import type { FC } from "react";
import styles from "./TextUploader.module.css"

export const TextUploader: FC = () => {
    return (
        <div className={styles.textUploader}>
        <textarea id="yamlText" className={styles.textUploaderInput} placeholder="Вставтьте текст из файла .yaml"></textarea>
        <button className={styles.textUploaderButton} type="submit">Парсинг</button>
        </div>
    )
}