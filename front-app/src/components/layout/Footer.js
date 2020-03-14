import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5 bg-light">
      <div className="container text-primary">
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

        <p className="m-0 text-center text-white">
          Copyright &copy; Kras-KRIT 2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
