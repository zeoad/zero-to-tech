import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";
import {site} from "@/data/site";
export default function Navbar(){return <header className={styles.header}><nav className={styles.nav} aria-label="主导航"><Link href="/" className={styles.brand}><span className={styles.mark}>M</span>{site.name}<span className={styles.dot}>.</span></Link><div className={styles.links}>{site.navigation.map(item=><Link href={item.href} key={item.href}>{item.label}</Link>)}<ThemeToggle/></div></nav></header>}
