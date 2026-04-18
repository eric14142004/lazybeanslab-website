export default function Footer() {
    return (
        <footer className="mt-16 border-t border-stone-300/80 bg-[#1f2528] text-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <p className="display-font text-xl">Lazy Beans Smart Home</p>
                <p className="mt-2 max-w-xl text-sm text-stone-300">
                    Smart home consulting for homeowners who want reliability, not gadget chaos.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-stone-400">
                    <p>© 2026 Lazy Beans Smart Home</p>
                    <p>Design · Integration · Automation</p>
                </div>
            </div>
        </footer>
    );
}