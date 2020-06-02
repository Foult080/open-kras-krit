import React from "react";
//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="text-primary">
        <div className="my-container">
          <div className="">
            <p>Open-Kras-KRIT &copy; Открытая площадка для студентов ККРИТ.</p>
            <a
              href="https://github.com/Foult080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>
                Created by @foult080
                <i className="icon-small fab fa-github-square"></i>
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
