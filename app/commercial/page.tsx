import { draftMode } from "next/headers";
import { getCommercialPhotos  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function CommercialPage() {
  const { isEnabled } = draftMode();

  const allPhotos = await getCommercialPhotos(isEnabled)

  return (
    <div className="flex flex-wrap justify-center items-start mx-auto px-5">
      {allPhotos.map(photo => (
        <ContentfulImage
          key={photo.photo.title}
          alt={photo.photo.description}
          width={1000}
          height={700}
          src={photo.photo.url}
          className="object-fit"
        />
      ))}
  </div>
  )
}


