import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className={`project-cover ${project.coverClass}`}>
        <div className="cover-topline">
          <span>{project.number} / WORK</span>
          <span className="cover-status">{project.status}</span>
        </div>
        <strong className="cover-symbol">{project.symbol}</strong>
        <span className="cover-label">{project.coverLabel}</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.categoryLabel}</span>
          <span className="meta-dot" aria-hidden="true">●</span>
          <span>{project.status}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((technology) => (
            <span className="technology-tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
