import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function DrinksPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "drinks")
 
  const can = allPhotos[0]
  const drinker = allPhotos[1]
  const skater = allPhotos[2]
  const pineapple = allPhotos[3]
  
  return (
    <div  className="container mx-auto px-5 mt-1 ">
      <div className="drinks hidden lg:grid">
        <div className="can">
          <ContentfulImage src={can.photo.url} alt={can.photo.description} width={500} height={10} />
        </div>
        <div  className="skater">
          <ContentfulImage src={skater.photo.url} alt={skater.photo.description} width={500} height={10} />
        </div>
        <div className="drinker">
          <ContentfulImage src={drinker.photo.url} alt={drinker.photo.description} width={500} height={10}/>
        </div>
        <div className="pineapple">
          <ContentfulImage src={pineapple.photo.url} alt={pineapple.photo.description}width={600} height={10} />
        </div>

      </div>
      <div className="flex flex-wrap justify-center lg:hidden mx-auto gap-1">
        {allPhotos.map(img => (
          <ContentfulImage
            key={img.photo.description}
            src={img.photo.url}
            alt={img.photo.description}
            width={500}
            height={10}
            />
        ))}
      </div>
    </div>
  )
}