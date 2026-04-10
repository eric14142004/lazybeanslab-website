export default function ServiceCard({ service }) {
  return (
      <div className="border rounded p-4 shadow hover:shadow-lg transition">
        <h2 className="font-bold">{service.name}</h2>
        <p>{service.description}</p>
      </div>
  );
}