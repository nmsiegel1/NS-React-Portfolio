import React from "react";

function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <h2 className="nav-title">Nina Siegel</h2>
      <nav className="nav-links">
        <ul>
          <li className="nav-sections">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li class="nav-sections">
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li class="nav-sections">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li class="nav-sections">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
