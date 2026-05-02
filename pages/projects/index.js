import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';
import Link from 'next/link';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Projects() {
    const { t, lang } = useLanguage();
    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 md:p-10">
                        <h1 className="display-font text-4xl text-stone-900">{t.projects.heroTitle}</h1>
                        <p className="mt-3 max-w-2xl text-stone-700">{t.projects.heroSub}</p>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        {projects.map((p) => (
                            <div key={p.id} className="rounded-2xl border border-stone-300 bg-white p-4 shadow-[0_10px_20px_-12px_rgba(30,35,40,0.6)]">
                                <ProjectCard project={p} />
                                <p className="mt-3 text-sm text-stone-700">{p.excerpt || ''}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.projects.ctaTitle}</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-stone-700">{t.projects.ctaSub}</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                {t.common.getEstimate}
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                {t.common.compareServices}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}