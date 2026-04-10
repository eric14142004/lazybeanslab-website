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
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Professional Smart Home Consulting</h1>
          <p className="mb-6">We help you design and implement smart home solutions that work.</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map(s => <ServiceCard key={s.id} service={s} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </section>
        </main>
        <Footer />
      </>
  );
}