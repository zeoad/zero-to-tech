import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/data/projects";
export const metadata = { title: "项目", description: "查看 MySpace 的前端、AI 与设计实践项目。" };
export default function ProjectsPage(){return <section className="section-container page-section"><p className="eyebrow">WHAT I HAVE BUILT</p><h1 className="page-title">项目<span className="gradient-text">作品</span></h1><p className="page-lead">从想法出发，用代码和持续迭代把它们变成真实的东西。</p><ProjectFilter projects={projects}/></section>}
