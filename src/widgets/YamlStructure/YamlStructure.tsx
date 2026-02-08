import styles from "./YamlStructure.module.css";
import { type FC } from "react";
import { FileStructureShower } from "@/features/FileStructureShower";
import { FileTextShower } from "@/features/FileTextShower";

export const YamlStructure: FC = () => {
    return (
        <div className={styles.yamlStructure}>
            <div className={styles.fileStructure}>
            <FileStructureShower />
            </div>
            <div className={styles.line}></div>
            <div className={styles.fileText}>
            <FileTextShower />
            </div>
        </div>
    );
}