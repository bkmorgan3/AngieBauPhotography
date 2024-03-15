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
    <div className="container gap-1 flex flex-wrap justify-center mx-auto px-5 overflow-hidden">
      {/* <ContentfulImage
          alt={holdingGlass.photo.description}
          width={500}
          height={600}
          src={holdingGlass.photo.url}
          className="object-cover h-screen"
        />

      <ContentfulImage
        alt={pouring.photo.description}
        width={500}
        height={600}
        src={pouring.photo.url}
        className="object-cover h-screen"
      />
      <ContentfulImage
        alt={lemoneyes.photo.description}
        width={500}
        height={600}
        src={lemoneyes.photo.url}
        className="object-cover h-screen"
      />
      <ContentfulImage
          alt={leaningGlass.photo.description}
          width={500}
          height={600}
          src={leaningGlass.photo.url}
          className="object-cover h-screen"
        />
      <ContentfulImage
          alt={fallingLemons.photo.description}
          width={500}
          height={600}
          src={fallingLemons.photo.url}
          className="object-cover self-start"
        />  */}

        {allPhotos.map(photo => (
          <ContentfulImage 
            src={photo.photo.url}
            alt={photo.photo.description}
            width={500}
            height={200}
            className="w-auto"
          />
        ))}
  </div>
  )
}