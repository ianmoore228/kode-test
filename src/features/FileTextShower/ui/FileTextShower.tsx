import { useSelector } from "react-redux";
import yaml from "yaml";
import { getYamlByPath } from "../lib/getYamlByPath";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export function FileTextShower() {
  const { selectedFile, components, paths, other, name } = useSelector(
    (state: any) => state.openApi
  );

  if (!selectedFile) {
    return <p>Выберите файл</p>;
  }

  let textToShow = "";

  if (selectedFile === name) {
    textToShow = yaml.stringify(other);
  } else {
    const yamlObject = getYamlByPath(selectedFile, {
      components,
      paths,
      ...other
    });

    if (!yamlObject) {
      return <p>Файл не найден</p>;
    }

    textToShow = yaml.stringify(yamlObject);
  }

  return (
    <SyntaxHighlighter
      language="yaml"
      style={dracula}
    >
      {textToShow}
    </SyntaxHighlighter>
  );
}
