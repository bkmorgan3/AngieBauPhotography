import { draftMode } from "next/headers";
import {  getPhotosByTag } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function Page() {
  const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "highlights")

  const venice = allPhotos[0]
  const makeup = allPhotos[1]
  const lemonade = allPhotos[2]
  const pablo = allPhotos[3]
  const honey = allPhotos[4]

  return (
    <div  className="container flex flex-wrap justify-center gap-1 items-start mx-auto px-5">
      <ContentfulImage 
        src={venice.photo.url}
        alt={venice.photo.description}
        width={500}
        height={100}
      />
      <ContentfulImage 
        src={lemonade.photo.url}
        alt={lemonade.photo.description}
        width={500}
        height={100}
      />
      <ContentfulImage 
        src={makeup.photo.url}
        alt={makeup.photo.description}
        width={500}
        height={100}
      />
      <ContentfulImage 
        src={pablo.photo.url}
        alt={pablo.photo.description}
        width={500}
        height={100}
      />
      <ContentfulImage 
        src={honey.photo.url}
        alt={honey.photo.description}
        width={500}
        height={100}
      />
    </div>
  );
}
