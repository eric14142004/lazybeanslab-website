import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { projects } from '../../data/projects';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
    return (
        <>
            <Header />
            <main className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {projects.map(p => <ProjectCard key={p.id} project={p} />)}
                </div>
            </main>
            <Footer />
        </>
    );
}