import Header from '../components/Header';
import Footer from '../components/Footer';
import { services } from '../data/services';
import { projects } from '../data/projects';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    return (
        <>
            <Header />

            <main className="pt-24">

                {/* HERO */}
                <section className="text-center px-6 py-20 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">
                        Smart Home Consulting That Actually Works
                    </h1>
                    <p className="text-gray-600 mb-8">
                        We design reliable, scalable smart home systems tailored to your space.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
                            Get Started
                        </a>
                        <a href="/projects" className="border px-6 py-3 rounded-md">
                            View Projects
                        </a>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-semibold mb-8">Services</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map(s => <ServiceCard key={s.id} service={s} />)}
                    </div>
                </section>

                {/* PROJECTS */}
                <section className="max-w-6xl mx-auto px-6 py-16">
                    <h2 className="text-2xl font-semibold mb-8">Recent Work</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-20 bg-gray-50">
                    <h2 className="text-2xl font-semibold mb-4">
                        Planning a Smart Home?
                    </h2>
                    <a href="/contact" className="bg-black text-white px-6 py-3 rounded-md">
                        Contact Us
                    </a>
                </section>

            </main>

            <Footer />
        </>
    );
}