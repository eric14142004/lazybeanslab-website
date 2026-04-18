import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { SITE_CONFIG } from '../src/config/site';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        homeType: '',
        budget: '',
        timeline: '',
        painPoints: '',
    });
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormSuccess('');

        if (!formData.name || !formData.budget || !formData.painPoints) {
            setFormError('Please fill in Name, Budget Range, and Top Pain Points.');
            return;
        }

        if (!SITE_CONFIG.contactFormEndpoint) {
            setFormError('Form endpoint not configured yet. Add contactFormEndpoint in src/config/site.ts first.');
            return;
        }

        setFormError('');
        setIsSubmitting(true);

        try {
            const response = await fetch(SITE_CONFIG.contactFormEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    subject: `Lead Inquiry - ${formData.name}`,
                    source: 'lazybeanslab-website',
                    ...formData,
                }),
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            setFormSuccess('Thanks. Your project brief was sent successfully. We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                location: '',
                homeType: '',
                budget: '',
                timeline: '',
                painPoints: '',
            });
        } catch {
            setFormError('Unable to send right now. Please try again or use email/phone above.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_26px_80px_-46px_rgba(24,28,33,0.55)] md:p-10">
                        <p className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-1 text-xs tracking-[0.14em] text-stone-700">
                            CONTACT
                        </p>
                        <h1 className="display-font mt-5 text-4xl leading-tight text-stone-900 md:text-5xl">
                            Let&apos;s map your smart home plan.
                        </h1>
                        <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">
                            Share your home type, key pain points, and budget range. We&apos;ll suggest a realistic roadmap and implementation sequence.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href="#project-brief" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Start Project Brief
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
                            <p className="text-xs tracking-[0.12em] text-stone-500">EMAIL</p>
                            <a className="mt-2 block text-lg font-semibold text-stone-900 underline-offset-4 hover:underline" href="mailto:lazysmarthome29@gmail.com">
                                lazysmarthome29@gmail.com
                            </a>
                            <p className="mt-3 text-sm text-stone-700">Best for project details, floor plans, and reference photos.</p>
                        </article>

                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs tracking-[0.12em] text-stone-500">PHONE</p>
                            <a className="mt-2 block text-lg font-semibold text-stone-900 underline-offset-4 hover:underline" href="tel:+17789988857">
                                +1 778 998 8857
                            </a>
                            <p className="mt-3 text-sm text-stone-700">Best for quick consultation and scheduling discussion calls.</p>
                        </article>

                        <article className="rounded-2xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)]">
                            <p className="text-xs tracking-[0.12em] text-stone-500">YOUTUBE</p>
                            <a
                                className="mt-2 block text-lg font-semibold text-stone-900 underline-offset-4 hover:underline"
                                href="https://www.youtube.com/channel/UCqAmwbBTyUhrV3g_w7PW9Gg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Lazy Beans Smart Home
                            </a>
                            <p className="mt-3 text-sm text-stone-700">See walkthroughs and practical smart home implementation examples.</p>
                        </article>
                    </div>
                </section>

                <section id="project-brief" className="max-w-6xl mx-auto px-6 py-4 scroll-mt-32">
                    <div className="rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(24,28,33,0.9)] md:p-8">
                        <div className="flex flex-wrap items-end justify-between gap-4">
                            <h2 className="display-font text-3xl text-stone-900">Start Your Project Brief</h2>
                            <p className="text-sm text-stone-600">Fields marked with * are required.</p>
                        </div>

                        <form className="mt-6 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Full Name *
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="Your name"
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Email
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="you@example.com"
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Phone
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="+1 ..."
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Location / City
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="City, region"
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Home Type / Size
                                <input
                                    name="homeType"
                                    value={formData.homeType}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="Condo 900 sq ft, townhouse, etc."
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                Budget Range *
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                >
                                    <option value="">Select a range</option>
                                    <option value="Under $2,000">Under $2,000</option>
                                    <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000+">$10,000+</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700 md:col-span-2">
                                Desired Timeline
                                <input
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="ASAP, next month, within 6 months..."
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700 md:col-span-2">
                                Top Pain Points / Goals *
                                <textarea
                                    name="painPoints"
                                    value={formData.painPoints}
                                    onChange={handleChange}
                                    rows={5}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder="What is frustrating now, and what do you want your smart home to do better?"
                                />
                            </label>

                            {formError && (
                                <p className="md:col-span-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                    {formError}
                                </p>
                            )}

                            {formSuccess && (
                                <p className="md:col-span-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                                    {formSuccess}
                                </p>
                            )}

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-md bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-stone-700"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Project Brief'}
                                </button>
                                <p className="mt-2 text-xs text-stone-500">
                                    This form sends your brief directly without opening a mail app.
                                </p>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-[#1f2528] p-8 text-stone-100 md:p-10">
                        <p className="text-xs tracking-[0.16em] text-stone-300">BEFORE YOU SEND</p>
                        <h2 className="display-font mt-3 text-3xl">What to include in your first message</h2>
                        <ul className="mt-6 grid gap-4 md:grid-cols-2">
                            <li className="rounded-xl border border-white/20 bg-white/5 p-4">Home type and size</li>
                            <li className="rounded-xl border border-white/20 bg-white/5 p-4">Current devices/platforms you already use</li>
                            <li className="rounded-xl border border-white/20 bg-white/5 p-4">Top 3 frustrations you want solved</li>
                            <li className="rounded-xl border border-white/20 bg-white/5 p-4">Desired timeline and budget range</li>
                        </ul>

                        <div className="mt-8">
                            <Link href="/services" className="inline-flex rounded-md bg-[#f4e7d2] px-6 py-3 font-semibold text-stone-900 transition hover:bg-[#f0dcc0]">
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