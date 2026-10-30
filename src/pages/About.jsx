import { profile } from "../data/profile.js";
import { siteConfig } from "../data/site.js";
import "./About.css";

export default function About() {
  return (
    <section className="page-section container about-page">
      <header className="page-heading">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>关于<span>.</span></h1>
        <p>{profile.introduction}</p>
      </header>

      <div className="about-layout">
        <section className="about-panel">
          <p className="panel-index">01 / INTRODUCTION</p>
          <h2>保持好奇，持续创造。</h2>
          <p className="about-body">
            这里是我的个人数字空间，用来整理正在学习的知识、记录实践项目，
            也记录从想法走向作品的过程。我希望每一个小项目都能让我更理解技术，
            并逐渐找到前端开发与人工智能之间有趣的连接。
          </p>
        </section>

        <section className="about-panel">
          <p className="panel-index">02 / CURRENT INTERESTS</p>
          <h2>正在探索</h2>
          <div className="skill-list">
            {profile.interests.map((interest, index) => (
              <span className="skill-tag" key={interest}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {interest}
              </span>
            ))}
          </div>
        </section>
      </div>

      <section className="release-panel">
        <div>
          <p className="panel-index">SITE INFORMATION</p>
          <h2>不断迭代，不断进步。</h2>
        </div>
        <div className="release-version">
          <span>VERSION</span>
          <strong>v{siteConfig.version}</strong>
          <small>更新于 {siteConfig.releaseDate}</small>
        </div>
      </section>
    </section>
  );
}
