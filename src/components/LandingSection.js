import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./common/FullScreenSection";

const greeting = "Hello, I am Sai Pruthvik!";
const bio1 = "A Full Stack Developer";
const bio2 = "Experienced in React and Spring";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing-section"
  >
    <VStack textAlign="center">
      <Avatar src={require("../Assets/Images/avatar.png")} size="xl" />
      <Text>{greeting}</Text>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
