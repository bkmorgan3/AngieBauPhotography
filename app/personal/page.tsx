import { draftMode } from "next/headers";
import { getPersonalPhotos  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function PersonalPage() {
      const { isEnabled } = draftMode();

  const allPhotos = await getPersonalPhotos(isEnabled)
    return (
         <div className="container mx-auto px-5 flex flex-wrap">
      {allPhotos.map(photo => (
        <ContentfulImage
          key={photo.photo.title}
          alt={photo.photo.description}
          width={700}
          height={600}
          className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": photo.photo.url,
      })}
        src={photo.photo.url}
        />
      ))}
    </div>
    )
}


