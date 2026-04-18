import { useEffect, useRef, useState } from 'react';
import { services } from '../data/services';
import { SITE_CONFIG } from '../src/config/site';

export default function ServicesSection() {
    const [activeId, setActiveId] = useState(services[0]?.id ?? null);
    const planRef = useRef(null);

    const scrollToPlan = () => {
        if (!planRef.current) {
            return;
        }

        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const top = planRef.current.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    };

    useEffect(() => {
        const applyHashSelection = () => {
            const hash = window.location.hash.replace('#', '');
            if (!hash) {
                return;
            }

            const exists = services.some((service) => service.id === hash);
            if (exists) {
                setActiveId(hash);
            }
        };

        applyHashSelection();
        window.addEventListener('hashchange', applyHashSelection);
        return () => window.removeEventListener('hashchange', applyHashSelection);
    }, []);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (!hash || !activeId || hash !== activeId) {
            return;
        }

        // Wait until the detail card is rendered, then scroll to it with header offset.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToPlan();
            });
        });
    }, [activeId]);

    const handleToggle = (serviceId) => {
        setActiveId((current) => {
            const next = current === serviceId ? null : serviceId;

            if (next) {
                requestAnimationFrame(() => {
                    scrollToPlan();
                });
            }

            return next;
        });
    };

    const activeService = services.find((service) => service.id === activeId) || null;
    const processItems = Array.isArray(activeService?.process) ? activeService.process : [];

    return (
        <section className="max-w-6xl mx-auto w-full py-2 px-6 md:py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-max">
                {services.map(service => (
                    <div
                        key={service.id}
                        data-service-id={service.id}
                        className="flex flex-col"
                    >
                        <button
                            type="button"
                            aria-expanded={activeId === service.id}
                            onClick={() => handleToggle(service.id)}
                            className={`group overflow-hidden rounded-2xl border text-left transition duration-300 ${activeId === service.id
                                ? 'border-stone-900 bg-white shadow-[0_16px_36px_-24px_rgba(24,28,33,0.9)]'
                                : 'border-stone-300 bg-white/95 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] hover:-translate-y-0.5'
                                }`}
                        >
                            <div className="aspect-[5/3] overflow-hidden bg-stone-100 border-b border-stone-200">
                                <img
                                    src={`${SITE_CONFIG.basePath}${service.images[0]}`}
                                    alt={service.name}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="min-h-[3.5rem] text-lg font-semibold text-stone-900">{service.name}</h3>
                                <p className="mt-2 h-[3.75rem] overflow-hidden text-sm leading-5 text-stone-700">{service.description}</p>
                                <p className="mt-3 text-xs font-semibold tracking-[0.12em] text-stone-500">
                                    {activeId === service.id ? 'SELECTED · PLAN BELOW' : 'CLICK TO VIEW PLAN BELOW'}
                                </p>
                            </div>
                        </button>
                    </div>
                ))}
            </div>

            {activeService && (
                <div ref={planRef} className="mt-10 scroll-mt-32 rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(24,28,33,0.9)] md:p-8">
                    <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                        <div>
                            <p className="inline-flex rounded-full border border-stone-300 bg-white px-4 py-1 text-xs font-semibold tracking-[0.14em] text-stone-600">FLOW</p>
                            <h3 className="display-font mt-5 text-3xl text-stone-900">{activeService.name}</h3>
                            <p className="mt-6 text-stone-700">{activeService.description}</p>
                        </div>
                        <div className="overflow-hidden rounded-xl border border-stone-300 bg-stone-100">
                            <img
                                src={`${SITE_CONFIG.basePath}${activeService.images[0]}`}
                                alt={activeService.name}
                                className="h-44 w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:[grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
                        {processItems.map((item, index) => {
                            const title = typeof item === 'string' ? `Step ${index + 1}` : item.title;
                            const detail = typeof item === 'string' ? item : item.detail;

                            return (
                            <article key={`${activeService.id}-${index}-${title}`} className="rounded-2xl border border-stone-300 bg-[#f9f7f2] p-5">
                                <p className="text-xs font-semibold tracking-[0.12em] text-stone-500">{title}</p>
                                <p className="mt-2 text-sm leading-6 text-stone-800">{detail}</p>
                            </article>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
}
