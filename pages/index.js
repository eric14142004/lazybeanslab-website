import Header from '../components/Header';
import Footer from '../components/Footer';
import { homeServices } from '../data/services';
import { cases } from '../data/cases';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';
import { useLanguage } from '../src/contexts/LanguageContext';

const heroImage = '/images/home/hero.png';
const secondaryImage = '/images/home/hero-secondary.png';

export default function Home() {
    const { t, lang } = useLanguage();
    return (
        <>
            <Header />

            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-12">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <div className="grid items-center gap-6 md:gap-8 md:grid-cols-2">
                            <div>
                                <h1 className="display-font text-4xl leading-tight text-stone-900 md:text-5xl">
                                    {t.home.heroTitle}
                                </h1>
                                <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">
                                    {t.home.heroSub}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/contact" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                        {t.common.getEstimate}
                                    </Link>
                                    <a
                                        href="https://www.youtube.com/@%E6%87%B6%E8%B1%86%E5%AD%90%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-md border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-white/70"
                                    >
                                        <svg className="h-4 w-4 text-red-600 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
                                        {t.home.watchYoutube}
                                    </a>
                                </div>
                            </div>

                            <div className="relative pb-10 md:pb-12">
                                <img
                                    src={`${SITE_CONFIG.basePath}${heroImage}`}
                                    alt="Smart home consulting"
                                    decoding="async"
                                    className="w-full scale-110 object-contain mix-blend-multiply"
                                />
                                <div className="absolute bottom-4 -left-14 hidden w-44 md:block">
                                    <img
                                        src={`${SITE_CONFIG.basePath}${secondaryImage}`}
                                        alt="Smart home installation"
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full object-contain drop-shadow-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex items-end justify-between gap-6 flex-wrap">
                        <div>
                            <h2 className="display-font text-3xl text-stone-900">{t.home.servicesTitle}</h2>
                            <p className="mt-2 text-sm text-stone-700">{t.home.servicesSub}</p>
                        </div>
                        <Link href="/services" className="text-sm font-semibold tracking-wide text-stone-700 underline-offset-4 hover:underline">
                            {t.home.viewAll}
                        </Link>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {homeServices.slice(0, 4).map((service) => (
                            <Link
                                key={service.id}
                                href={`/services#${service.id}`}
                                className="group overflow-hidden rounded-2xl border border-stone-300 bg-white/95 shadow-[0_10px_24px_-20px_rgba(30,35,40,0.65)] transition hover:-translate-y-0.5"
                            >
                                <div className="aspect-[5/3] overflow-hidden bg-stone-100">
                                    <img
                                        src={`${SITE_CONFIG.basePath}${service.images[0]}`}
                                        alt={t.services.serviceDetails[service.id]?.name ?? service.id}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-stone-900">{t.services.serviceDetails[service.id]?.name}</h3>
                                    <p className="mt-2 text-sm text-stone-700">{t.services.serviceDetails[service.id]?.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="rounded-3xl border border-stone-300 bg-[#1f2528] p-7 text-stone-100 md:p-10">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-[0.18em] text-stone-300">{t.home.serviceAreaLabel}</p>
                                <h2 className="display-font mt-2 text-3xl">{t.home.whereWeWork}</h2>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">{t.home.greaterVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-emerald-200">{t.home.onSiteService}</p>
                                <p className="mt-3 text-sm text-stone-200">{t.home.onSiteDesc}</p>
                            </article>

                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">{t.home.outsideVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-sky-200">{t.home.remotePlanning}</p>
                                <p className="mt-3 text-sm text-stone-200">{t.home.remoteDesc}</p>
                            </article>
                        </div>
                    </div>
                </section>

                {SITE_CONFIG.showProjects && (
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <h2 className="display-font text-3xl text-stone-900">{t.home.casesTitle}</h2>
                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            {cases.map((project) => <ProjectCard key={project.id} project={project} />)}
                        </div>
                        <div className="mt-8 flex justify-end">
                            <Link href="/cases" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">{t.home.seeAllCases}</Link>
                        </div>
                    </section>
                )}

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="rounded-3xl border border-stone-300 bg-white p-6 text-center md:p-8">
                        <p className="text-sm text-stone-700">{t.home.trustedBy}</p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.home.ctaTitle}</h2>
                        <p className="mx-auto mt-3 max-w-xl text-stone-700">{t.home.ctaSub}</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                {t.common.getEstimate}
                            </Link>
                            <Link href="/about" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                {t.common.aboutUs}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
