import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects, projectFilters } from "../data/projects.js";
import "./Projects.css";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="page-section container projects-page">
      <header className="page-heading">
        <p className="eyebrow">THE THINGS I BUILD</p>
        <h1>项目<span>.</span></h1>
        <p>从学习练习到实际应用，记录每一次尝试与进步。</p>
      </header>

      <div className="project-filters" aria-label="项目分类">
        {projectFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeCategory === filter.value ? "filter-button active" : "filter-button"}
            aria-pressed={activeCategory === filter.value}
            onClick={() => setActiveCategory(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="results-line">
        <span>PROJECT ARCHIVE</span>
        <span>{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="project-grid projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty-state">这个分类暂时没有项目。</p>
      )}
    </section>
  );
}
