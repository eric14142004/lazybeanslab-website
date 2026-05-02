import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useLanguage } from '../src/contexts/LanguageContext';

export default function About() {
    const { t } = useLanguage();
    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-800 bg-[linear-gradient(145deg,#141b1f_0%,#202a2f_65%,#2a343a_100%)] p-6 text-stone-100 shadow-[0_30px_80px_-44px_rgba(15,20,25,0.95)] md:p-10">
                        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.16em] text-stone-300">{t.about.label}</p>
                                <h1 className="display-font mt-3 text-4xl leading-tight text-white md:text-5xl">
                                    {t.about.heroTitle}
                                </h1>
                                <p className="mt-4 max-w-2xl text-stone-300 md:text-lg">
                                    {t.about.heroSub}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/10">
                                        {t.common.compareServices}
                                    </Link>
                                </div>
                            </div>

                            <aside className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px] transition hover:bg-white/20 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">{t.about.getStartedLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{t.about.getEstimate}</p>
                                </Link>
                                <Link href="/services" className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px] transition hover:bg-white/20 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">{t.about.deliverableLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{t.about.deliverable}</p>
                                </Link>
                                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px]">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">{t.about.deliveryModeLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{t.about.deliveryMode}</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.whoWeHelpLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">{t.about.whoWeHelpTitle}</h2>
                            <p className="mt-2 text-stone-700">{t.about.whoWeHelpDesc}</p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.whatWeDoLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">{t.about.whatWeDoTitle}</h2>
                            <p className="mt-2 text-stone-700">{t.about.whatWeDoDesc}</p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.whyItWorksLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">{t.about.whyItWorksTitle}</h2>
                            <p className="mt-2 text-stone-700">{t.about.whyItWorksDesc}</p>
                            <Link href="/devices" className="mt-4 inline-flex rounded-md bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700">
                                {t.about.seeSupportedDevices}
                            </Link>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="rounded-3xl border border-stone-300 bg-[#1f2528] p-7 text-stone-100 md:p-10">
                        <div>
                            <p className="text-xs tracking-[0.18em] text-stone-300">{t.about.serviceAreaLabel}</p>
                            <h2 className="display-font mt-2 text-3xl">{t.about.whereWeWork}</h2>
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">{t.about.greaterVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-emerald-200">{t.about.onSiteService}</p>
                                <p className="mt-3 text-sm text-stone-200">{t.about.onSiteDesc}</p>
                            </article>
                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">{t.about.outsideVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-sky-200">{t.about.remotePlanning}</p>
                                <p className="mt-3 text-sm text-stone-200">{t.about.remoteDesc}</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.about.ctaTitle}</h2>
                        <p className="mx-auto mt-3 max-w-4xl text-stone-700">
                            {t.about.ctaSub}
                        </p>
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