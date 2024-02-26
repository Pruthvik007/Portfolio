import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
const CardComponent = ({ title, description, imageSrc, url }) => {
  return (
    <HStack style={{ textAlign: "center" }}>
      <VStack>
        <Image src={imageSrc} alt={title} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <a target="_blank" href={url}>
          <Text>View Details</Text>
        </a>
      </VStack>
    </HStack>
  );
};

export default CardComponent;
