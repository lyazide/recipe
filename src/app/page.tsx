import Restaurant from "../types/restaurants";
import prisma from "@/utils/db";

const getAllRestaurant = async () => await prisma.restaurant.findMany();

const DetailsUsers = async ({ params }: { params: { id: number } }) => {
  const posts = await getAllPosts();
  console.log(posts);
  return <p>User: {params.id}</p>;
};

export default DetailsUsers;
