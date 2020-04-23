import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="text-primary">
        <p className="float-right">
          <Link to="/">Вернуться назад</Link>
        </p>
        <p>Kras-KRIT &copy; Открытая площадка для студентов ККРИТ.</p>
        <p>
          Created by @foult080
          <a
            href="https://github.com/Foult080"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="icon-small fab fa-github-square"></i>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
