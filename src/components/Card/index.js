import React from "react";

const Card = (props) => {
  const project = props.project;
  return (
    <section className="new-work" key={project.title}>
      <div className="work-photo">
        <a href={project.link} target="_blank" rel="noreferrer">
          <div
            className="work-all"
            style={{
              backgroundImage: `url(${project.photo})`,
            }}
          ></div>
        </a>
      </div>
      <div className="work-text">
        <h2>{project.title}</h2>
        <h3>{project.subtitle}</h3>
        <p>{project.description}</p>
        <div className="click">
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

export default Card;
