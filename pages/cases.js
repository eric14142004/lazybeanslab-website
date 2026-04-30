

import Header from '../components/Header';
import Footer from '../components/Footer';
import { cases } from '../data/cases';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';
import { useState } from 'react';

export default function Cases() {
	return (
		<>
			<Header />
			<main className="site-bg pt-24">
				<section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
					<div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 md:p-10">
						<h1 className="display-font text-4xl text-stone-900">Client Case Studies</h1>
						<p className="mt-3 max-w-2xl text-stone-700">On-site, remote, and troubleshooting projects — each with real client feedback.</p>
					</div>
				</section>


				   {/* 三個案例卡片一次顯示 */}
								<section className="max-w-6xl mx-auto px-6 py-12">
									<div className="grid gap-8 md:grid-cols-3">
										   {cases.map((project, idx) => {
											const [mainIdx, setMainIdx] = useState(0);
											return (
												<div key={project.id} className="rounded-2xl border border-stone-300 bg-white p-6 flex flex-col shadow-[0_10px_24px_-20px_rgba(30,35,40,0.10)]">
													{/* 主圖 */}
													<img
														src={project.images[mainIdx]}
														alt={project.name}
														className="w-full h-48 rounded-xl border border-stone-200 object-cover mb-3 transition-all duration-300"
													/>
													{/* 縮圖列 */}
													<div className="flex gap-2 mb-4 overflow-x-auto pb-1">
														{project.images.map((img, i) => (
															<button
																key={img}
																className={`border-2 rounded-lg w-14 h-10 flex-shrink-0 overflow-hidden ${mainIdx === i ? 'border-stone-900' : 'border-stone-200'}`}
																style={{ outline: 'none' }}
																onClick={() => setMainIdx(i)}
																tabIndex={0}
																aria-label={`Show image ${i+1}`}
															>
																<img src={img} alt="thumb" className="w-full h-full object-cover" />
															</button>
														))}
													</div>
													<h2 className="display-font text-xl text-stone-900 mb-1">{project.name}</h2>
													{/* 下面內容可根據 project.id 決定描述與回饋（如需更動可再優化） */}
													{project.id === 'apartment' && <>
														<p className="mt-2 text-stone-700 text-sm">Client wanted a fully smart home. We handled planning, install, and training—done in one go.</p>
														<div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
															<p className="text-xs font-semibold text-emerald-700">CLIENT FEEDBACK</p>
															<p className="mt-1 text-xs text-stone-900">“Everything just works. The team explained every step and made sure I could use all the features. Highly recommended!”</p>
															<p className="mt-1 text-xs text-stone-500">— Vancouver, BC</p>
														</div>
													</>}
													  {project.id === 'shanghai-rental' && <>
														  <p className="mt-2 text-stone-700 text-sm">Shanghai rental, new baby on the way. We planned devices, install spots, and automations—fully remote, budget-friendly.</p>
														  <div className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-3">
															  <p className="text-xs font-semibold text-sky-700">CLIENT FEEDBACK</p>
															  <p className="mt-1 text-xs text-stone-900">“Clear plan, easy setup, works great for our family.”</p>
															  <p className="mt-1 text-xs text-stone-500">— Shanghai, China</p>
														  </div>
													  </>}
													{project.id === 'renovation' && <>
														<p className="mt-2 text-stone-700 text-sm">Devices kept failing. We fixed it on-site and showed the client how to avoid future issues.</p>
														<div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3">
															<p className="text-xs font-semibold text-amber-700">CLIENT FEEDBACK</p>
															<p className="mt-1 text-xs text-stone-900">“They fixed what three other services couldn’t. Now everything is stable and I know what to avoid next time.”</p>
															<p className="mt-1 text-xs text-stone-500">— Richmond, BC</p>
														</div>
													</>}
												</div>
											);
										})}
									</div>
								</section>

				<section className="max-w-6xl mx-auto px-6 pt-8 pb-20">
					<div className="rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
						<h2 className="display-font text-3xl text-stone-900 md:text-4xl">Want results like these?</h2>
						<p className="mx-auto mt-3 max-w-2xl text-stone-700">Tell us your goal and budget and we’ll propose a plan tailored to your home.</p>
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