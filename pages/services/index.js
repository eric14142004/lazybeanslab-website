import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesSection from '../../components/ServicesSection';
import Link from 'next/link';
import { useLanguage } from '../../src/contexts/LanguageContext';

export default function Services() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <ServicesSection />

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe9db] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900">{t.services.ctaTitle}</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-stone-700">
                            {t.services.ctaSub}
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                {t.common.getEstimate}
                            </Link>
                            <Link href="/about" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
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