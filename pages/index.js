import Header from '../components/Header';
import Footer from '../components/Footer';
import { homeServices, services } from '../data/services';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';

export default function Home() {
    const heroImage = services[0]?.images?.[0] || '/images/services/consultation-1.jpg';
    const secondaryImage = services[1]?.images?.[0] || '/images/services/installation-1.jpg';
    return (
        <>
            <Header />

            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-12">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h1 className="display-font text-4xl leading-tight text-stone-900 md:text-6xl">
                                    Smart Home, done right.
                                </h1>
                                <p className="mt-4 max-w-xl text-base text-stone-700 md:text-lg">
                                    Full-home consulting and troubleshooting.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                        View Services
                                    </Link>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="overflow-hidden rounded-2xl border border-stone-300 bg-stone-200">
                                    <img
                                        src={`${SITE_CONFIG.basePath}${heroImage}`}
                                        alt="Smart home consulting"
                                        decoding="async"
                                        className="h-[320px] w-full object-cover md:h-[380px]"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 hidden w-40 overflow-hidden rounded-xl border border-stone-300 bg-white shadow-lg md:block">
                                    <img
                                        src={`${SITE_CONFIG.basePath}${secondaryImage}`}
                                        alt="Smart home installation"
                                        loading="lazy"
                                        decoding="async"
                                        className="h-24 w-full object-cover"
                                    />
                                    <p className="px-3 py-2 text-xs font-semibold text-stone-700">Small fixes to full setup</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="flex items-end justify-between gap-6 flex-wrap">
                        <div>
                            <h2 className="display-font text-3xl text-stone-900">Services</h2>
                            <p className="mt-2 text-sm text-stone-700">Planning, installation, troubleshooting, automation, and after-sales support.</p>
                        </div>
                        <Link href="/services" className="text-sm font-semibold tracking-wide text-stone-700 underline-offset-4 hover:underline">
                            View All
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
                                        alt={service.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-stone-900">{service.name}</h3>
                                    <p className="mt-2 text-sm text-stone-700">{service.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-10">
                    <div className="rounded-3xl border border-stone-300 bg-[#1f2528] p-7 text-stone-100 md:p-10">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <div>
                                <p className="text-xs tracking-[0.18em] text-stone-300">SERVICE AREA</p>
                                <h2 className="display-font mt-2 text-3xl">Where We Work</h2>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">Greater Vancouver</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-emerald-200">ON-SITE SERVICE</p>
                                <p className="mt-3 text-sm text-stone-200">In-person consultation and setup.</p>
                            </article>

                            <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                                <h3 className="text-xl font-semibold">Outside Greater Vancouver</h3>
                                <p className="mt-1 text-xs font-semibold tracking-[0.14em] text-sky-200">REMOTE PLANNING</p>
                                <p className="mt-3 text-sm text-stone-200">Online planning and implementation roadmap.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {SITE_CONFIG.showProjects && (
                    <section className="max-w-6xl mx-auto px-6 py-12">
                        <h2 className="display-font text-3xl text-stone-900">Recent Work</h2>
                        <div className="mt-8 grid md:grid-cols-3 gap-6">
                            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
                        </div>
                    </section>
                )}

                <section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">Ready to start?</h2>
                        <p className="mx-auto mt-3 max-w-xl text-stone-700">Tell us your goal and budget.</p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Get Free Cost Estimate
                            </Link>
                            <Link href="/about" className="rounded-md border border-stone-500 px-7 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                About Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
