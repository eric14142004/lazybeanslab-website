import Link from 'next/link';
import { SITE_CONFIG } from "../src/config/site";

export default function Header() {
  return (
      <header className="fixed top-0 w-full border-b border-stone-300/60 bg-[#1f2528]/95 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">

          {/* left */}
          <Link href="/" className="flex">
            <img src={`${SITE_CONFIG.basePath}/images/logo.png`} className="h-12 w-auto md:h-14" alt="Lazy Beans Lab logo" />
          </Link>

          {/* center */}
          <nav className="hidden md:flex justify-center gap-8 text-base font-semibold text-stone-200">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/ecosystems">Devices & Systems</Link>
            {SITE_CONFIG.showProjects && <Link href="/projects">Projects</Link>}
            <Link href="/about">About</Link>
          </nav>

          {/* right */}
          <div className="flex justify-end">
            <Link href="/contact" className="rounded-md bg-[#f4e7d2] px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-[#f0dcc0] md:px-5">
              Get Quote
            </Link>
          </div>

        </div>

        <nav className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 pb-3 text-sm font-semibold text-stone-200 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/ecosystems">Devices & Systems</Link>
          {SITE_CONFIG.showProjects && <Link href="/projects">Projects</Link>}
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
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