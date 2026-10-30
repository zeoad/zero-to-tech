"use client";
import {useTheme} from "./ThemeProvider";
import styles from "./ThemeToggle.module.css";
export default function ThemeToggle(){const {theme,toggleTheme}=useTheme();return <button className={styles.toggle} onClick={toggleTheme} type="button" aria-label="切换主题" title="切换主题">{theme==="dark"?"☼":"☾"}</button>}
