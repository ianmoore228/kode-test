import type { FC } from "react";
import styles from "./FileUploader.module.css"

export const FileUploader: FC = () => {

function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
  const files = e.target.files;
  if (!files) return;

  const file = files[0];

  const fileExtension = file.name.split(".")[1];

  console.log(fileExtension)
  if (fileExtension !== "yaml") {
   console.log("error")
  }

  const reader = new FileReader();

  reader.readAsText(file)
  reader.onload = () => {
    console.log(reader.result)
  }
}

  return (
  <div className={styles.fileUploader}>
    <label className={`${styles.fileUploaderLabel}`}>
    Выберите файл
    <input
      type="file"
      className={styles.fileUploaderInput}
      onChange={handleFileUpload}
    />
  </label>
  </div>
  );
};
