import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from '../src/config/site';
import { useLanguage } from '../src/contexts/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        area: '',
        homeType: '',
        budget: '',
        timeline: '',
        painPoints: '',
    });
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Initialize EmailJS
        emailjs.init(SITE_CONFIG.emailjs.publicKey);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormSuccess('');

        if (!formData.name || !formData.budget || !formData.painPoints) {
            setFormError(t.contact.formError);
            return;
        }

        if (!SITE_CONFIG.emailjs.serviceId || !SITE_CONFIG.emailjs.templateId) {
            setFormError('Email service not configured yet. Update src/config/site.ts with EmailJS credentials.');
            return;
        }

        setFormError('');
        setIsSubmitting(true);

        try {
            await emailjs.send(
                SITE_CONFIG.emailjs.serviceId,
                SITE_CONFIG.emailjs.templateId,
                {
                    to_email: 'lazysmarthome29@gmail.com',
                    from_name: formData.name,
                    from_email: formData.email || 'no-email@provided.com',
                    phone: formData.phone,
                    area: formData.area,
                    homeType: formData.homeType,
                    budget: formData.budget,
                    timeline: formData.timeline,
                    painPoints: formData.painPoints,
                }
            );

            setFormSuccess(t.contact.formSuccess);
            setFormData({
                name: '',
                email: '',
                phone: '',
                area: '',
                homeType: '',
                budget: '',
                timeline: '',
                painPoints: '',
            });
        } catch (error) {
            console.error('EmailJS error:', error);
            setFormError(t.contact.sendError);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="site-bg pt-28 md:pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_26px_80px_-46px_rgba(24,28,33,0.55)] md:p-10">
                        <h1 className="display-font text-4xl leading-tight text-stone-900 md:text-5xl">
                            {t.contact.heroTitle}
                        </h1>
                        <p className="mt-4 max-w-2xl text-stone-700 md:text-lg">
                            {t.contact.heroSub}
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href="#project-brief" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                {t.contact.getMyEstimate}
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                {t.common.viewServices}
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="project-brief" className="max-w-6xl mx-auto px-6 py-4 scroll-mt-32">
                    <div className="rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(24,28,33,0.9)] md:p-8">
                        <h2 className="display-font text-3xl text-stone-900">{t.contact.formTitle}</h2>

                        <form className="mt-6 grid gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.name}
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.namePlaceholder}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.email}
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.emailPlaceholder}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.phone}
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.phonePlaceholder}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.serviceArea}
                                <select
                                    name="area"
                                    value={formData.area}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                >
                                    <option value="">{t.contact.selectArea}</option>
                                    <option value="Greater Vancouver">{t.contact.greaterVancouver}</option>
                                    <option value="Outside Greater Vancouver">{t.contact.outsideVancouver}</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.homeType}
                                <input
                                    name="homeType"
                                    value={formData.homeType}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.homeTypePlaceholder}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700">
                                {t.contact.budget}
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                >
                                    <option value="">{t.contact.selectBudget}</option>
                                    <option value="Under $100">Under $100</option>
                                    <option value="$100 - $500">$100 - $500</option>
                                    <option value="$500 - $2,000">$500 - $2,000</option>
                                    <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                    <option value="$10,000+">$10,000+</option>
                                </select>
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700 md:col-span-2">
                                {t.contact.timeline}
                                <input
                                    name="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.timelinePlaceholder}
                                />
                            </label>

                            <label className="flex flex-col gap-2 text-sm text-stone-700 md:col-span-2">
                                {t.contact.painPoints}
                                <textarea
                                    name="painPoints"
                                    value={formData.painPoints}
                                    onChange={handleChange}
                                    rows={5}
                                    className="rounded-lg border border-stone-300 px-3 py-2 focus:border-stone-600 focus:outline-none"
                                    placeholder={t.contact.painPointsPlaceholder}
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
                                    {isSubmitting ? t.contact.sending : t.contact.sendBtn}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
                            <div>
                                <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.contact.directContact}</h2>
                                <p className="mt-3 max-w-xl text-stone-700 md:text-lg">{t.contact.directContactSub}</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <SocialLinks variant="soft" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}