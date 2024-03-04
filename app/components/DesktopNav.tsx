import Link from  "next/link";


export default function DesktopNav() {
    return (
         <div className="hidden md:flex md:text-left text-lg mt-5 md:pl-8">
       <Link href={`/`} className="mx-1.5 hover:underline">
              Highlights
        </Link>
       <Link href={`/commercial/`} className="mx-1.5 hover:underline">
              Commercial
        </Link>
       <Link href={`/people/`} className="mx-1.5 hover:underline">
              People
        </Link>
       <Link href={`/motion/`} className="mx-1.5 hover:underline">
              Motion
        </Link>
       <Link href={`/installations/`} className="mx-1.5 hover:underline">
              Installations
        </Link>
       <Link href={`/about/`} className="mx-1.5 hover:underline">
              About
        </Link>
       <Link href={`/contact/`} className="mx-1.5 hover:underline">
              Contact
        </Link>
      </div>
    )
}