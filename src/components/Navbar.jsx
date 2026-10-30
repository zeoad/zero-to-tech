import { NavLink } from "react-router-dom";
import { navigation, siteConfig } from "../data/site.js";
import "./Navbar.css";

export default function Navbar({ isLight, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="navbar container">
        <NavLink to="/" className="brand" aria-label="MySpace 首页">
          {siteConfig.name}<span>.</span>
        </NavLink>

        <nav className="nav-links" aria-label="主导航">
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={isLight ? "切换到深色主题" : "切换到浅色主题"}
          aria-pressed={isLight}
        >
          {isLight ? "☾" : "☀"}
        </button>
      </div>
    </header>
  );
}
