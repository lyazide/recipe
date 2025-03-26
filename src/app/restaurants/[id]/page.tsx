import Restaurant from "../../../types/restaurants";
import prisma from "@/utils/db";
import Header from "../../../components/Header";
import PhotoGallery from "../../../components/PhotoGallery";
import Location from "../../../components/Location";
import Hours from "../../../components/Horaires";

const getAllRestaurants = async () => await prisma.restaurant.findMany();

const DetailsRestaurants = async ({
  params,
}: {
  params: Promise<{ id: number }>;
}) => {
  const restaurants = await getAllRestaurants();
  const { id } = await params;
  console.log(restaurants);
  if (!restaurants.length) {
    return <p>Restaurants doesnt exist</p>;
  }

  return (
    <div>
      {restaurants.map((restaurants) => (
        <div key={restaurants.id}>
          <Header name={restaurants.nom} />
          <PhotoGallery photos={restaurants.photos} />
          <Location address={restaurants.localisation} />
          <Hours hours={restaurants.horaires} />
        </div>
      ))}
    </div>
  );
};

export default DetailsRestaurants;
