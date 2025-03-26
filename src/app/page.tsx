import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import RecetteCard from "@/components/RecetteCard";
import prisma from "@/utils/db";
import Header from "@/components/Header";

type Recette = {
  id: number;
  name: string;
  description: string;
  difficulty: number;
  time: number;
};

// Fonction pour récupérer toutes les recettes
const getAllRecettes = async (): Promise<Recette[]> => {
  return await prisma.recette.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      difficulty: true,
      time: true,
    },
  });
};

const RecettesPage = async () => {
  const recettes = await getAllRecettes();

  return (
    <div>
      <Header name="Toutes les recettes" />
      <Box p={4}>
        {recettes.length > 0 ? (
          <SimpleGrid minChildWidth="sm" gap="40px">
            {recettes.map((recette) => (
              <Box key={recette.id} maxW="320px" width="100%">
                <ChakraLink
                  as={NextLink}
                  href={`/recettes/${recette.id}`}
                  _hover={{ textDecoration: "none" }}
                >
                  <RecetteCard
                    name={recette.name}
                    description={recette.description}
                    difficulty={recette.difficulty}
                    time={recette.time}
                  />
                </ChakraLink>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Text>Aucune recette trouvée.</Text>
        )}
      </Box>
    </div>
  );
};

export default RecettesPage;
