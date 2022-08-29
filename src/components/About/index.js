import React from "react";
import profilePic from "../../assets/projects/Mountains.jpeg";

function About() {
  return (
    <section className="container">
      <div className="row">
        <h3 className="mt-5 mb-3 intro">Hi I'm Nina, a chef turned coder!</h3>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <img
            className="profile-pic align-self-center rounded justify-content-center"
            src={profilePic}
            alt="Nina Siegel"
          ></img>
        </div>
        <div className="col-xs-12 col-md-6 about-div rounded d-flex align-self-center">
          <p>
            Full stack web developer and chef experienced in making and shipping
            code and sandwiches in an agile environment. After nearly a decade
            in food service I'm transitioning into tech after completing a
            certificate program from the University of North Carolina where I
            developed my skills in HTML, CSS, JavaScript and Node.js just to
            name a few. I can see several parallels between the cycle of prep
            and service in a restaurant and agile development. My experience in
            restaurants has honed my ability to nimbly shift priorities as
            environments change while maintaining a consistently high-quality
            product in a team environment. Since I started learning software
            engineering I've worked on several personal and academic projects to
            build experience. All of these projects have further sparked my
            interest in building my skills and jumping into a new career in web
            development. I am a person who wants to constantly be learning
            something new and working in a field that's always improving and
            evolving is the perfect way to achieve that goal.
          </p>
        </div>
        <div className="invisible">invisible</div>
      </div>
    </section>
  );
}

export default About;
