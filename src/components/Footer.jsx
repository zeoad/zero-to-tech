import Link from "next/link";
import styles from "./Footer.module.css";
import {site} from "@/data/site";
export default function Footer(){return <footer className={styles.footer}><div className={styles.inner}><span>© {new Date().getFullYear()} {site.name}. Built with curiosity.</span><div><Link href="/">首页</Link><Link href="/projects">项目</Link><Link href="/about">关于</Link></div></div></footer>}
