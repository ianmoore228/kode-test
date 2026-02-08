import type { FC } from "react";
import styles from "./TextUploader.module.css"
import { useDispatch } from "react-redux";
import { parseYaml } from "@/features/ParseYaml";
import { setOpenApiData } from "@/entities/openApi";

export const TextUploader: FC = () => {

    const dispatch = useDispatch();

    function handleSubmit() {
        console.log("submit")
        const yamlText = document.getElementById("yamlText") as HTMLInputElement;
      try {
          const parsed = parseYaml(yamlText.value);
    
          const { components, paths, ...other } = parsed;

          const selectedFile = "openapi.yaml";
    
          dispatch(
            setOpenApiData({
              components,
              name: "openapi.yaml",
              paths,
              selectedFile,
              other
            })
          );
    
          console.log(components, paths, other)
        } catch (e) {
          console.error(e);
        }
      
    }

    return (
        <div className={styles.textUploader}>
        <textarea id="yamlText" className={styles.textUploaderInput} placeholder="Вставтьте текст спецификации openapi.yaml"></textarea>
        <button
        onClick={handleSubmit}
        className={styles.textUploaderButton} type="button">Парсинг</button>
        </div>
    )
}