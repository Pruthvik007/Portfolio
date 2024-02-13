import { VStack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
    >
      <VStack maxWidth="1280px" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
