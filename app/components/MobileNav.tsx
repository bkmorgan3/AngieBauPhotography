'use client';
import Link from  "next/link";

type MobileProps = {
    setIsOpen: (p: boolean) => void
    isOpen: boolean
}


export default function MobileNav({setIsOpen, isOpen}: MobileProps) {
      
    return (
            <div className={`fixed w-full z-10 top-0 left-0 h-full flex flex-col justify-around items-center bg-slate-950 text-lg mt-5 pl-8 transition-delay-500 ${isOpen && 'overflow-hidden overflow-y-hidden'}`}>
                <button className="self-end text-white mr-5" onClick={() => setIsOpen(!isOpen)}>X</button>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/`} className="text-white mx-1.5">
                        Highlights
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/commercial/`} className="text-white mx-1.5">
                        Commercial
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/people/`} className="text-white mx-1.5">
                        People
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/motion/`} className="text-white mx-1.5">
                        Motion
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/installations/`} className="text-white mx-1.5">
                        Personal
                    </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/about/`} className="text-white mx-1.5">
                        About
                </Link>
                <Link onClick={() => setIsOpen(!isOpen)} href={`/contact/`} className="text-white mx-1.5">
                        Contact
                </Link>
            </div>
    )
}