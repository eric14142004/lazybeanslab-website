import Image from 'next/image';

export default function ProjectCard({ project }) {
    return (
        <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="group-hover:scale-105 transition"
                />
            </div>
            <h3 className="mt-3 font-medium">{project.name}</h3>
        </div>
    );
}