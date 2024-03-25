import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function LemonadePhotos() {
     const { isEnabled } = draftMode();

     const allPhotos = await getPhotosByTag(isEnabled, "lemonade")
      const pouring = allPhotos[0]
      const leaning = allPhotos[1]
      const falling = allPhotos[2]
      const lemoneyes = allPhotos[3]
    
  return (
    <div className="container mx-auto px-5 ">
      <div className="gallery hidden lg:grid">
        <div className="pouring">
          <ContentfulImage src={pouring.photo.url} alt={pouring.photo.description} width={500} height={10} />
        </div>
        <div  className="leaning">
          <ContentfulImage src={leaning.photo.url} alt={leaning.photo.description} width={500} height={10} />
        </div>
        <div className="falling">
          <ContentfulImage src={falling.photo.url} alt={falling.photo.description} width={500} height={10}/>
        </div>
        <div className="eyes">
          <ContentfulImage src={lemoneyes.photo.url} alt={lemoneyes.photo.description}width={600} height={10} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:hidden mx-auto gap-1">
        {allPhotos.map(img => (
          <ContentfulImage
            src={img.photo.url}
            alt={img.photo.description}
            width={500}
            height={100}
            />
        ))}
      </div>
    </div>
  )
}