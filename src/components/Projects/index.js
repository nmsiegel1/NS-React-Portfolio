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
        "A MERN stack application for an environmentally conscious user who wants to calculate their carbon footprint and learn more about how to offset their emissions in order to positively impact the world's climate. The user is first provided with information about global footprint averages. Once logged in, the user can calculate their carbon footprint based on their usage infromation and make pledges to reduce thier footprint. The user can come back and mark pledges as complete once finished.",
      link: "https://carbon-footsteps.herokuapp.com/",
      github: "https://github.com/nmsiegel1/carbon-footprint",
      gif: require("../../assets/projects/carbonFootsteps-lg.gif"),
      photo: require("../../assets/projects/carbonFootsteps-lg.png"),
    },
    {
      title: "Sip Happens",
      subtitle: ["NODE.JS", "SEQUELIZE", "HEROKU", "EXPRESS-SESSION"],
      description:
        "A full stack wine and food pairing application that allows the user to view seasonal wine and food pairings and upvote or comment on the recommended pairings if logged in. Lead developer for a team of 4 people primarily responsible for the back end.",
      link: "https://sip-happens-unc.herokuapp.com/",
      github: "https://github.com/nmsiegel1/Sip-Happens",
      gif: require("../../assets/projects/sipHappens-lg.gif"),
      photo: require("../../assets/projects/sipHappens-lg.png"),
    },
    {
      title: "Book Search Engine",
      subtitle: ["MONGODB", "EXPRESS.JS", "REACT", "NODE.JS", "GRAPHQL"],
      description:
        "This is a MERN stack web application that allows a user to search for books sourced by the Google Books API and save them with their user information. The user can come back and see their saved books at any time and delete them if no longer interested.",
      link: "https://ns-book-search-engine.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-Book-Search-Engine",
      gif: require("../../assets/projects/bookSearch-lg.gif"),
      photo: require("../../assets/projects/bookSearch-lg.png"),
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
        "This is a MERN stack e-commerce application that allows the user to shop for products and checkout with Stripe. The user can view products by category or individually, update their cart as needed and view order history.",
      link: "https://ns-shop-shop.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-shop-shop",
      gif: require("../../assets/projects/shop-lg.gif"),
      photo: require("../../assets/projects/shop-lg.png"),
    },
    {
      title: "The Tech Blog",
      subtitle: ["NODE.JS", "SEQUELIZE", "HEROKU", "EXPRESS-SESSION"],
      description:
        "A full stack blog application for developers to write posts about the tech world and comment on each others posts. The user can view all post on the main page or select an individual post to comment. The user may write a new post or see their previous posts in the dashboard.",
      link: "https://ns-tech-blog.herokuapp.com/",
      github: "https://github.com/nmsiegel1/NS-Tech-Blog",
      gif: require("../../assets/projects/techBlog-xl.gif"),
      photo: require("../../assets/projects/techBlog-lg.png"),
    },
    {
      title: "What's For Dinner?",
      subtitle: ["HTML", "CSS", "JAVASCRIPT", "BULMA", "THIRD PARTY API'S"],
      description:
        "A recipe finder app made with a third party API. The user may search for a recipe or click the dice button to recieve a random recipe. You may save recipes to your favorites list which can be viewed or deleted any time. The lead developer for a team of 4 primarily responsible for JavaScript.",
      link: "https://nmsiegel1.github.io/Whats-for-dinner/",
      github: "https://github.com/nmsiegel1/Whats-for-dinner",
      gif: require("../../assets/projects/whatsForDinner-lg.gif"),
      photo: require("../../assets/projects/whatsForDinner-lg.png"),
    },
    // comment
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
            <div className="col-12" key={project.title}>
              <section className="container project-div rounded">
                <div className="row">
                  <div className="photo-div">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <div
                        className="project-img rounded"
                        style={{
                          backgroundImage: `url(${project.photo})`,
                        }}
                      ></div>
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
                        <div
                          className="col m-3 text-center"
                          key={skill + index}
                        >
                          <Badge pill bg="variant" className="pill">
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
