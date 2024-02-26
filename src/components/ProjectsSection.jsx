import FullScreenSection from "./common/FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./common/CardComponent";
import { project1Image, project2Image } from "../Assets/assets";

const projects = [
  {
    title: "React Application",
    description:
      "A Simple React Application to View Information of Movies and TV Shows and Filter them based on different Categories.",
    getImageSrc: () => project1Image,
    url: "https://github.com/Pruthvik007/movies-and-series",
  },
  {
    title: "MERN Stack Application",
    description:
      "MERN Stack Application through which an admin can keep track of an Organisation's Employee Details",
    getImageSrc: () => project2Image,
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
