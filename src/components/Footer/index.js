import React, { useState } from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const contactIcons = [
    {
      name: "email",
      src: "clarity:email-solid",
      href: "mailto: siegel.nina.m@gmail.com",
      alt: "siegel.nina.m@gmail.com",
    },
    {
      name: "Phone",
      src: "bx:phone-call",
      href: "tel:3038278091",
      alt: "303.827.8091",
    },
    {
      name: "LinkedIn",
      src: "akar-icons:linkedin-box-fill",
      href: "https://linkedin.com/in/nmsiegel",
      alt: "https:linkedin.com/in/nmsiegel",
    },
    {
      name: "GitHub",
      src: "akar-icons:github-fill",
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
            <Icon
              icon={icon.src}
              color="lavenderblush"
              width="40"
              height="40"
            />
            {/* {isHovering && <h4>{icon.alt}</h4>} */}
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
