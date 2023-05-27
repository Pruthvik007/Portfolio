import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <HStack>
      <VStack>
        <Image src={imageSrc} alt={title} />
        <Heading>{title}</Heading>
        <Text>{description}</Text>
        <a target="_blank" href={url}>
          <HStack>
            <Text>View Details</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </a>
      </VStack>
    </HStack>
  );
};

export default Card;
