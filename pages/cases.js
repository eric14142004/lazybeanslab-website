import Header from '../components/Header';
import Footer from '../components/Footer';
import { cases } from '../data/cases';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';
import { useState } from 'react';

const caseContent = {
    apartment: {
        desc: 'Client wanted a fully smart home. We handled planning, install, and training—done in one go.',
        color: 'emerald',
        quote: '"Everything just works. The team explained every step and made sure I could use all the features. Highly recommended!"',
        location: '— Vancouver, BC',
    },
    'shanghai-rental': {
        desc: 'Shanghai rental, new baby on the way. We planned devices, install spots, and automations—fully remote, budget-friendly.',
        color: 'sky',
        quote: '"Clear plan, easy setup, works great for our family."',
        location: '— Shanghai, China',
    },
    renovation: {
        desc: 'Devices kept failing. We fixed it on-site and showed the client how to avoid future issues.',
        color: 'amber',
        quote: "\"They fixed what three other services couldn't. Now everything is stable and I know what to avoid next time.\"",
        location: '— Richmond, BC',
    },
};

const colorMap = {
    emerald: { border: 'border-emerald-200', bg: 'bg-emerald-50', label: 'text-emerald-700' },
    sky:     { border: 'border-sky-200',     bg: 'bg-sky-50',     label: 'text-sky-700' },
    amber:   { border: 'border-amber-200',   bg: 'bg-amber-50',   label: 'text-amber-700' },
};

function CaseCard({ project }) {
    const [mainIdx, setMainIdx] = useState(0);
    const content = caseContent[project.id];
    const colors = colorMap[content.color];
    return (
        <div className="rounded-2xl border border-stone-300 bg-white p-6 flex flex-col shadow-[0_10px_24px_-20px_rgba(30,35,40,0.10)]">
            <img
                src={project.images[mainIdx]}
                alt={project.name}
                className="w-full h-48 rounded-xl border border-stone-200 object-cover mb-3 transition-all duration-300"
            />
            {project.images.length > 1 && (
                <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                    {project.images.map((img, i) => (
                        <button
                            key={img}
                            className={`border-2 rounded-lg w-14 h-10 flex-shrink-0 overflow-hidden ${mainIdx === i ? 'border-stone-900' : 'border-stone-200'}`}
                            style={{ outline: 'none' }}
                            onClick={() => setMainIdx(i)}
                            aria-label={`Show image ${i + 1}`}
                        >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
            <h2 className="display-font text-xl text-stone-900 mb-1">{project.name}</h2>
            <p className="mt-2 text-stone-700 text-sm">{content.desc}</p>
            <div className={`mt-4 rounded-xl border ${colors.border} ${colors.bg} p-3`}>
                <p className={`text-xs font-semibold ${colors.label}`}>CLIENT FEEDBACK</p>
                <p className="mt-1 text-xs text-stone-900">{content.quote}</p>
                <p className="mt-1 text-xs text-stone-500">{content.location}</p>
            </div>
        </div>
    );
}

export default function Cases() {
    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 md:p-10">
                        <h1 className="display-font text-4xl text-stone-900">Client Case Studies</h1>
                        <p className="mt-3 max-w-2xl text-stone-700">On-site, remote, and troubleshooting projects — each with real client feedback.</p>
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
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">Want results like these?</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-stone-700">Tell us your goal and budget and we will propose a plan tailored to your home.</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Get Free Cost Estimate
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                Compare Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
