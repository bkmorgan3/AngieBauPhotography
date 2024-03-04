'use client';
import Link from  "next/link";

type MobileProps = {
    setIsOpen: () => void
    isOpen: boolean
}


export default function MobileNav({setIsOpen, isOpen}: MobileProps) {
      
    return (
        <div className="flex flex-col">
            <button className="self-end" onClick={() => setIsOpen(!isOpen)}>X</button>
             <div style={{border: '1px solid red'}} className="flex flex-col  text-lg mt-5 pl-8">
                <Link onClick={() => setIsOpen(!isOpen)} href={`/`} className="mx-1.5 hover:underline">
                        Highlights
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/commercial/`} className="mx-1.5 hover:underline">
                        Commercial
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/people/`} className="mx-1.5 hover:underline">
                        People
                    </Link>
                <Link href={`/motion/`} className="mx-1.5 hover:underline">
                        Motion
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/installations/`} className="mx-1.5 hover:underline">
                        Installations
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/about/`} className="mx-1.5 hover:underline">
                        About
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/contact/`} className="mx-1.5 hover:underline">
                        Contact
                    </Link>
            </div>
        </div>
    )
}