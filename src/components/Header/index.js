import React from "react";

const determineActiveClass = (currentPage, pageName) =>
  `nav-link ${currentPage === pageName ? "active" : ""}`;
const pageName = ["About", "Projects", "Contact", "Resume"];

function Header({ currentPage, handlePageChange }) {
  return (
    <header id="header">
      <h2 className="nav-title">Nina Siegel</h2>
      <nav className="nav-links">
        <ul>
          {pageName.map((name) => {
            return (
              <li className="nav-item">
                <a
                  href={`#{name}`}
                  onClick={() => handlePageChange(name)}
                  className={determineActiveClass(currentPage, name)}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
