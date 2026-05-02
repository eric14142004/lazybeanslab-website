import Header from '../components/Header';
import Footer from '../components/Footer';
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
                    <div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">{t.contact.directContact}</h2>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <a href="mailto:lazysmarthome29@gmail.com" className="flex items-center gap-2 rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                                lazysmarthome29@gmail.com
                            </a>
                            <a href="tel:+17789988857" className="flex items-center gap-2 rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                                +1 778 998 8857
                            </a>
                            <span className="group relative flex items-center gap-2 rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white cursor-default select-none">
                                <svg className="h-4 w-4 shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
                                WeChat: LazyBeansSmartHome
                                <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                    <img
                                        src={`${SITE_CONFIG.basePath}/images/wechat-qr.png`}
                                        alt="WeChat QR Code"
                                        className="w-40 rounded-xl border border-stone-200 shadow-xl"
                                    />
                                </span>
                            </span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}