import { draftMode } from "next/headers";
import { getPhotosByTag  } from "@/lib/api";
// import ContentfulImage from "@/lib/contentful-image";   awaiting updated motion file

export default async function MotionPage() {
    const {isEnabled} = draftMode();
    const motion = await getPhotosByTag(isEnabled, "motion");

    return <div  className="container flex flex-col md:flex-row justify-center items-center md:items-start gap-2 mx-auto px-5 ">
        {motion.map(vid => (
            <video key={vid.photo.title} width="320" height="240" controls loop preload="auto">
                <source src={vid.photo.url} type="video/mp4" />
                
            </video>
        ))}
    </div>
}