import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { SITE_CONFIG } from '../src/config/site';

const ecosystems = [
    { name: 'Matter', short: 'MATTER', logo: '/images/brands/matter.png' },
    { name: 'Apple Home', short: 'HOMEKIT', logo: '/images/brands/apple-home.png' },
    { name: 'Google Home', short: 'GOOGLE', logo: '/images/brands/google-home.png' },
    { name: 'Amazon Alexa', short: 'ALEXA', logo: '/images/brands/amazon-alexa.png' },
    { name: 'Samsung SmartThings', short: 'SMARTTHINGS', logo: '/images/brands/samsung-smartthings.png' },
    { name: 'Xiaomi Home', short: 'MI HOME', logo: '/images/brands/xiaomi-home.png' },
    { name: 'Home Assistant', short: 'HASS', logo: '/images/brands/home-assistant.png' },
];

const brandTiles = [
    { name: 'Philips Hue', group: 'Lighting', logo: '/images/brands/philips-hue.png' },
    { name: 'IKEA', group: 'Lighting', logo: '/images/brands/ikea.png' },
    { name: 'Lutron Caseta', group: 'Lighting', logo: '/images/brands/lutron-caseta.png' },
    { name: 'TP-Link Kasa/Tapo', group: 'Lighting', logo: '/images/brands/tplink.png' },
    { name: 'Aqara', group: 'Sensors', logo: '/images/brands/aqara.png' },
    { name: 'Eve', group: 'Sensors', logo: '/images/brands/eve.png' },
    { name: 'Sonoff', group: 'Sensors', logo: '/images/brands/sonoff.png' },
    { name: 'Yale', group: 'Locks', logo: '/images/brands/yale.png' },
    { name: 'Schlage', group: 'Locks', logo: '/images/brands/schlage.png' },
    { name: 'Ring', group: 'Security', logo: '/images/brands/ring.png' },
    { name: 'Arlo', group: 'Security', logo: '/images/brands/arlo.png' },
    { name: 'Sonos', group: 'Audio', logo: '/images/brands/sonos.png' },
    { name: 'Roborock', group: 'Robot Vacuum', logo: '/images/brands/roborock.png' },
    { name: 'Dreame', group: 'Robot Vacuum', logo: '/images/brands/dreame.png' },    
    { name: 'SwitchBot', group: 'Curtain', logo: '/images/brands/switchbot.png' },
    { name: 'Zemismart', group: 'Curtain', logo: '/images/brands/zemismart.png' },
];

const protocolTiles = [
    { name: 'Wi-Fi', logo: '/images/brands/wifi.png', logoClass: 'scale-[1.35]' },
    { name: 'Zigbee', logo: '/images/brands/zigbee.png', logoClass: 'scale-[1.55]' },
    { name: 'Thread', logo: '/images/brands/thread.png', logoClass: 'scale-[1.6]' },
    { name: 'BLE', logo: '/images/brands/ble.png', logoClass: 'scale-[1.45]' },
    { name: 'BLE Mesh', logo: '/images/brands/ble-mesh.png', logoClass: 'scale-[1.75]' },
];

