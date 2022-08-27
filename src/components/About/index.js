import React from "react";

function About() {
  return (
    <section className="container">
      <h1 id="about">Nina Siegel</h1>
      <h3 className="pb-3">Chef Turned Coder</h3>
      <div className="row">
        <div className="col-6 profile-pic"></div>
        <div className="col-6">
          <p m-2>
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
