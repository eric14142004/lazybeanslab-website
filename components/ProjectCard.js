import Image from 'next/image';

export default function ProjectCard({ project }) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition">
            <Image src={project.image} alt={project.name} width={400} height={250} />
            <h2 className="font-bold mt-2">{project.name}</h2>
        </div>
    );
}