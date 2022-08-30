import React from "react";

const determineActiveClass = (currentPage, pageName) =>
  `nav-link ${currentPage === pageName ? "active" : "nav-link"}`;
const pageName = ["About", "Portfolio", "Resume & Skills", "Contact"];

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex align-items-center" id="header">
      <h2>Nina Siegel</h2>
      <nav>
        <ul>
          {pageName.map((pageName) => {
            return (
              <li className="links" key={pageName}>
                <a
                  href={`#{pageName}`}
                  onClick={() => handlePageChange(pageName)}
                  className={determineActiveClass(currentPage, pageName)}
                >
                  {pageName}
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
