import { draftMode } from "next/headers";
import {  getPhotosByTag } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function AboutPage() {
    const { isEnabled } = draftMode();

    const allPhotos = await getPhotosByTag(isEnabled, "about")
      const [angie] = allPhotos

  
    return (
        <div className="container flex flex-col sm:flex-row flex-wrap mx-auto ">
                    <ContentfulImage 
                        src={angie.photo.url}
                        alt={angie.photo.description}
                        width={500}
                        height={200}
                        key={angie.photo.url}
                        className="rounded-md sm:w-1/2 mx-auto"
                    />
               
                
                    <p className="sm:w-1/2 self-center px-3 mt-2">Angie lives in Los Angeles, CA.  Her award winning photos have been featured in publications and galleries far and wide.  
                    When she is not behind the camera you can find her in a dance class or out hiking with her dog Pablo.  
                    If you would like to hire Angie or talk about any future projects you can send a message in the email below or on the Contact page. 
                    Thanks for stopping by the site.</p>
        </div>
    )
}