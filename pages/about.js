import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../src/config/site';
import { useLanguage } from '../src/contexts/LanguageContext';

export default function About() {
    const { t } = useLanguage();
    const [latestVideoId, setLatestVideoId] = useState(null);

    useEffect(() => {
        const RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCqAmwbBTyUhrV3g_w7PW9Gg';
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`)
            .then(r => r.json())
            .then(data => {
                const link = data?.items?.[0]?.link ?? '';
                const match = link.match(/v=([\w-]+)/);
                if (match) setLatestVideoId(match[1]);
            })
            .catch(() => {});
    }, []);

    return (
        <> 
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.16em] text-stone-500">{t.about.label}</p>
                                <h1 className="display-font mt-3 text-4xl leading-tight text-stone-900 md:text-5xl md:whitespace-nowrap">
                                    {t.about.heroTitle}
                                </h1>
                                <p className="mt-4 max-w-2xl text-stone-600 md:text-lg">
                                    {t.about.heroSub}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/services" className="rounded-md border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100">
                                        {t.common.compareServices}
                                    </Link>
                                </div>
                            </div>

                            <aside className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                <Link href="/contact" className="rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:bg-stone-100 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.getStartedLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-stone-900">{t.common.getEstimate} →</p>
                                </Link>
                                <Link href="/services" className="rounded-2xl border border-stone-200 bg-stone-50 p-4 transition hover:bg-stone-100 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.deliverableLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-stone-900">{t.about.deliverable}</p>
                                </Link>
                                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">{t.about.deliveryModeLabel}</p>
                                    <p className="mt-2 text-lg font-semibold text-stone-900">{t.about.deliveryMode}</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-700 bg-[#1f2528] p-6">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-400">{t.about.whoWeHelpLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-white">{t.about.whoWeHelpTitle}</h2>
                            <p className="mt-2 text-stone-300">{t.about.whoWeHelpDesc}</p>
                        </article>
                        <article className="rounded-2xl border border-stone-700 bg-[#1f2528] p-6">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-400">{t.about.whatWeDoLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-white">{t.about.whatWeDoTitle}</h2>
                            <p className="mt-2 text-stone-300">{t.about.whatWeDoDesc}</p>
                        </article>
                        <article className="rounded-2xl border border-stone-700 bg-[#1f2528] p-6">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-400">{t.about.whyItWorksLabel}</p>
                            <h2 className="display-font mt-2 text-2xl text-white">{t.about.whyItWorksTitle}</h2>
                            <p className="mt-2 text-stone-300">{t.about.whyItWorksDesc}</p>
                            <Link href="/devices" className="mt-4 inline-flex rounded-md border border-stone-500 px-4 py-2 text-xs font-semibold text-stone-100 transition hover:bg-white/10">
                                {t.about.seeSupportedDevices}
                            </Link>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="rounded-3xl border border-stone-300 bg-white p-7 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-10">
                        <div>
                            <p className="text-xs tracking-[0.18em] text-stone-500">{t.about.serviceAreaLabel}</p>
                            <h2 className="display-font mt-2 text-3xl text-stone-900">{t.about.whereWeWork}</h2>
                        </div>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                                <h3 className="text-xl font-semibold text-stone-900">{t.about.greaterVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-emerald-600">{t.about.onSiteService}</p>
                                <p className="mt-3 text-sm text-stone-600">{t.about.onSiteDesc}</p>
                            </article>
                            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                                <h3 className="text-xl font-semibold text-stone-900">{t.about.outsideVancouver}</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-sky-600">{t.about.remotePlanning}</p>
                                <p className="mt-3 text-sm text-stone-600">{t.about.remoteDesc}</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-6">
                    <div className="rounded-3xl border border-stone-700 bg-[#1f2528] overflow-hidden">
                        <div className="grid md:grid-cols-2">
                            {/* YouTube */}
                            <div className="flex flex-col gap-4 p-8 md:p-10 border-b border-stone-700 md:border-b-0 md:border-r">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-semibold tracking-[0.18em] text-red-400">{t.about.youtubeLabel}</p>
                                    <a
                                        href="https://www.youtube.com/@%E6%87%B6%E8%B1%86%E5%AD%90%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 transition hover:text-red-400"
                                    >
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
                                        {t.about.watchYoutube} →
                                    </a>
                                </div>
                                <div className="relative w-full overflow-hidden rounded-xl bg-black" style={{paddingBottom: '56.25%'}}>
                                    {latestVideoId ? (
                                        <iframe
                                            src={`https://www.youtube.com/embed/${latestVideoId}`}
                                            title="Latest YouTube video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            className="absolute inset-0 h-full w-full border-0"
                                        />
                                    ) : (
                                        <a
                                            href="https://www.youtube.com/@%E6%87%B6%E8%B1%86%E5%AD%90%E6%99%BA%E8%83%BD%E5%AE%B6%E5%B1%85"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-stone-400 hover:text-white transition"
                                        >
                                            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
                                            <span className="text-sm font-semibold">前往 YouTube 頻道</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                            {/* Contact */}
                            <div className="flex flex-col gap-6 p-8 md:p-10">
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.18em] text-stone-400">{t.about.contactLabel}</p>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <a href="mailto:lazysmarthome29@gmail.com" className="flex items-center gap-3 rounded-xl border border-stone-600 bg-white/5 px-5 py-3.5 text-sm font-semibold text-stone-200 transition hover:bg-white/10">
                                        <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                                        lazysmarthome29@gmail.com
                                    </a>
                                    <a href="tel:+17789988857" className="flex items-center gap-3 rounded-xl border border-stone-600 bg-white/5 px-5 py-3.5 text-sm font-semibold text-stone-200 transition hover:bg-white/10">
                                        <svg className="h-4 w-4 shrink-0 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                                        +1 778 998 8857
                                    </a>
                                    <span className="group relative flex items-center gap-3 rounded-xl border border-stone-600 bg-white/5 px-5 py-3.5 text-sm font-semibold text-stone-200 cursor-default select-none transition hover:bg-white/10">
                                        <svg className="h-4 w-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                                        WeChat: LazyBeansSmartHome
                                        <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                            <img src={`${SITE_CONFIG.basePath}/images/wechat-qr.png`} alt="WeChat QR Code" className="w-40 rounded-xl border border-stone-600 shadow-xl" />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-6 pb-20">
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