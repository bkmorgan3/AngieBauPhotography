import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function DrinksPhotos() {
     const { isEnabled } = draftMode();

  const allPhotos = await getPhotosByTag(isEnabled, "drinks")
  console.log('a',allPhotos)
  const drinker = allPhotos[0]
  const skater = allPhotos[1]
  const pineapple = allPhotos[2]
  const can = allPhotos[3]
  return (
    <div className="container mx-auto px-5 mt-1 ">
      <div className="gallery hidden lg:grid">
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