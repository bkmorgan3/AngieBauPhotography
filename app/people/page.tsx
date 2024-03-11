import { draftMode } from "next/headers";
import { getPeoplePhotos  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";


export default async function PeoplePage() {
      const { isEnabled } = draftMode();

  const allPhotos = await getPeoplePhotos(isEnabled);

  return (
    <div className="container flex flex-wrap items-start justify-center mx-auto px-5">
      {allPhotos.map(photo => (
        <ContentfulImage
          key={photo.photo.title}
          alt={photo.photo.description}
          width={500}
          height={600}
          src={photo.photo.url}
        />
      ))}
    </div>
  )
}


