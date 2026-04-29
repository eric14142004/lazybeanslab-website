import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServicesSection from '../../components/ServicesSection';
import Link from 'next/link';

export default function Services() {
    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <ServicesSection />

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#efe9db] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900">Need Help Deciding Where To Start?</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-stone-700">
                            Tell us your current setup and goals. We&apos;ll suggest the highest-impact first step.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Get Free Cost Estimate
                            </Link>
                            <Link href="/about" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
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