// src/app/users/[id]/page.tsx

import prisma from "@/utils/db";

const getAllRecette = async (authorId: number) =>
  await prisma.recette.findMany({
    where: {
      authorId,
    },
  });

const DetailsUsers = async ({ params }: { params: { id: string } }) => {
  const parsedId = parseInt(params.id);
  const Recette = await getAllRecette(parsedId);

  if (!Recette.length) {
    return <p>Users doenst have Recette</p>;
  }
  return (
    <p>
      Users n°{parsedId} have {Recette.length} Recette
    </p>
  );
};

export default DetailsUsers;
