import type { FC } from "react";
import styles from "@/pages/HomePage/HomePage.module.css";
import { YamlSubmit } from "@/widgets/YamlSubmit";
import { YamlStructure } from "@/widgets/YamlStructure";

export const HomePage: FC = () => {
    return (
    <div className={styles.homePage}>
        <h1 className={styles.homePageTitle}>.yaml parser</h1>
        <YamlSubmit/>
        <div className={styles.line}></div>
        <YamlStructure/>
    </div>
    )
}