import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: saipruthvik460@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Pruthvik007",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/sai-pruthvik-noule-722208221/",
  },
];

const Header = () => {
  const headerRef = useRef();
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const component = document.getElementById(`${anchor}-section`);
    if (component) {
      window.scrollTo({
        top: component.offsetTop - headerRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {socials.map((account) => {
                return (
                  <a target="_blank" key={account.url} href={account.url}>
                    {<FontAwesomeIcon icon={account.icon} size="2x" />}
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a onClick={handleClick("projects")} href="/#projects">
                Projects
              </a>
              <a
                onClick={handleClick("certifications")}
                href="/#certifications"
              >
                Certifications
              </a>
              <a target="_blank" href={require("../Assets/Resume.pdf")}>
                My Resume
              </a>
              <a onClick={handleClick("contactme")} href="/#contact-me">
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
