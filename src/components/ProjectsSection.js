import React from "react";
import FullScreenSection from "./common/FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./common/CardComponent";

const projects = [
  {
    title: "React Application",
    description:
      "A Simple React Application to view Recent Movies and TV Shows and filter them based on different categories.",
    getImageSrc: () => require("../Assets/Images/Projects/photo1.png"),
    url: "https://github.com/Pruthvik007/movies",
  },
  {
    title: "MERN Stack Application",
    description:
      "MERN Stack Application through which an admin can keep track of an Organisation's Employee Details",
    getImageSrc: () => require("../Assets/Images/Projects/photo2.png"),
    url: "https://github.com/Pruthvik007/MERN-APP",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      id="projects-section"
      backgroundColor="#317773"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1">Featured Projects</Heading>
      <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} gap={5}>
        {projects.map((project) => (
          <div key={project.title}>
            <CardComponent
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.getImageSrc()}
              url={project.url}
            />
          </div>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
/*base sm md lg xl 2xl*/
