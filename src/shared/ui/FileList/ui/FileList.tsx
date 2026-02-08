import styles from "./FileList.module.css";
import { selectFile } from "@/entities/openApi";
import { useDispatch } from "react-redux";

interface FileListProps {
  data: object;
  depth: number;
  path: string
}

interface ItemProps {
  name: string;
  value: object | string;
  depth: number;
  path: string
}

export function FileList({ data, depth, path }: FileListProps) {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <Item key={key} name={key} value={value} depth={depth}  path={path}/>
      ))}
    </ul>
  );
}

function Item({ name, value, depth, path }: ItemProps) {
  const dispatch = useDispatch();

  const isObject =
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value);

  const hasNestedObjects =
    isObject &&
    Object.values(value).some(
      (v) =>
        typeof v === "object" &&
        v !== null &&
        !Array.isArray(v)
    );

    const currentPath = `${path}/${name}`;


  return (
    <li>
      <p className={styles.item} style={{ marginLeft: depth * 20 }}>
        {name}
      </p>

      {isObject && hasNestedObjects ? (
        <FileList data={value} depth={depth + 1}  path={currentPath}/>
      ) : (
        <button
           onClick={() => dispatch(selectFile(`${currentPath}.yaml`))}
          className={styles.button}
          style={{ marginLeft: depth * 20 + 20 }}
        >
          {name}.yaml
        </button>
      )}
    </li>
  );
}
