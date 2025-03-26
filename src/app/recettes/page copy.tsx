// src/app/recettes/page.tsx
import prisma from "@/utils/db";
import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import RecetteCard from "@/components/RecetteCard";
import Header from "../../components/Header";

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
          <List.Root gap="40px">
            {recettes.map((recette) => (
              <ListItem key={recette.id}>
                <RecetteCard
                  name={recette.name}
                  description={recette.description}
                  difficulty={recette.difficulty}
                  time={recette.time}
                />
              </ListItem>
            ))}
          </List.Root>
        ) : (
          <Text>Aucune recette trouvée.</Text>
        )}
      </Box>
    </div>
  );
};

export default RecettesPage;
