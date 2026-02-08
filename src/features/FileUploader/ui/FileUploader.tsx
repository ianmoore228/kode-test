import type { FC } from "react";
import styles from "./FileUploader.module.css"
import { useDispatch } from "react-redux";
import { parseYaml } from "@/features/ParseYaml";
import { setOpenApiData } from "@/entities/openApi";

export const FileUploader: FC = () => {

  const dispatch = useDispatch();


function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
  const files = e.target.files;
  if (!files) return;
  const file = files[0];
  const fileExtension = file.name.split(".")[1];

  if (fileExtension !== "yaml") {
   console.log("error")
   return
  }

  const reader = new FileReader();

  reader.readAsText(file)
  reader.onload = () => {
    if (typeof reader.result !== 'string') return;

    try {
      const parsed = parseYaml(reader.result);

      const { components, paths, ...other } = parsed;

      dispatch(
        setOpenApiData({
          components,
          paths,
          other
        })
      );

      console.log(components, paths, other)
    } catch (e) {
      console.error(e);
    }
  };
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

