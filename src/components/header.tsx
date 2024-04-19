import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";

const Header = () => {
  return (
    <header className="section-spacing w-full flex py-6  z-50 justify-between items-center">
      <div>
        <h1 className="text-brand/green-dark text-3xl font-bolotta bg-transparent">
          Botsapp
        </h1>
      </div>
      <div className="flex items-center gap-10">
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-slate-400 hover:text-brand/green-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div>
          <button className="px-6 py-1 border border-white bg-transparent text-white  dark:border-white relative group transition duration-200 rounded">
            <div className="absolute -bottom-1 -right-1 bg-brand/green-dark h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200 rounded" />
            <span className="relative font-bold font-bolotta">Get botsapp</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
