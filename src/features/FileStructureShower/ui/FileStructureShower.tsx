import styles from "./FileStructureShower.module.css";
import { type FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOpenApi, selectFile } from "@/entities/openApi";
import { FileList } from "@/shared/ui/FileList";
import { type ObjectProps } from "@/entities/openApi";

export const FileStructureShower: FC = () => {
  const dispatch = useDispatch();
  const openApi = useSelector(selectOpenApi);

  const { components, paths, name } = openApi;

  return (
    <div className={styles.fileShower}>
      {components && paths && (
        <>
          <button
            className={styles.button}
            onClick={() => dispatch(selectFile(name))}
          >
            <p>{name}</p>
          </button>

          <p className={styles.title}>components:</p>
          <FileList
            path="components"
            data={components as Record<string, ObjectProps>}
            depth={1}
          />

          <p className={styles.title}>paths:</p>
          <FileList
            path="paths"
            data={paths as Record<string, ObjectProps>}
            depth={1}
          />
        </>
      )}
    </div>
  );
};
