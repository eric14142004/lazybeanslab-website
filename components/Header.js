import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Lazy Beans Lab</h1>
        <nav>
          <Link href="/">Home</Link> |{' '}
          <Link href="/about">About</Link> |{' '}
          <Link href="/services">Services</Link> |{' '}
          <Link href="/projects">Projects</Link> |{' '}
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}