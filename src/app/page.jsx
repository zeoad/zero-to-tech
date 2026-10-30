import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import styles from "./home.module.css";
export const metadata = { title: "首页", description: "MySpace 个人作品集，记录前端开发与 AI 学习。" };
export default function HomePage() {
 const featured = projects.filter(p => p.featured).slice(0,3);
 return <><section className={`section-container ${styles.hero}`}><div><p className="eyebrow">WELCOME TO MYSPACE</p><h1>把好奇心变成<span className="gradient-text"> 真实作品。</span></h1><p className={styles.intro}>你好，我是{profile.name}。这里记录我在前端开发、人工智能与数字创作中的学习过程和实践项目。</p><div className={styles.actions}><Link className="button button-primary" href="/projects">浏览我的项目 ↗</Link><Link className="button button-ghost" href="/about">了解我</Link></div><div className={styles.facts}><div><b>01</b><span>持续学习</span></div><div><b>02</b><span>动手实践</span></div><div><b>03</b><span>记录成长</span></div></div></div><div className={styles.visual}><div className={styles.glowCard}><small>CURRENT FOCUS</small><strong>Build<br/>&amp; Explore.</strong><small>FRONTEND / AI / DESIGN</small></div><i>✳</i></div></section><section className="section-container section-block"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>精选项目<span className="gradient-text">.</span></h2></div><Link className="text-link" href="/projects">查看全部项目 →</Link></div><div className="project-grid">{featured.map(p=><ProjectCard key={p.id} project={p}/>)}</div></section><section className={`section-container ${styles.statement}`}><p className="eyebrow">A LITTLE ABOUT THIS SPACE</p><h2>学习不只停留在收藏夹，<br/><span className="gradient-text">更要留下可以看见的成果。</span></h2><Link className="text-link" href="/about">更多关于我 →</Link></section></>;
}
