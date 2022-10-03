import React from "react";
import { Icon } from "@iconify/react";
import Badge from "react-bootstrap/Badge";

const Projects = () => {
  // projects array
  const projects = [
    {
      title: "Carbon Footsteps",
      subtitle: ["MONGODB", "EXPRESS.JS", "REACT", "NODE.JS", "GRAPHQL"],
      description:
        "A MERN stack application for an environmentally conscious user who wants to calculate their carbon footprint and learn more about how to offset their emissions in order to positively impact the world's climate.",
      link: "https://carbon-footsteps.herokuapp.com/",
      github: "https://github.com/nmsiegel1/carbon-footprint",
      photo: require("../../assets/projects/carbonFootsteps2.gif"),
    },
    {
      title: "Sip Happens",
      subtitle: ["NODE.JS", "SEQUELIZE", "HEROKU", "EXPRESS-SESSION"],
      description:
        "A wine and food pairing app that allows the user to view seasonal wine and food pairings and upvote or comment on the recommended pairings if logged in. Created by a team of 4 people.",
      link: "https://sip-happens-unc.herokuapp.com/",
      github: "https://github.com/nmsiegel1/Sip-Happens",
      photo: require("../../assets/projects/sipHappens.gif"),
    },
    {
      title: "Book Search Engine",
      subtitle: ["MONGODB", "EXPRESS.JS", "REACT", "NODE.JS", "GRAPHQL"],
      description:
        "This is a MERN stack web application that allows a user to search for books sourced by the Google Books API and save them with their user information. Built with React, MongoDB, Express.js, GraphQL and Apollo Server",
      link: "https://ns-book-search-engine.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-Book-Search-Engine",
      photo: require("../../assets/projects/bookSearch.gif"),
    },
    {
      title: "Shop-Shop",
      subtitle: [
        "MONGODB",
        "EXPRESS.JS",
        "REACT",
        "NODE.JS",
        "GRAPHQL",
        "GLOBAL STATE",
      ],
      description:
        "This is a MERN stack e-commerce application that allows the user to shop for products and checkout with Stripe. Made with React, MongoDB, Express.js, Node.js, GraphQL and organized with global state.",
      link: "https://ns-shop-shop.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-shop-shop",
      photo: require("../../assets/projects/shop.gif"),
    },
    {
      title: "The Tech Blog",
      subtitle: ["NODE.JS", "SEQUELIZE", "HEROKU", "EXPRESS-SESSION"],
      description:
        "A full stack blog application for developers to write posts about the tech world and comment on each others posts.",
      link: "https://ns-tech-blog.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-Tech-Blog",
      photo: require("../../assets/projects/techBlog.gif"),
    },
    {
      title: "What's For Dinner?",
      subtitle: ["HTML", "CSS", "JAVASCRIPT", "BULMA", "THIRD PARTY API'S"],
      description:
        "A recipe finder app made with a third party API created by a team of four. Includes a search page, random recipe generator and favorites page.",
      link: "https://nmsiegel1.github.io/Whats-for-dinner/",
      github: "https://github.com/nmsiegel1/Whats-for-dinner",
      photo: require("../../assets/projects/whatsForDinner.gif"),
    },
  ];

  return (
    <main>
      <div className="container lg-screens" style={{ margin: "auto" }}>
        <div className="row">
          <h2 className="title m-5 font-weight-bold">My Portfolio</h2>
        </div>
        <div>
          <p className="text-center" style={{ color: "#22577a" }}>
            Here is a sample of my work. Some were made in group projects,
            others I worked on individually.
          </p>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-xs-12 col-md-6" key={project.title}>
              <section className="container project-div rounded">
                <div className="row">
                  <div className="photo-div">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <div
                        className="project-img rounded"
                        style={{
                          backgroundImage: `url(${project.photo})`,
                        }}
                      >
                        {/* <img src={project.photo} alt="project gif"></img> */}
                      </div>
                    </a>
                  </div>
                  <div className="project-text">
                    <h2>
                      {project.title}{" "}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon
                          icon="akar-icons:github-fill"
                          color="#22577a"
                          width="40"
                          height="40"
                          className="github"
                        />
                      </a>
                    </h2>
                    <div className="row pills">
                      {project.subtitle.map((skill, index) => (
                        <div className="col mb-3 text-center">
                          <Badge pill bg="variant" className="pill" key={index}>
                            {skill}
                          </Badge>{" "}
                        </div>
                      ))}
                    </div>
                    <p>{project.description}</p>
                  </div>
                </div>
              </section>{" "}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
