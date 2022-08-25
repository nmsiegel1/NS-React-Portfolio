import React, { useState } from "react";

function Footer() {
  const contactIcons = [
    {
      name: "email",
      src: require("../../assets/contact/email.png"),
      href: "mailto: siegel.nina.m@gmail.com",
      alt: "siegel.nina.m@gmail.com",
    },
    {
      name: "Phone",
      src: require("../../assets/contact/phone.png"),
      href: "tel:3038278091",
      alt: "303.827.8091",
    },
    {
      name: "LinkedIn",
      src: require("../../assets/contact/linkedin.png"),
      href: "https://linkedin.com/in/nmsiegel",
      alt: "https:linkedin.com/in/nmsiegel",
    },
    {
      name: "GitHub",
      src: require("../../assets/contact/github.png"),
      href: "https://github.com/nmsiegel1",
      alt: "https://github.com/nmsiegel1",
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
    <footer
      className="contact-links d-flex flex-column align-items-center"
      id="footer"
    >
      <div class="contacts">
        <h3 class="section-title" id="contact-me">
          Contact Me
        </h3>
      </div>
      <div>
        {contactIcons.map((icon) => (
          <a
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <img
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              id={icon.name}
              src={icon.src}
              alt={icon.alt}
            />
            {isHovering && <h4>{icon.alt}</h4>}
          </a>
        ))}
      </div>
      <div className="mb-3 text-center">
        <h5 className="footer-name row">Nina Siegel</h5>
        &copy; 2022
      </div>
    </footer>
  );
}

export default Footer;
