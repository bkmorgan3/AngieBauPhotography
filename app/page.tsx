import { draftMode } from "next/headers";

import {  getAllPhotos } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default async function Page() {
  const { isEnabled } = draftMode();

  const allPhotos = await getAllPhotos(isEnabled)

  return (
    <div className="container flex flex-wrap mx-auto px-5">
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
  );
}
