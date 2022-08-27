import React from "react";
import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  const project = props.project;
  return (
    <section className="" key={project.title}>
      <div className="">
        <a href={project.link} target="_blank" rel="noreferrer">
          <div
            className=""
            style={{
              backgroundImage: `url(${project.photo})`,
            }}
          ></div>
        </a>
      </div>
      <div className="">
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <p>{project.description}</p>
        <div className="">
          <a href={project.github} target="_blank" rel="noreferrer">
            <button type="button" className="button">
              View Github Repository
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
