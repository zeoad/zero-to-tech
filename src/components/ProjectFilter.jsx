"use client";
import {useMemo,useState} from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectFilter.module.css";
export default function ProjectFilter({projects}){const [active,setActive]=useState("全部");const categories=["全部",...new Set(projects.map(p=>p.category))];const filtered=useMemo(()=>active==="全部"?projects:projects.filter(p=>p.category===active),[active,projects]);return <><div className={styles.filters}>{categories.map(c=><button type="button" key={c} className={active===c?styles.active:""} onClick={()=>setActive(c)}>{c}</button>)}</div><p className={styles.count}>共 {filtered.length} 个项目</p><div className="project-grid">{filtered.map(p=><ProjectCard key={p.id} project={p}/>)}</div></>}
