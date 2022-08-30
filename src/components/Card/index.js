import React from "react";
import { Icon } from "@iconify/react";

// information to render for each individual project
const ProjectCard = (props) => {
  const project = props.project;
  return (
    <section className="container project-div" key={project.title}>
      <div className="row">
        <div className="photo-div">
          <a href={project.link} target="_blank" rel="noreferrer">
            <div
              className="project-img"
              style={{
                backgroundImage: `url(${project.photo})`,
              }}
            ></div>
          </a>
        </div>
        <div className="project-text">
          <h2>
            {project.title}{" "}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Icon
                icon="akar-icons:github-fill"
                color="#22577a"
                width="40"
                height="40"
                className="github"
              />
            </a>
          </h2>
          <h3>{project.subtitle}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
