export default function ServiceCard({ service }) {
    return (
        <div className="p-6 border rounded-xl hover:shadow-lg transition bg-white">
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
        </div>
    );
}