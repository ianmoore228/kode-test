import styles from "./FileList.module.css";
import { selectFile } from "@/entities/openApi";
import { useDispatch } from "react-redux";
import { type ObjectProps } from "@/entities/openApi";

interface FileListProps {
  data: { [key: string]: ObjectProps };
  depth: number;
  path: string;
}

interface ItemProps {
  name: string;
  value: ObjectProps;
  depth: number;
  path: string;
}


export function FileList({ data, depth, path }: FileListProps) {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => (
        <Item key={key} name={key} value={value} depth={depth} path={path} />
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

  const isPathFile = name.startsWith("/");
  const isComponentFile = path.startsWith("components/") && depth >= 3;
  const currentPath = `${path}/${name}`;

  if (isPathFile) {
    return (
      <li>
        <button
          onClick={() => dispatch(selectFile(`paths${name}.yaml`))}
          className={styles.button}
          style={{ marginLeft: depth * 20 }}
        >
          {name}.yaml
        </button>
      </li>
    );
  }

  if (isComponentFile) {
    return (
      <li>
        <button
          onClick={() => dispatch(selectFile(`${currentPath}.yaml`))}
          className={styles.button}
          style={{ marginLeft: depth * 20 }}
        >
          {name}.yaml
        </button>
      </li>
    );
  }

  const hasNestedObjects =
    isObject &&
    Object.values(value).some(
      (v) =>
        typeof v === "object" &&
        v !== null &&
        !Array.isArray(v)
    );

  return (
    <li>
      <p className={styles.item} style={{ marginLeft: depth * 20 }}>
        {name}
      </p>

      {isObject && hasNestedObjects ? (
        <FileList data={value} depth={depth + 1} path={currentPath} />
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
