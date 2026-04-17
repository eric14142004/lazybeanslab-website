import Link from 'next/link';
import { SITE_CONFIG } from "../src/config/site";

export default function Header() {
  return (
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto grid grid-cols-3 items-center px-6 py-6">

          {/* left */}
          <Link href="/" className="flex">
            <img src={`${SITE_CONFIG.basePath}/images/logo.png`} className="h-25 w-auto" />
          </Link>

          {/* center */}
          <nav className="flex justify-center gap-10 text-lg font-medium text-gray-200">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>

          {/* right */}
          <div className="flex justify-end">
            <Link href="/contact" className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium">
              Get Quote
            </Link>
          </div>

        </div>
      </header>
      // <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
      //   <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
      //
      //     <Link href="/" className="flex items-center">
      //       <img
      //           src={`${SITE_CONFIG.basePath}/images/logo.png`}
      //           className="h-25 w-auto object-contain"
      //       />
      //     </Link>
      //
      //     <nav className="hidden md:flex gap-10 text-lg font-medium text-gray-200 items-center">
      //       <Link href="/" className="hover:text-white transition">Home</Link>
      //       <Link href="/services" className="hover:text-white transition">Services</Link>
      //       <Link href="/projects" className="hover:text-white transition">Projects</Link>
      //       <Link href="/about" className="hover:text-white transition">About</Link>
      //     </nav>
      //     <Link
      //         href="/contact"
      //         className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
      //     >
      //       Get Quote
      //     </Link>
      //   </div>
      // </header>
  );
}