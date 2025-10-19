export default function Services() {
  return (
    <section className="py-20 bg-white text-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Our Services</h1>
      <ul className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700">
        <li className="p-4 border rounded-lg shadow-sm">Procurement & Logistics</li>
        <li className="p-4 border rounded-lg shadow-sm">Engineering & Construction</li>
        <li className="p-4 border rounded-lg shadow-sm">Project Management</li>
        <li className="p-4 border rounded-lg shadow-sm">Energy Consulting</li>
      </ul>
    </section>
  );
}
