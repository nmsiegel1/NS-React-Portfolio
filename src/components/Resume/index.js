import React, { useState } from "react";
import { Icon } from "@iconify/react";
import handlebarsIcon from "../../assets/HandlebarsIcon.png";
import mongoose from "../../assets/mongoose.png";
import resume from "../../assets/Nina-Siegel-Resume.pdf";

function Resume() {
  // skills icons
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
      name: "React Native",
      src: "tabler:brand-react-native",
      alt: "React Native",
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
      name: "GraphQL",
      src: "akar-icons:graphql-fill",
      alt: "GraphQL",
    },
    {
      name: "Apollo",
      src: "simple-icons:apollographql",
      alt: "Apollo",
    },
    {
      name: "jQuery",
      src: "bxl:jquery",
      alt: "jQuery",
    },
    {
      name: "Python",
      src: "mdi:language-python",
      alt: "Python",
    },
    {
      name: "AWS",
      src: "mdi:aws",
      alt: "AWS",
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
    // resume section
    <section className="container lg-screens">
      <div className="row p-4">
        <h2 className="title col-12 m-5 font-weight-bold ">Resume</h2>
        <div className="col-12 d-flex justify-content-center resume p-4">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Nina-Siegel-Resume"
            style={{ textDecoration: "none" }}
          >
            <Icon
              icon="cil:contact"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              color="#22577a"
              width="200"
              height="200"
              className="resume-icon p-2 mb-4 rounded"
            />
          </a>
        </div>
      </div>
      {/* skills section */}
      <div>
        {/* iconify icons */}
        <div className="row p-4">
          <h2 className="title col-12 m-5 font-weight-bold">Skills</h2>
          {skillIcons.map((icon) => (
            <div
              className="col-xm-12 col-sm-6 col-md-4 col-lg-2"
              key={icon.name}
            >
              <Icon
                icon={icon.src}
                color="#22577a"
                width="75"
                height="75"
                className="icons"
              />
              <h5 className="skills p-2">{icon.name}</h5>
            </div>
          ))}
          {/* additional icons */}
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-2 icons">
            <img
              src={handlebarsIcon}
              alt="handlebars"
              style={{ width: "75px" }}
            ></img>
            <h5 className="skills">Handlebars</h5>
          </div>
          <div className="col-xm-12 col-sm-6 col-md-4 col-lg-2 icons">
            <img src={mongoose} alt="mongoose" style={{ width: "75px" }}></img>
            <h5 className="skills">Mongoose</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
