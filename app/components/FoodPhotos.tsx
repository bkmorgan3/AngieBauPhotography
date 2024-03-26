import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function FoodPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "foodProducts")

   const chopsticks = allPhotos[0]
  const besitos = allPhotos[1]
  const pablo = allPhotos[2]
  const honey = allPhotos[3]
  
  return (
    <div className="container mx-auto px-5 mt-1">
      <div className="food hidden lg:grid">
        <div className="besitos">
          <ContentfulImage src={besitos.photo.url} alt={besitos.photo.description} width={500} height={10} />
        </div>
        <div  className="chopsticks">
          <ContentfulImage src={chopsticks.photo.url} alt={chopsticks.photo.description} width={500} height={10} />
        </div>
        <div className="honey">
          <ContentfulImage src={honey.photo.url} alt={honey.photo.description} width={500} height={10}/>
        </div>
        <div className="pablo">
          <ContentfulImage src={pablo.photo.url} alt={pablo.photo.description}width={600} height={10} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:hidden mx-auto gap-1">
        {allPhotos.map(img => (
          <ContentfulImage
            key={img.photo.description}
            src={img.photo.url}
            alt={img.photo.description}
            width={500}
            height={100}
            />
        ))}
      </div>
    </div>
  )
}