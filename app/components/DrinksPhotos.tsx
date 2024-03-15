import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function DrinksPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "drinks")
  
  return (
    <div className="container gap-1 flex flex-wrap justify-center items-start mx-auto px-5 overflow-hidden">
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