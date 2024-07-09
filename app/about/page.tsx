import { draftMode } from "next/headers";
import {  getPhotosByTag } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function AboutPage() {
    const { isEnabled } = draftMode();

    const allPhotos = await getPhotosByTag(isEnabled, "about")
      const [angie] = allPhotos

  
    return (
        <div className="container flex flex-wrap mx-auto h-screen grow ">
            <div className="flex h-[450px] p-4 flex-col sm:flex-row max-w-4xl ml-auto mr-auto">

            <ContentfulImage 
                src={angie.photo.url}
                alt={angie.photo.description}
                width={500}
                height={200}
                key={angie.photo.url}
                className="rounded-md sm:w-1/2 mx-auto sm:mb-5"
                />
            <p className="sm:w-1/2 self-center p-4 mt-3 mb-3 sm:text-justify mx-auto">Angie lives in Los Angeles, CA.  Her award winning photos have been featured in publications and galleries far and wide.  
            When she is not behind the camera you can find her in a dance class or out hiking with her dog Pablo.  
            If you would like to hire Angie or talk about any future projects you can send a message in the email below or on the Contact page. 
            Thanks for stopping by the site.</p>
                </div>
        </div>
    )
}