import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";
import "./Home.css";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> MY DIGITAL SPACE</p>
          <h1>
            BUILD
            <br />
            SOMETHING
            <br />
            <span>GREAT.</span>
          </h1>
          <p className="hero-description">{profile.introduction}</p>

          <div className="hero-actions">
            <Link to="/projects" className="button button-primary">
              查看我的项目 <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/about" className="button button-secondary">
              了解更多
            </Link>
          </div>

          <div className="hero-stats">
            {profile.stats.map((stat) => (
              <div className="stat-item" key={stat.id}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art" aria-label="装饰性代码图形">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="hero-glow" />
          <div className="code-window">
            <div className="window-controls"><i /><i /><i /></div>
            <p><span>01</span> const idea = "curiosity";</p>
            <p><span>02</span> const learn = () =&gt; build();</p>
            <p><span>03</span> <b>while</b> (learning) &#123;</p>
            <p className="code-indent"><span>04</span> createSomething();</p>
            <p><span>05</span> &#125;</p>
            <div className="code-cursor" />
          </div>
          <span className="floating-label label-top">DESIGN × CODE</span>
          <span className="floating-label label-bottom">ALWAYS LEARNING_</span>
        </div>
      </section>

      <section className="featured-section section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FEATURED WORK</p>
            <h2>精选项目<span>.</span></h2>
          </div>
          <Link to="/projects" className="text-link">全部项目 ↗</Link>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </section>
    </>
  );
}
