import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-muted footer">
      <div className="container">
        <p className="float-right">
          <Link to="/">Вернуться назад</Link>
        </p>
        <p>
          *Яркое и запоминающееся название* &copy; Открытая площадка для
          работодателей и студентов ККРИТ.
        </p>
        <p>
          Created by @Foult080{" "}
          <a
            href="https://github.com/Foult080/kras-krit-jobs"
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
