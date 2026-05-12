import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';
import { useLanguage } from '../src/contexts/LanguageContext';

const posterLayout = [
    { id: 1, shell: 'lg:col-span-3 lg:mt-2', frame: 'rotate-[-1.2deg]' },
    { id: 2, shell: 'lg:col-span-3 lg:mt-14', frame: 'rotate-[1.1deg]' },
    { id: 3, shell: 'lg:col-span-2 lg:-mt-8', frame: 'rotate-[-0.9deg]' },
    { id: 4, shell: 'lg:col-span-2 lg:mt-10', frame: 'rotate-[0.8deg]' },
    { id: 5, shell: 'lg:col-span-2 lg:mt-0', frame: 'rotate-[-0.7deg]' },
    { id: 6, shell: 'lg:col-span-3 lg:mt-6', frame: 'rotate-[1deg]' },
    { id: 7, shell: 'lg:col-span-3 lg:-mt-10', frame: 'rotate-[-1deg]' },
];

export default function Gallery() {
    const { t } = useLanguage();

    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <div className="flex items-end justify-between gap-6 flex-wrap">
                            <div>
                                <h1 className="display-font text-[1.9rem] leading-tight text-stone-900 md:text-[2.2rem]">
                                    {t.gallery.heroTitle}
                                </h1>
                                {t.gallery.heroSub && (
                                    <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">
                                        {t.gallery.heroSub}
                                    </p>
                                )}
                            </div>
                            <Link href="/services" className="rounded-md border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100">
                                {t.common.viewServices}
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pb-24">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6 xl:gap-8">
                        {posterLayout.map((poster, index) => (
                            <article
                                key={`poster-wall-${poster.id}`}
                                className={`group ${poster.shell}`}
                            >
                                <div className={`rounded-[1.55rem] bg-white/96 p-3 shadow-[0_18px_32px_-26px_rgba(24,28,33,0.42)] transition duration-500 group-hover:-translate-y-1 ${poster.frame}`}>
                                    <div className="aspect-[543/724] overflow-hidden rounded-[1.1rem] bg-stone-100">
                                        <img
                                            src={`${SITE_CONFIG.basePath}/images/gallery/posters/${poster.id}.png`}
                                            alt={`${t.devices.viewPoster} ${poster.id}`}
                                            loading={index < 2 ? 'eager' : 'lazy'}
                                            decoding="async"
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
