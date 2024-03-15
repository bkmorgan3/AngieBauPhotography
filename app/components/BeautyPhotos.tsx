import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function BeautyPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "beauty")

  const lemoneyes = allPhotos[0]
  const fallingLemons = allPhotos[1]
  const holdingGlass = allPhotos[0]
  const pouring = allPhotos[2]
  const leaningGlass = allPhotos[4]
  
  return (
    <div className="container gap-1 flex flex-wrap justify-center items-start mx-auto px-5 overflow-hidden">
        <ContentfulImage
          alt={holdingGlass.photo.description}
          width={400}
          height={600}
          src={holdingGlass.photo.url}
          
        
        />
        <ContentfulImage
          alt={fallingLemons.photo.description}
          width={400}
          height={600}
          src={fallingLemons.photo.url}
          
        
        />
        <ContentfulImage
          alt={pouring.photo.description}
          width={400}
          height={600}
          src={pouring.photo.url}
          
        
        />
    </div>
  )
}