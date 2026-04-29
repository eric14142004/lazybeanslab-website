import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { services } from '../data/services';
import { SITE_CONFIG } from '../src/config/site';

export default function ServicesSection() {
    const [activeId, setActiveId] = useState(services[0]?.id ?? null);
    const [isStackExpanded, setIsStackExpanded] = useState(false);
    const [isOverflowHovered, setIsOverflowHovered] = useState(false);
    const planRef = useRef(null);
    const detailContentRef = useRef(null);
    const stepRefs = useRef([]);
    const directionRef = useRef('next');
    const highlightOnNextChangeRef = useRef(false);

    const activeIndex = services.findIndex((service) => service.id === activeId);

    const scrollToPlan = ({ force = false } = {}) => {
        if (!planRef.current) {
            return;
        }

        const header = document.querySelector('header');
        const headerHeight = header ? header.getBoundingClientRect().height : 0;
        const rect = planRef.current.getBoundingClientRect();
        const top = rect.top + window.scrollY - headerHeight - 16;
        const viewportHeight = window.innerHeight;
        const visibleTopLimit = headerHeight + 36;
        const isPlanVisible = rect.top < viewportHeight * 0.82 && rect.bottom > visibleTopLimit + 120;
        const shouldScroll = force || window.innerWidth < 768 || !isPlanVisible;

        if (!shouldScroll) {
            return;
        }

        window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    };

    const highlightPlanCard = () => {
        if (!planRef.current) {
            return;
        }

        const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        planRef.current.animate(
            [
                {
                    boxShadow: '0 18px 40px -28px rgba(24,28,33,0.9)',
                    borderColor: 'rgba(214, 211, 209, 1)',
                },
                {
                    boxShadow: '0 0 0 8px rgba(216, 200, 173, 0.28), 0 24px 46px -28px rgba(24,28,33,0.95)',
                    borderColor: 'rgba(120, 113, 108, 0.9)',
                },
                {
                    boxShadow: '0 18px 40px -28px rgba(24,28,33,0.9)',
                    borderColor: 'rgba(214, 211, 209, 1)',
                },
            ],
            {
                duration: 700,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }
        );
    };

    const selectServiceByIndex = (index, direction) => {
        const service = services[index];
        if (!service) {
            return;
        }

        directionRef.current = direction;
        highlightOnNextChangeRef.current = true;
        setActiveId(service.id);
    };

    const selectPrevious = () => {
        if (services.length === 0) {
            return;
        }

        const current = activeIndex === -1 ? 0 : activeIndex;
        const previousIndex = (current - 1 + services.length) % services.length;
        selectServiceByIndex(previousIndex, 'prev');
    };

    const selectNext = () => {
        if (services.length === 0) {
            return;
        }

        const current = activeIndex === -1 ? 0 : activeIndex;
        const nextIndex = (current + 1) % services.length;
        selectServiceByIndex(nextIndex, 'next');
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

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToPlan({ force: true });
            });
        });
    }, [activeId]);

    useEffect(() => {
        const content = detailContentRef.current;
        if (!content) {
            return;
        }

        const shouldGuideToPlan = highlightOnNextChangeRef.current;

        const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return;
        }

        const xOffset = directionRef.current === 'prev' ? -18 : 18;

        content.animate(
            [
                { opacity: 0, transform: `translateX(${xOffset}px) translateY(8px) scale(0.992)` },
                { opacity: 1, transform: 'translateX(0) translateY(0) scale(1)' },
            ],
            {
                duration: 360,
                easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
            }
        );

        stepRefs.current.forEach((node, index) => {
            if (!node) {
                return;
            }

            node.animate(
                [
                    { opacity: 0, transform: 'translateY(12px)' },
                    { opacity: 1, transform: 'translateY(0)' },
                ],
                {
                    duration: 320,
                    delay: 120 + index * 55,
                    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
                    fill: 'both',
                }
            );
        });

        if (shouldGuideToPlan) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    scrollToPlan();
                });
            });

            highlightPlanCard();
            highlightOnNextChangeRef.current = false;
        }
    }, [activeId]);

    const handleToggle = (serviceId) => {
        setActiveId((current) => {
            const next = current === serviceId ? null : serviceId;

            if (current && next) {
                const currentIdx = services.findIndex((service) => service.id === current);
                const nextIdx = services.findIndex((service) => service.id === next);
                directionRef.current = nextIdx >= currentIdx ? 'next' : 'prev';
            }

            if (next) {
                highlightOnNextChangeRef.current = true;
            }

            return next;
        });
    };

    const activeService = services.find((service) => service.id === activeId) || null;
    const processItems = Array.isArray(activeService?.process) ? activeService.process : [];
    const visibleCardCount = 4;
    const hiddenCardCount = Math.max(services.length - visibleCardCount, 0);
    const overflowServices = services.slice(visibleCardCount);
    const maxShiftPercent = hiddenCardCount > 0 ? (hiddenCardCount / services.length) * 100 : 0;
    const leftHiddenCount = isStackExpanded ? hiddenCardCount : 0;
    const rightHiddenCount = isStackExpanded ? 0 : hiddenCardCount;
    const leftStackAnchorIndex = leftHiddenCount;
    const rightStackAnchorIndex = Math.min(visibleCardCount - 1, Math.max(services.length - 1, 0));

    const renderServiceCardButton = (service) => {
        const isActive = activeId === service.id;

        return (
            <button
                type="button"
                aria-expanded={isActive}
                onClick={() => handleToggle(service.id)}
                className={`group flex h-full flex-col overflow-hidden rounded-2xl border text-left transition duration-300 ${isActive
                    ? 'border-stone-900 bg-white shadow-[0_16px_36px_-24px_rgba(24,28,33,0.9)]'
                    : 'border-stone-300 bg-white/95 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] hover:-translate-y-0.5'
                    }`}
            >
                <div className="aspect-[16/9] overflow-hidden border-b border-stone-200 bg-stone-100 md:aspect-[1.7/1]">
                    <img
                        src={`${SITE_CONFIG.basePath}${service.images[0]}`}
                        alt={service.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="p-4 md:p-4.5">
                    <h3 className="min-h-[3rem] text-base font-semibold text-stone-900 md:min-h-[3.25rem] md:text-[1.05rem]">{service.name}</h3>
                    <p className="mt-2 h-[3.25rem] overflow-hidden text-sm leading-5 text-stone-700 md:h-[3.5rem]">{service.description}</p>
                    <div
                        aria-hidden="true"
                        className={`mt-3 flex items-center justify-center py-1 transition ${isActive ? 'text-stone-700' : 'text-stone-400'}`}
                    >
                        <span className="text-sm leading-none">{isActive ? '↑' : '↓'}</span>
                    </div>
                </div>
            </button>
        );
    };

    return (
        <section className="max-w-6xl mx-auto w-full px-6 py-4 md:py-6">
            <div className="mb-4 rounded-[1.5rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] px-5 py-4 shadow-[0_14px_40px_-34px_rgba(24,28,33,0.45)] md:px-6 md:py-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-8">
                    <div>
                        <h1 className="display-font text-[1.9rem] leading-tight text-stone-900 md:text-[2.2rem]">
                            Find the right service for your home.
                        </h1>
                        <p className="mt-1.5 max-w-2xl text-sm text-stone-700 md:text-[0.98rem]">
                            Compare your options, then preview each step before you book.
                        </p>
                    </div>
                    <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-stone-900 underline decoration-stone-400 underline-offset-4 transition hover:decoration-stone-900">
                        Need help choosing?
                    </Link>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-7 md:hidden">
                {services.map((service) => (
                    <div key={`mobile-${service.id}`} data-service-id={service.id} className="flex flex-col">
                        {renderServiceCardButton(service)}
                    </div>
                ))}
            </div>

            <div
                className="relative mt-6 hidden md:block"
                onMouseMove={(event) => {
                    if (overflowServices.length === 0) {
                        return;
                    }

                    const rect = event.currentTarget.getBoundingClientRect();
                    const hoverRatio = (event.clientX - rect.left) / rect.width;

                    // 飘到左边卡片区域时收回
                    if (isStackExpanded && hoverRatio <= 0.48 && !isOverflowHovered) {
                        setIsStackExpanded(false);
                        setIsOverflowHovered(false);
                        return;
                    }

                    // 飘到右边或在溢出卡片上时展开
                    if (hoverRatio >= 0.86 || isOverflowHovered) {
                        setIsStackExpanded(true);
                    }
                }}
            >
                <div className={`relative z-10 overflow-hidden ${overflowServices.length > 0 ? 'px-3' : ''}`}>
                    <div
                        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{
                            width: `${(services.length / 4) * 100}%`,
                            transform: `translateX(-${isStackExpanded ? maxShiftPercent : 0}%)`,
                        }}
                    >
                        {services.map((service, index) => {
                            let cardClasses = 'relative shrink-0 px-3 transition-[opacity,transform] duration-500';

                            if ((index === leftStackAnchorIndex && leftHiddenCount > 0) || (index === rightStackAnchorIndex && rightHiddenCount > 0)) {
                                cardClasses += ' isolate overflow-visible';
                            }

                            if (isStackExpanded && index < leftHiddenCount) {
                                cardClasses += ' pointer-events-none opacity-0';
                            } else if (index >= visibleCardCount) {
                                cardClasses += isStackExpanded 
                                    ? ' pointer-events-auto translate-x-0 opacity-100' 
                                    : ' pointer-events-none translate-x-6 opacity-0';
                            } else {
                                cardClasses += ' pointer-events-auto translate-x-0 opacity-100';
                            }

                            return (
                            <div
                                key={service.id}
                                data-service-id={service.id}
                                onMouseEnter={index >= visibleCardCount ? () => {
                                    setIsOverflowHovered(true);
                                    setIsStackExpanded(true);
                                } : undefined}
                                onMouseLeave={index >= visibleCardCount ? () => {
                                    setIsOverflowHovered(false);
                                } : undefined}
                                className={cardClasses}
                                style={{ width: `${100 / services.length}%` }}
                            >
                                {index === leftStackAnchorIndex && leftHiddenCount > 0 && (
                                    <div
                                        aria-hidden="true"
                                        className={`pointer-events-none absolute inset-y-0 left-3 right-3 z-0 transition duration-500 ${isStackExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}
                                    >
                                        <div className="relative h-full w-full">
                                            {Array.from({ length: leftHiddenCount }).map((_, stackIndex) => (
                                                <div
                                                    key={`left-stack-layer-${stackIndex}`}
                                                    className="absolute inset-0 rounded-2xl border border-stone-300 bg-white shadow-[0_14px_26px_-18px_rgba(24,28,33,0.55)]"
                                                    style={{
                                                        transform: `translateX(-${(stackIndex + 1) * 8}px)`,
                                                        opacity: Math.max(0.34, 0.88 - stackIndex * 0.15),
                                                        zIndex: leftHiddenCount - stackIndex,
                                                    }}
                                                />
                                            ))}
                                            <div className="absolute inset-x-0 top-0 flex justify-start pl-2 pt-2">
                                                <span className="rounded-full border border-stone-400 bg-white/95 px-2.5 py-1 text-xs font-semibold text-stone-800 shadow-sm">
                                                    +{leftHiddenCount}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {index === rightStackAnchorIndex && rightHiddenCount > 0 && (
                                    <div
                                        aria-hidden="true"
                                        className={`pointer-events-none absolute inset-y-0 left-3 right-3 z-0 transition duration-500 ${isStackExpanded ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'}`}
                                    >
                                        <div className="relative h-full w-full">
                                            {Array.from({ length: rightHiddenCount }).map((_, stackIndex) => (
                                                <div
                                                    key={`stack-layer-${stackIndex}`}
                                                    className="absolute inset-0 rounded-2xl border border-stone-300 bg-white shadow-[0_14px_26px_-18px_rgba(24,28,33,0.55)]"
                                                    style={{
                                                        transform: `translateX(${(stackIndex + 1) * 8}px)`,
                                                        opacity: Math.max(0.34, 0.88 - stackIndex * 0.15),
                                                        zIndex: rightHiddenCount - stackIndex,
                                                    }}
                                                />
                                            ))}
                                            <div className="absolute inset-x-0 top-0 flex justify-end pr-2 pt-2">
                                                <span className="rounded-full border border-stone-400 bg-white/95 px-2.5 py-1 text-xs font-semibold text-stone-800 shadow-sm">
                                                    +{rightHiddenCount}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="relative z-20">
                                    {renderServiceCardButton(service)}
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>

                {overflowServices.length > 0 && (
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[14%]"
                    />
                )}
            </div>

            {activeService && (
                <div ref={planRef} className="group relative mt-10 scroll-mt-32 rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_18px_40px_-28px_rgba(24,28,33,0.9)] md:p-8">
                    <div className="pointer-events-none absolute left-2 right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-between md:-left-14 md:-right-14 md:flex md:opacity-0 md:transition md:duration-200 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
                        <button
                            type="button"
                            onClick={selectPrevious}
                            aria-label="Previous service"
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-white text-stone-900 shadow-md transition hover:bg-stone-100"
                        >
                            <span aria-hidden="true" className="text-base leading-none">&#8592;</span>
                        </button>
                        <button
                            type="button"
                            onClick={selectNext}
                            aria-label="Next service"
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-white text-stone-900 shadow-md transition hover:bg-stone-100"
                        >
                            <span aria-hidden="true" className="text-base leading-none">&#8594;</span>
                        </button>
                    </div>

                    <div ref={detailContentRef} className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-start">
                        <div>
                            <h3 className="display-font text-3xl text-stone-900">{activeService.name}</h3>
                            <p className="mt-4 text-stone-700">{activeService.description}</p>
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
                                <article
                                    key={`${activeService.id}-${index}-${title}`}
                                    ref={(node) => {
                                        stepRefs.current[index] = node;
                                    }}
                                    className="rounded-2xl border border-stone-300 bg-[#f9f7f2] p-5"
                                >
                                    <p className="text-xs font-semibold tracking-[0.12em] text-stone-500">{title}</p>
                                    <p className="mt-2 text-sm leading-6 text-stone-800">{detail}</p>
                                </article>
                            );
                        })}
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
                        <button
                            type="button"
                            onClick={selectPrevious}
                            aria-label="Previous service"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-white text-stone-900 shadow-sm transition hover:bg-stone-100"
                        >
                            <span aria-hidden="true" className="text-base leading-none">&#8592;</span>
                        </button>
                        <button
                            type="button"
                            onClick={selectNext}
                            aria-label="Next service"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-white text-stone-900 shadow-sm transition hover:bg-stone-100"
                        >
                            <span aria-hidden="true" className="text-base leading-none">&#8594;</span>
                        </button>
                    </div>
                    </div>
            )}
        </section>
    );
}
