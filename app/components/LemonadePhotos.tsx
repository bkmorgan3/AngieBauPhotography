import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function LemonadePhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "lemonade")
  const lemoneyes = allPhotos[0]
  const fallingLemons = allPhotos[1]
  const holdingGlass = allPhotos[2]
  const pouring = allPhotos[3]
  const leaningGlass = allPhotos[4]
  
  return (
    <div className="container gap-1 flex flex-wrap justify-evenly items-start mx-auto px-5 overflow-hidden">
      <ContentfulImage
          alt={holdingGlass.photo.description}
          width={500}
          height={600}
          src={holdingGlass.photo.url}
        />

        <ContentfulImage
          alt={pouring.photo.description}
          width={500}
          height={600}
          src={pouring.photo.url}
        />
         <ContentfulImage
          alt={lemoneyes.photo.description}
          width={500}
          height={600}
          src={lemoneyes.photo.url}
        />

     
      <ContentfulImage
          alt={leaningGlass.photo.description}
          width={400}
          height={600}
          src={leaningGlass.photo.url}
          // className="my-2"
        />
      <ContentfulImage
          alt={fallingLemons.photo.description}
          width={400}
          height={600}
          src={fallingLemons.photo.url}
          // className="my-3"
        />
  </div>
  )
}