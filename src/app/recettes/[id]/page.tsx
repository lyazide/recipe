// src/app/recettes/[id]/page.tsx
import RecetteDetails from "@/components/RecetteDetails";
import prisma from "@/utils/db";
import { Text } from "@chakra-ui/react";
import Header from "../../../components/Header";
import { Block } from "@/components/block";

const getRecetteById = async (id: number) => {
  return await prisma.recette.findUnique({
    where: { id },
    include: {
      autheur: {
        select: { email: true },
      },
      ingredients: {
        select: { id: true, name: true, quantity: true },
      },
      etapes: {
        select: { id: true, instruction: true },
      },
    },
  });
};

const RecetteDetailsPage = async ({ params }: { params: { id: string } }) => {
  const recette = await getRecetteById(parseInt(params.id));

  if (!recette) {
    return <Text>Recette non trouvée.</Text>;
  }

  return (
    <div>
      <Block />
      <Header name={recette.name} />
      <RecetteDetails
        name={recette.name}
        description={recette.description}
        difficulty={recette.difficulty}
        time={recette.time}
        autheur={recette.autheur}
        ingredients={recette.ingredients}
        etapes={recette.etapes}
      />
    </div>
  );
};

export default RecetteDetailsPage;
