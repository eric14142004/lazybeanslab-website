import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-800 bg-[linear-gradient(145deg,#141b1f_0%,#202a2f_65%,#2a343a_100%)] p-6 text-stone-100 shadow-[0_30px_80px_-44px_rgba(15,20,25,0.95)] md:p-10">
                        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.16em] text-stone-300">ABOUT LAZY BEANS SMART HOME</p>
                                <h1 className="display-font mt-3 text-4xl leading-tight text-white md:text-5xl">
                                    We turn smart home ideas into clear, budget-fit plans.
                                </h1>
                                <p className="mt-4 max-w-2xl text-stone-300 md:text-lg">
                                    Homeowners, renters, or first-time users. Full-home setup or just a few automations.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-white/10">
                                        Compare Services
                                    </Link>
                                </div>
                            </div>

                            <aside className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                <Link href="/contact" className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px] transition hover:bg-white/20 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">GET STARTED</p>
                                    <p className="mt-2 text-lg font-semibold text-white">Get Free Cost Estimate →</p>
                                </Link>
                                <Link href="/services" className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px] transition hover:bg-white/20 block">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">DELIVERABLE</p>
                                    <p className="mt-2 text-lg font-semibold text-white">What to Buy. How to Set It Up. →</p>
                                </Link>
                                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-[1px]">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">DELIVERY MODE</p>
                                    <p className="mt-2 text-lg font-semibold text-white">On-site or Remote</p>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-4 md:grid-cols-3">
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">WHO WE HELP</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">Homeowners and renters</h2>
                            <p className="mt-2 text-stone-700">From full-home design to just a few smart devices. Even small setups are welcome.</p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">WHAT WE DO</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">Design, recommendation, budget fit</h2>
                            <p className="mt-2 text-stone-700">System design, purchase guidance, and device selection within budget.</p>
                        </article>
                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">WHY IT WORKS</p>
                            <h2 className="display-font mt-2 text-2xl text-stone-900">No random device buying</h2>
                            <p className="mt-2 text-stone-700">Clear scope first, then purchase and implementation.</p>
                            <Link href="/ecosystems" className="mt-4 inline-flex rounded-md bg-stone-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-stone-700">
                                See supported devices
                            </Link>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="grid gap-4 md:grid-cols-2">
                        <article className="rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-7">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">ON-SITE MODE</p>
                            <h2 className="display-font mt-2 text-3xl text-stone-900">Local, hands-on execution</h2>
                            <p className="mt-3 text-stone-700">Site walkthrough, non-electrical installation support, and on-site automation setup.</p>
                        </article>
                        <article className="rounded-3xl border border-stone-300 bg-[#1f2528] p-6 text-stone-100 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-7">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">REMOTE MODE</p>
                            <h2 className="display-font mt-2 text-3xl text-white">Remote planning and setup</h2>
                            <p className="mt-3 text-stone-300">Guided device setup, remote automation configuration, and verification without on-site visit.</p>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">Start with a free cost estimate.</h2>
                        <p className="mx-auto mt-3 max-w-4xl text-stone-700">
                            Send your goals and budget. We reply with scope, delivery mode, and estimated cost range.
                        </p>
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