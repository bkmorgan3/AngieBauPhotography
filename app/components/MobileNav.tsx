'use client';
import Link from  "next/link";



export default function MobileNav({setIsOpen, isOpen}) {
      
    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)}>X</button>
        </div>
    )
}