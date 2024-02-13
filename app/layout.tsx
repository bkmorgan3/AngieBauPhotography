import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import Link from  "next/link";

export const metadata = {
  title: `Angie Bau`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Logo
      </h1>
      <div className="md:text-left text-lg mt-5 md:pl-8">
        
       <Link href={`//`} className="mx-1.5 hover:underline">
              Home
        </Link>
       <Link href={`/commercial/`} className="mx-1.5 hover:underline">
              Commercial
        </Link>
       <Link href={`/personal/`} className="mx-1.5 hover:underline">
              Personal
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      Show Socials
      {/* <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
      <Intro />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
