import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Resume() {
  const skillIcons = [
    {
      name: "HTML",
      src: "icomoon-free:html-five2",
      alt: "HTML",
    },
    {
      name: "CSS",
      src: "cib:css3-shiled",
      alt: "CSS",
    },
    {
      name: "JavaScript",
      src: "akar-icons:javascript-fill",
      alt: "JavaScript",
    },
    {
      name: "Git",
      src: "bxl:git",
      alt: "Git",
    },
    {
      name: "Node.Js",
      src: "fa-brands:node",
      alt: "Node.Js",
    },
    {
      name: "Express.js",
      src: "simple-icons:express",
      alt: "Express.js",
    },
    {
      name: "React",
      src: "akar-icons:react-fill",
      alt: "React",
    },
    {
      name: "Bootstrap",
      src: "akar-icons:bootstrap-fill",
      alt: "Bootstrap",
    },
    {
      name: "MySQL",
      src: "fontisto:mysql",
      alt: "MySQL",
    },
    {
      name: "Sequelize",
      src: "file-icons:sequelize",
      alt: "Sequelize",
    },
    {
      name: "MongoDB",
      src: "bxl:mongodb",
      alt: "MongoDB",
    },
    {
      name: "Handlebars.js",
      src: "logos:handlebars",
      alt: "Handlebars.js",
    },
    {
      name: "jQuery",
      src: "bxl:jquery",
      alt: "jQuery",
    },
    {
      name: "Heroku",
      src: "bxl:heroku",
      alt: "Heroku",
    },
    {
      name: "API",
      src: "carbon:api",
      alt: "API",
    },
    {
      name: "REST API",
      src: "dashicons:rest-api",
      alt: "REST API",
    },
  ];
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <section className="container">
      <div className="row p-4">
        <h2 className="title col-12 m-5 font-weight-bold ">
          <u>Resume</u>
        </h2>
        <div className="col-12 d-flex justify-content-center resume p-4">
          <a
            href="https://drive.google.com/file/d/1mNBA36PA3K8fG-fkU3Upj5m3bFQbkIGx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="cil:contact"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              color="#22577a"
              width="200"
              height="200"
              className="resume-icon p-2 rounded"
            />

            {isHovering && (
              <h4 className="links text-center mt-4">My Resume</h4>
            )}
          </a>
        </div>
      </div>
      <div>
        <div className="row p-4">
          <h2 className="title col-12 m-5 font-weight-bold">
            <u>Skills</u>
          </h2>
          {skillIcons.map((icon) => (
            <div className="col-xm-12 col-sm-6 col-md-4 col-lg-2">
              <Icon icon={icon.src} color="#22577a" width="75" height="75" />
              <h5 className="skills">{icon.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
