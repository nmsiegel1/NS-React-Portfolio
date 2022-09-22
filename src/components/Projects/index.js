import React from "react";
import ProjectCard from "../Card";

const Projects = () => {
  // projects array
  const projects = [
    {
      title: "Carbon Footsteps",
      subtitle: "MERN, GraphQL",
      description:
        "A MERN stack application is for an environmentally conscious user who wants to calculate their carbon footprint and learn more about how to offset their emissions in order to positively impact the world's climate.",
      link: "https://carbon-footsteps.herokuapp.com/",
      github: "https://github.com/nmsiegel1/carbon-footprint",
      photo: require("../../assets/projects/carbonFootprint.png"),
    },
    {
      title: "Sip Happens",
      subtitle: "NODE.JS. SEQUELIZE, HEROKU, EXPRESS-SESSION",
      description:
        "A wine and food pairing app that allows the user to upvote or comment on the recommended pairings once logged in. Created by a team of 4 people.",
      link: "https://sip-happens-unc.herokuapp.com/",
      github: "https://github.com/nmsiegel1/Sip-Happens",
      photo: require("../../assets/projects/sipHappens.png"),
    },
    {
      title: "The Tech Blog",
      subtitle: "NODE.JS, SEQUELIZE, HEROKU, EXPRESS-SESSION",
      description:
        "A full stack blog application for developers to write posts about the tech world",
      link: "https://ns-tech-blog.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-Tech-Blog",
      photo: require("../../assets/projects/tech2.png"),
    },
    {
      title: "What's For Dinner?",
      subtitle: "HTML, CSS, JAVASCRIPT, BULMA, THIRD PARTY API'S",
      description:
        "A recipe finder app made with a third party API created by a team of four. Includes a search page, random recipe generator and favorites page.",
      link: "https://nmsiegel1.github.io/Whats-for-dinner/",
      github: "https://github.com/nmsiegel1/Whats-for-dinner",
      photo: require("../../assets/projects/whatsfordinner.png"),
    },
    {
      title: "Note Taker",
      subtitle: "NODE.JS, EXPRESS.JS",
      description:
        "An application that allows a user to write and save notes to organize their thoughts made with Express.js",
      link: "https://ns-note-taker22.herokuapp.com/",
      github: "https://github.com/nmsiegel1/Note-Taker",
      photo: require("../../assets/projects/noteTaker.png"),
    },
    {
      title: "Employee Tracker",
      subtitle: "NODE.JS MYSQL, INQUIRER",
      description:
        "A command line application that a business could use to manage information about thier employees and help interface with their database",
      link: "https://watch.screencastify.com/v/vl3YIlClVFt94wSZQHN3",
      github: "https://github.com/nmsiegel1/NS-Employee-Tracker",
      photo: require("../../assets/projects/EmployeeTracker.png"),
    },
  ];

  return (
    <main>
      <div className="container">
        <div className="row">
          <h2 className="title m-5 font-weight-bold">
            <u>My Portfolio</u>
          </h2>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-xs-12 col-lg-6" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
