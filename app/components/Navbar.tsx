'use client'
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <section className="md:flex-row flex justify-between mt-16 mb-16 md:mb-12 mx-1.5" >
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Panic
      </h1>
      {isOpen ? <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} /> : <DesktopNav /> }
      
        <div className={`flex md:hidden ${isOpen && 'hidden'}`}>
         <button onClick={() => setIsOpen(!isOpen)} className="flex items-center text-black-600 p-3">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
			</button>
        </div>
      
    </section>
  );
}