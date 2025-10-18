export default function Home() {
  return (
    <section>
      <div className="bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center text-white h-[80vh] flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-black/50 p-4 rounded">
          Accentuate Integrated Services Limited
        </h1>
        <p className="text-lg md:text-2xl mt-4 bg-black/40 p-2 rounded">
          Engineering Excellence | Construction | Energy Consulting | Procurement
        </p>
      </div>

      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-8">
          To provide the best of service with integrity and ensure provision of consistent added value for our Clients and Team with global best practices.
        </p>

        <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-8">
          Ensure all-round unique service delivery that makes us the first-choice call for clients and employees.
        </p>

        <h2 className="text-3xl font-bold text-blue-900 mb-4">Core Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 font-semibold">
          <div className="bg-gray-100 p-4 rounded shadow">Professionalism</div>
          <div className="bg-gray-100 p-4 rounded shadow">Safety</div>
          <div className="bg-gray-100 p-4 rounded shadow">Synergy</div>
          <div className="bg-gray-100 p-4 rounded shadow">Innovation</div>
          <div className="bg-gray-100 p-4 rounded shadow">Smart Teamwork</div>
          <div className="bg-gray-100 p-4 rounded shadow">Integrity</div>
        </div>
      </div>
    </section>
  );
}
