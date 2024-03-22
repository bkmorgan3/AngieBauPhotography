import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function LemonadePhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "lemonade")
  const leaning = allPhotos[1]
  const falling = allPhotos[2]
  const pouring = allPhotos[0]
  const lemoneyes = allPhotos[3]
  
  return (
    <div className="container gallery mx-auto px-5 h-screen">
      <div  className="pouring ">
        <img src={pouring.photo.url} alt={pouring.photo.description} />
      </div>
      <div  className="leaning">
        <img src={leaning.photo.url} alt={leaning.photo.description}  />
      </div>
      <div className="falling">
        <img src={falling.photo.url} alt={falling.photo.description} />
      </div>
      <div className="eyes">
        <img src={lemoneyes.photo.url} alt={lemoneyes.photo.description} />
      </div>
    </div>
  )
}