import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCases } from '../data/cases';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '../src/contexts/LanguageContext';

const caseColor = {
    apartment: 'emerald',
    'shanghai-rental': 'sky',
    renovation: 'amber',
};

const colorMap = {
    emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50', label: 'text-emerald-700' },
    sky:     { border: 'border-sky-200',     bg: 'bg-sky-50',     label: 'text-sky-700' },
    amber:   { border: 'border-amber-200',   bg: 'bg-amber-50',   label: 'text-amber-700' },
};

function CaseCard({ project }) {
    const [mainIdx, setMainIdx] = useState(0);
    const [zoomIdx, setZoomIdx] = useState(null);
    const { t } = useLanguage();
    const currentImage = project.images[mainIdx];
    const zoomSrc = zoomIdx === null ? null : project.images[zoomIdx]?.src ?? null;
    const canZoom = Boolean(currentImage?.zoomable);
    const color = caseColor[project.id];
    const colors = colorMap[color];
    const detail = t.cases.caseDetails[project.id];

    useEffect(() => {
        if (zoomIdx === null) {
            return;
        }

        if (!project.images[zoomIdx]) {
            setZoomIdx(null);
        }
    }, [project.images, zoomIdx]);

    const openZoom = () => {
        if (!canZoom) {
            return;
        }
        setZoomIdx(mainIdx);
    };

    const closeZoom = () => setZoomIdx(null);
    return (
        <div className="rounded-2xl border border-stone-300 bg-white p-6 flex flex-col shadow-[0_10px_24px_-20px_rgba(30,35,40,0.10)]">
            <button
                type="button"
                onClick={openZoom}
                disabled={!canZoom}
                className={`${canZoom ? 'group relative cursor-zoom-in' : 'cursor-default'} rounded-xl`}
                aria-label={canZoom ? 'Open enlarged image' : 'Preview image'}
            >
                <img
                    src={currentImage.src}
                    alt={detail.name}
                    className={`w-full h-48 rounded-xl mb-3 transition-all duration-300 ${canZoom ? 'bg-stone-100 object-contain' : 'object-cover'}`}
                />
                {canZoom && (
                    <span className="absolute bottom-5 right-3 inline-flex items-center justify-center rounded-full bg-black/70 p-2 text-white transition group-hover:bg-black/80">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="11" cy="11" r="7" />
                            <path d="M21 21l-4.35-4.35" />
                            <path d="M11 8v6" />
                            <path d="M8 11h6" />
                        </svg>
                    </span>
                )}
            </button>
            {project.images.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {project.images.map((img, i) => (
                        <button
                            key={img.src}
                            className={`border-2 rounded-lg w-14 h-10 flex-shrink-0 overflow-hidden ${mainIdx === i ? 'border-stone-900' : 'border-stone-200'}`}
                            style={{ outline: 'none' }}
                            onClick={() => setMainIdx(i)}
                            aria-label={`Show image ${i + 1}`}
                        >
                            <img
                                src={img.src}
                                alt="thumb"
                                className={`w-full h-full ${img.zoomable ? 'bg-stone-100 object-contain' : 'object-cover'}`}
                            />
                        </button>
                    ))}
                </div>
            )}
            <h2 className="display-font text-xl text-stone-900 mb-1">{detail.name}</h2>
            <p className="mt-2 text-stone-700 text-sm">{detail.desc}</p>
            <div className={`mt-4 rounded-xl border ${colors.border} ${colors.bg} p-3`}>
                <p className={`text-xs font-semibold ${colors.label}`}>{t.cases.clientFeedback}</p>
                <p className="mt-1 text-xs text-stone-900">{detail.quote}</p>
                <p className="mt-1 text-xs text-stone-500">{detail.location}</p>
            </div>

            {zoomSrc && (
                <button
                    type="button"
                    onClick={closeZoom}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    aria-label="Close enlarged image"
                >
                    <img
                        src={zoomSrc}
                        alt={detail.name}
                        className="max-h-[92vh] max-w-[92vw] rounded-xl bg-stone-100 object-contain"
                    />
                </button>
            )}
        </div>
    );
}

export default function Cases() {
    const { t, lang } = useLanguage();
    const cases = getCases(lang);
    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 md:p-10">
                        <div className="flex items-end justify-between gap-6 flex-wrap">
                            <div>
                                <h1 className="display-font text-[1.9rem] leading-tight text-stone-900 md:text-[2.2rem]">{t.cases.heroTitle}</h1>
                                <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">{t.cases.heroSub}</p>
                            </div>
                            <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                {t.common.viewServices}
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid gap-8 md:grid-cols-3">
                        {cases.map((project) => (
                            <CaseCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.cases.ctaTitle}</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-stone-700">{t.cases.ctaSub}</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                {t.common.getEstimate}
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                {t.common.viewServices}
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
