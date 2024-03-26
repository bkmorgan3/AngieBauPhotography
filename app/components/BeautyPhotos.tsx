import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function BeautyPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "beauty")

  const cleaners = allPhotos[0]
  const stacked = allPhotos[1]
  const venice = allPhotos[2]
  const serum = allPhotos[3]
  
  return (
    <div className="container mx-auto px-5 mt-1">
      <div className="beauty hidden lg:grid">
        <div className="serum">
          <ContentfulImage src={serum.photo.url} alt={serum.photo.description} width={500} height={10} />
        </div>
        <div  className="cleaners">
          <ContentfulImage src={cleaners.photo.url} alt={cleaners.photo.description} width={500} height={10} />
        </div>
        <div className="venice">
          <ContentfulImage src={venice.photo.url} alt={venice.photo.description} width={500} height={10}/>
        </div>
        <div className="stacked">
          <ContentfulImage src={stacked.photo.url} alt={stacked.photo.description}width={600} height={10} />
        </div>
      </div>
      <div className="flex flex-wrap justify-center lg:hidden mx-auto gap-1">
        {allPhotos.map(img => (
          <ContentfulImage
            key={img.photo.description}
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