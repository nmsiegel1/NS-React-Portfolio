import React from "react";

function Resume() {
  return (
    <section className="container mt-5 mb-5">
      <h2 className="row mb-3">Resume and Skills</h2>
      <div className="row d-flex justify-content-center">
        <section class="row p-4">
          <div class="col-12 col-md-3 mt-2">
            <h3 class="section-title">Skills</h3>
          </div>
          <div class="col-12 col-md-9 mb-2">
            <img
              src="./assets/Icons/html.png"
              alt="html"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/css.png"
              alt="css"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/javascript.png"
              alt="javascript"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/git.png"
              alt="git"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/nodejs.png"
              alt="nodejs"
              class="col-2 skill-icons"
            />

            <img
              src="./assets/Icons/bootstrap.png"
              alt="bootstrap"
              class="col-2 skill-icons"
            />

            <img
              src="./assets/Icons/mysql.png"
              alt="mysql"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/sequelize.png"
              alt="sequelize"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/handlebars.png"
              alt="handlebars"
              class="col-2 skill-icons"
            />
            <img
              src="./assets/Icons/jquery.png"
              alt="jquery"
              class="col-2 skill-icons"
            />
          </div>
        </section>
      </div>
      <a
        href="https://drive.google.com/file/d/1dIVSiLYyY9As86QRA5tKUVNMy-kJP1ug/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </section>
  );
}

export default Resume;
