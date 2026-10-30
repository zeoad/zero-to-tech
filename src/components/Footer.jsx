import { siteConfig } from "../data/site.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Built with React <span className="footer-dot">·</span> Keep Exploring</span>
      </div>
    </footer>
  );
}
