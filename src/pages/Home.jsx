export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Accentuate Integrated Services Limited
          </h1>
          <p className="text-lg mb-6">
            Engineering • Construction • Procurement • Energy Consulting
          </p>
          <a
            href="/services"
            className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Who We Are</h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To provide the best of service with integrity and ensure
                consistent added value for our Clients and Team with global best
                practices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ensure all-round unique service delivery that makes us the
                first-choice call for clients and employees.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Core Values
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Professionalism • Safety • Synergy • Innovation • Smart Teamwork •
              Integrity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
