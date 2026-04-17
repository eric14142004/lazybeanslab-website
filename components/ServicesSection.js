import { useState } from 'react';
import { services } from '../data/services';
import { SITE_CONFIG } from '../src/config/site';

export default function ServicesSection() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="w-full py-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
                {services.map(service => (
                    <div
                        key={service.id}
                        className="flex flex-col"
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <button
                            className={`
              px-8 py-6 rounded-2xl border-2 text-left transition-all duration-300
              ${hoveredId === service.id
                                ? 'border-blue-500 bg-blue-50 shadow-lg'
                                : 'border-gray-200 bg-white hover:border-blue-300'}
            `}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{service.description}</p>
                        </button>

                        <div
                            className={`
                  transition-all duration-500 ease-in-out overflow-hidden
                  ${hoveredId === service.id ? 'max-h-96 mt-4' : 'max-h-0 mt-0'}
                `}
                        >
                            <div className="grid grid-cols-1 gap-4">
                                {service.images.map((src, i) => (
                                    <div key={i} className="aspect-video rounded-xl overflow-hidden bg-gray-100">
                                        <img
                                            src={`${SITE_CONFIG.basePath}${src}`}
                                            alt={`${service.name} ${i + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
