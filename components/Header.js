import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { SITE_CONFIG } from "../src/config/site";
import { useLanguage } from '../src/contexts/LanguageContext';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'zh-tw', label: '繁' },
  { code: 'zh-cn', label: '简' },
];

function LangDropdown() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 rounded-md border border-stone-500 px-3 py-1.5 text-xs font-semibold text-stone-300 transition hover:bg-white/10"
        aria-label="Select language"
      >
        {current.label}
        <svg className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l4 4 4-4"/></svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1.5 min-w-[5rem] rounded-lg border border-stone-600 bg-[#1f2528] py-1 shadow-xl z-50">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLang(l.code); setOpen(false); }}
              className={`w-full px-4 py-1.5 text-left text-xs font-semibold transition hover:bg-white/10 ${l.code === lang ? 'text-[#f4e7d2]' : 'text-stone-300'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  return (
      <header className="fixed top-0 w-full border-b border-stone-300/60 bg-[#1f2528]/95 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 md:px-6">

          {/* left */}
          <Link href="/" className="flex">
            <img src={`${SITE_CONFIG.basePath}/images/logo.png`} className="h-16 w-auto md:h-20" alt="Lazy Beans Lab logo" />
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
            <LangDropdown />
            <Link href="/contact" className="rounded-md bg-[#f4e7d2] px-4 py-2 text-sm font-semibold text-stone-900 transition hover:bg-[#f0dcc0] md:px-5">
              {t.common.getEstimate}
            </Link>
          </div>

        </div>

        <nav className="mx-auto flex max-w-6xl items-center justify-center gap-4 overflow-x-auto px-4 pb-3 text-sm font-semibold text-stone-200 md:hidden">
          <Link href="/">{t.nav.home}</Link>
          <Link href="/services">{t.nav.services}</Link>
          <Link href="/devices">{t.nav.devices}</Link>
          {SITE_CONFIG.showProjects && <Link href="/cases">{t.nav.cases}</Link>}
          <Link href="/about">{t.nav.about}</Link>
        </nav>
      </header>
  );
}