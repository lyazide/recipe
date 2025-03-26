// src/components/RecetteCard.tsx
import { Box, Heading, Text, Flex } from "@chakra-ui/react";

type RecetteCardProps = {
  name: string;
  description: string;
  difficulty: number;
  time: number;
};

const RecetteCard: React.FC<RecetteCardProps> = ({
  name,
  description,
  difficulty,
  time,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      boxShadow="md"
      background="lightgray"
    >
      <Heading as="h2" size="md">
        {name}
      </Heading>
      <Text mt={2}>{description}</Text>
      <Flex mt={2} justifyContent="space-between">
        <Text>Difficulté : {difficulty}</Text>
        <Text>Temps : {time} min</Text>
      </Flex>
    </Box>
  );
};

export default RecetteCard;
