import Link from 'next/link';

export default function Header() {
  return (
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-semibold text-lg">Lazy Beans Lab</h1>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
          </nav>
          <Link
              href="/contact"
              className="bg-black text-white px-4 py-2 rounded-md text-sm hover:opacity-80 transition"
          >
            Get Quote
          </Link>
        </div>
      </header>
  );
}