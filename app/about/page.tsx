import { draftMode } from "next/headers";
import {  getPhotosByTag } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function AboutPage() {
    const { isEnabled } = draftMode();

    const allPhotos = await getPhotosByTag(isEnabled, "about")
  
    return (
        <div  className="container flex flex-wrap mx-auto justify-center h-full">
            <div className="image">
            {allPhotos.map(img => (
                <ContentfulImage 
                    src={img.photo.url}
                    alt={img.photo}
                    width={500}
                    height={10}
                    key={img.photo.url}
                    className="rounded-md"
                    />
            ))}
            </div>
                <div className="text w-1/2 self-center mx-3 sm:my-1">
                    Angie lives in Los Angeles, CA.  Her award winning photos have been featured in publications and galleries far and wide.  
                    When she is not behind the camera you can find her in a dance class or out hiking with her dog Pablo.  
                    If you would like to hire Angie or talk about any future projects you can send a message in the email below or on the Contact page. 
                    Thanks for stopping by the site.
                </div>
        </div>
    )
}