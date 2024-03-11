import { draftMode } from "next/headers";
import { getMotionPhotos  } from "@/lib/api";
import ContentfulImage from "@/lib/contentful-image";

export default async function MotionPage() {
    const {isEnabled} = draftMode();
    const motion = await getMotionPhotos(isEnabled);

    return <div  className="container flex justify-center gap-1 mx-auto px-5">
        {motion.map(vid => (
            <video key={vid.photo.title} width="320" height="240" controls loop preload="auto">
                <source src={vid.photo.url} type="video/mp4" />
                
            </video>
        ))}
    </div>
}