import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_26px_80px_-46px_rgba(24,28,33,0.55)] md:p-10">
                        <p className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-1 text-xs tracking-[0.14em] text-stone-700">
                            ABOUT
                        </p>
                        <h1 className="display-font mt-5 text-4xl leading-tight text-stone-900 md:text-5xl">
                            Lazy Beans Smart Home builds systems that stay reliable in real life.
                        </h1>
                        <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">
                            We design around your routine, space, and budget, then create integrations that are simple, stable, and easy to maintain.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Book Consultation
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">MISSION</p>
                            <h2 className="display-font mt-3 text-2xl text-stone-900">Practical, not flashy</h2>
                            <p className="mt-3 text-stone-700">
                                We turn scattered devices into one system your family uses daily.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">APPROACH</p>
                            <h2 className="display-font mt-3 text-2xl text-stone-900">Plan before purchase</h2>
                            <p className="mt-3 text-stone-700">
                                We define goals and upgrade paths first, so every device has a clear role.
                            </p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">PROMISE</p>
                            <h2 className="display-font mt-3 text-2xl text-stone-900">Support after install</h2>
                            <p className="mt-3 text-stone-700">
                                We stay for tuning, troubleshooting, and future upgrades.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="rounded-3xl border border-stone-300 bg-[#1f2528] p-8 text-stone-100 md:p-10">
                        <p className="text-xs tracking-[0.16em] text-stone-300">WHY CLIENTS CHOOSE US</p>
                        <h2 className="display-font mt-3 text-3xl">Clear process. Predictable outcomes.</h2>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <article className="rounded-xl border border-white/20 bg-white/5 p-4">
                                <p className="text-sm font-semibold tracking-[0.12em] text-stone-300">01</p>
                                <p className="mt-2 text-sm text-stone-100">Cross-brand integration, no lock-in.</p>
                            </article>
                            <article className="rounded-xl border border-white/20 bg-white/5 p-4">
                                <p className="text-sm font-semibold tracking-[0.12em] text-stone-300">02</p>
                                <p className="mt-2 text-sm text-stone-100">Budget-aware recommendations with phased rollout.</p>
                            </article>
                            <article className="rounded-xl border border-white/20 bg-white/5 p-4">
                                <p className="text-sm font-semibold tracking-[0.12em] text-stone-300">03</p>
                                <p className="mt-2 text-sm text-stone-100">Clean documentation and handoff.</p>
                            </article>
                            <article className="rounded-xl border border-white/20 bg-white/5 p-4">
                                <p className="text-sm font-semibold tracking-[0.12em] text-stone-300">04</p>
                                <p className="mt-2 text-sm text-stone-100">Post-install optimization and support.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">Ready to design your smart home roadmap?</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-stone-700">
                            Share your goals and setup. We will suggest the highest-impact first step.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Book Consultation
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}