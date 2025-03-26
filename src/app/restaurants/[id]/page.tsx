import prisma from "@/utils/db";
import Header from "../../../components/Header";
import PhotoGallery from "../../../components/PhotoGallery";
import Location from "../../../components/Location";
import Hours from "../../../components/Horaires";

const getAllRestaurants = async () => await prisma.restaurant.findMany();

const DetailsRestaurants = async ({}: { params: Promise<{ id: number }> }) => {
  const restaurants = await getAllRestaurants();

  console.log(restaurants);
  if (!restaurants.length) {
    return <p>Restaurants does not exist</p>;
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
