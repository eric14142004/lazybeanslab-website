import Link from 'next/link';
import { SITE_CONFIG } from "../src/config/site";
import { useLanguage } from '../src/contexts/LanguageContext';

export default function Header() {
  const { t, lang, toggle } = useLanguage();
  return (
      <header className="fixed top-0 w-full border-b border-stone-300/60 bg-[#1f2528]/95 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">

          {/* left */}
          <Link href="/" className="flex">
            <img src={`${SITE_CONFIG.basePath}/images/logo.png`} className="h-12 w-auto md:h-14" alt="Lazy Beans Lab logo" />
          </Link>

          {/* center */}
          <nav className="hidden md:flex justify-center gap-8 text-base font-semibold text-stone-200">
            <Link href="/">{t.nav.home}</Link>
            <Link href="/services">{t.nav.services}</Link>
            <Link href="/devices">{t.nav.devices}</Link>
            {SITE_CONFIG.showProjects && <Link href="/cases">{t.nav.cases}</Link>}
            <Link href="/about">{t.nav.about}</Link>
          </nav>

          {/* right */}
          <div className="flex items-center gap-3 justify-end">
            <button
              onClick={toggle}
              className="rounded-md border border-stone-500 px-3 py-1.5 text-xs font-semibold text-stone-300 transition hover:bg-white/10"
              aria-label="Toggle language"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
            <Link href="/contact" className="rounded-md bg-[#f4e7d2] px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-[#f0dcc0] md:px-5">
              {t.common.getEstimate}
            </Link>
          </div>

        </div>

        <nav className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto px-4 pb-3 text-sm font-semibold text-stone-200 md:hidden">
          <Link href="/">{t.nav.home}</Link>
          <Link href="/services">{t.nav.services}</Link>
          <Link href="/devices">{t.nav.devices}</Link>
          {SITE_CONFIG.showProjects && <Link href="/cases">{t.nav.cases}</Link>}
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
          <button
            onClick={toggle}
            className="ml-auto shrink-0 rounded-md border border-stone-500 px-2.5 py-1 text-xs font-semibold text-stone-300 transition hover:bg-white/10"
            aria-label="Toggle language"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </nav>
      </header>
  );
}