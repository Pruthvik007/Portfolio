import React from "react";
import FullScreenSection from "./common/FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./common/Card";

const projects = [
  {
    title: "React Basics",
    imageSrc: "/Images/Certificates/certificate3.png",
    url: "https://coursera.org/share/9b5d61145d0b5953dec2596f0d79d004",
  },
  {
    title: "Advanced React",
    imageSrc: "/Images/Certificates/certificate4.png",
    url: "https://coursera.org/share/6983f06728f38b983398d6be9623a563",
  },
  {
    title: "Version Control",
    imageSrc: "/Images/Certificates/certificate5.png",
    url: "https://coursera.org/share/c2e91798bd5bcdcff7e53fbf06952901",
  },
  {
    title: "Programming With JavaScript",
    imageSrc: "/Images/Certificates/certificate2.png",
    url: "https://coursera.org/share/e31a456fd18313a76ce72dc651f3d24b",
  },
  {
    title: "Introduction to Frontend-Development",
    imageSrc: "/Images/Certificates/certificate1.png",
    url: "https://coursera.org/share/4ae2183221b69361a350e64f36a9ced8",
  },
];

const CertificationsSection = () => {
  return (
    <FullScreenSection
      id="certifications-section"
      backgroundColor="#101820"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1">My Certifications</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            imageSrc={project.imageSrc}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertificationsSection;
