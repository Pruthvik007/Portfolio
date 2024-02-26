import FullScreenSection from "./common/FullScreenSection";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import CardComponent from "./common/CardComponent";
import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
} from "../Assets/assets";

const certifications = [
  {
    title: "Advanced React",
    imageSrc: certificate6,
    url: "https://coursera.org/share/6983f06728f38b983398d6be9623a563",
  },
  {
    title: "React Basics",
    imageSrc: certificate5,
    url: "https://coursera.org/share/9b5d61145d0b5953dec2596f0d79d004",
  },
  {
    title: "Version Control",
    imageSrc: certificate4,
    url: "https://coursera.org/share/c2e91798bd5bcdcff7e53fbf06952901",
  },
  {
    title: "Programming With JavaScript",
    imageSrc: certificate3,
    url: "https://coursera.org/share/e31a456fd18313a76ce72dc651f3d24b",
  },
  {
    title: "HTML and CSS In Depth",
    imageSrc: certificate2,
    url: "https://coursera.org/share/38c16912f7f9c7e30d8d50ca3577bc58",
  },
  {
    title: "Introduction to Frontend-Development",
    imageSrc: certificate1,
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
      <SimpleGrid columns={[1, 1, 2, 2, 2, 2]} gap={5}>
        {certifications.map((certification) => (
          <div key={certification.title}>
            <CardComponent
              title={certification.title}
              imageSrc={certification.imageSrc}
              url={certification.url}
            />
          </div>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default CertificationsSection;