export default function Ecosystems() {
    return (
        <>
            <Header />
            <main className="site-bg pt-24">
                <section className="max-w-6xl mx-auto px-6 pt-14 pb-8">
                    <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(140deg,#fffdf8_0%,#f4ecdd_100%)] p-6 shadow-[0_18px_48px_-34px_rgba(24,28,33,0.45)] md:p-10">
                        <h1 className="display-font text-4xl leading-tight text-stone-900 md:text-5xl">
                            Devices & Systems.
                        </h1>
                        <p className="mt-4 max-w-3xl text-stone-700 md:text-lg">
                            See the brands, ecosystems, and protocols we support before you buy.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Get Free Cost Estimate
                            </Link>
                            <Link href="/services" className="rounded-md border border-stone-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-white/70">
                                View Services
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 py-8">
                    <div className="grid gap-6 md:grid-cols-2">
                        <article className="rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-8">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">SUPPORTED ECOSYSTEMS</p>
                            <h2 className="display-font mt-3 text-3xl text-stone-900">Pick your ecosystem</h2>
                            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                                {ecosystems.map((item) => (
                                    <div key={item.name} className="rounded-xl border border-stone-300 bg-stone-50 p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_-18px_rgba(30,35,40,0.55)]">
                                        <div className="flex h-16 items-center justify-center rounded-md border border-stone-200 bg-white px-3">
                                            <img
                                                src={`${SITE_CONFIG.basePath}${item.logo}`}
                                                alt={`${item.name} logo`}
                                                className="h-11 w-full object-contain"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <p className="mt-2 text-[10px] font-semibold tracking-[0.14em] text-stone-500">{item.short}</p>
                                        <p className="mt-1 text-sm font-semibold text-stone-900">{item.name}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-5 text-sm text-stone-700">Not sure? We will pick the best fit for you.</p>
                        </article>

                        <article className="rounded-3xl border border-stone-300 bg-[#1f2528] p-6 text-stone-100 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-8">
                            <p className="text-xs font-semibold tracking-[0.14em] text-stone-300">PROTOCOL SUPPORT</p>
                            <h2 className="display-font mt-3 text-3xl text-white">Built for mixed protocols.</h2>
                            <p className="mt-4 text-sm text-stone-300">
                                We design stable setups across the wireless standards smart homes actually use.
                            </p>
                            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {protocolTiles.map((item) => (
                                    <article key={item.name} className="rounded-xl border border-white/15 bg-white/5 p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-12px_rgba(0,0,0,0.55)]">
                                        <div className="flex h-16 items-center justify-center overflow-hidden rounded-md bg-white px-3">
                                            <img
                                                src={`${SITE_CONFIG.basePath}${item.logo}`}
                                                alt={`${item.name} logo`}
                                                className={`h-11 w-full object-contain ${item.logoClass}`}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        <p className="mt-2 text-xs font-semibold text-stone-100">{item.name}</p>
                                    </article>
                                ))}
                            </div>
                        </article>
                    </div>
                </section>

                <section className="max-w-6xl mx-auto px-6 pt-2 pb-20">
                    <div className="rounded-3xl border border-stone-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(30,35,40,0.8)] md:p-8">
                        <p className="text-xs font-semibold tracking-[0.14em] text-stone-500">BRAND LOGO WALL</p>
                        <h3 className="display-font mt-2 text-3xl text-stone-900">Common brands we integrate</h3>
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {brandTiles.map((tile) => (
                                <article
                                    key={tile.name}
                                    className="group rounded-2xl border border-stone-300 bg-[linear-gradient(160deg,#ffffff_0%,#f5efe2_100%)] p-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_24px_-18px_rgba(30,35,40,0.55)]"
                                >
                                    <div className="flex h-20 items-center justify-center rounded-lg border border-stone-200 bg-white px-4">
                                        <img
                                            src={`${SITE_CONFIG.basePath}${tile.logo}`}
                                            alt={`${tile.name} logo`}
                                            className="h-14 w-full object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <p className="mt-3 text-base font-semibold text-stone-900">{tile.name}</p>
                                </article>
                            ))}
                            <article className="rounded-2xl border border-amber-300 bg-[linear-gradient(160deg,#fff8e8_0%,#f7e8c6_100%)] p-4 text-amber-900 shadow-[0_14px_24px_-18px_rgba(120,93,32,0.3)]">
                                <div className="flex h-16 items-center justify-center rounded-lg border border-amber-200 bg-white/70 px-3 text-sm font-semibold tracking-[0.12em] text-amber-700">
                                    + MORE
                                </div>
                                <p className="mt-3 text-base font-semibold">And more brands supported</p>
                            </article>
                        </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-stone-300 bg-[#efe4d2] p-8 text-center md:p-10">
                        <h2 className="display-font text-3xl text-stone-900 md:text-4xl">Have a specific brand in mind?</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-stone-700">
                            Send us your current device list. We will confirm what works together and what to avoid.
                        </p>
                        <div className="mt-7 flex flex-wrap justify-center gap-3">
                            <Link href="/contact" className="rounded-md bg-stone-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-stone-700">
                                Ask About Compatibility
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