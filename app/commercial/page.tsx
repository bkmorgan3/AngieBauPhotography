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
         <div className="container mx-auto px-5">
      {allPhotos.map((photo, ind) => (
        <ContentfulImage
          key={` ${ind} - ${photo.photo.title}`}
          alt="A photo"
          width={1800}
          height={900}
          className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": photo.photo.url,
      })}
        src={photo.photo.url}
        />
      ))}
    </div>
    )
}


