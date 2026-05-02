import Image from 'next/image';
import { useLanguage } from '../src/contexts/LanguageContext';

export default function ProjectCard({ project }) {
    const { t } = useLanguage();
    const detail = t.cases?.caseDetails?.[project.id];
    const displayName = detail?.name ?? project.name ?? project.id;
    return (
        <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-xl">
                <Image
                    src={project.image}
                    alt={displayName}
                    width={500}
                    height={300}
                    className="group-hover:scale-105 transition"
                />
            </div>
            <h3 className="mt-3 font-medium">{displayName}</h3>
        </div>
    );
}