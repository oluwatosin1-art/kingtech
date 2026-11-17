export default function About() {
  const stats = [
    { k: '10+', v: 'Years of Experience' },
    { k: '5,000+', v: 'Meters Installed' },
    { k: '98%', v: 'Customer Satisfaction' },
    { k: '24/7', v: 'Support Available' },
  ];
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">About Us</h1>
          <p className="text-brand-50">Powering smarter living with trusted meter installations.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-extrabold mb-3">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            KingsTechtronics is a leading smart meter installation company specializing in electricity, gas, and water meters.
            We work with homes, businesses, estates, and factories to deliver accurate readings, better billing, and modern energy control.
          </p>
          <h3 className="font-bold mt-6 mb-1">Our Mission</h3>
          <p className="text-gray-700 mb-4">To make smart metering accessible, reliable, and stress-free for every property owner.</p>
          <h3 className="font-bold mt-6 mb-1">Our Vision</h3>
          <p className="text-gray-700">A future where every home and business uses accurate, intelligent utility meters.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 content-start">
          {stats.map(s => (
            <div key={s.v} className="bg-brand-50 rounded-2xl p-6 text-center">
              <div className="text-3xl font-extrabold text-brand-700">{s.k}</div>
              <div className="text-sm text-gray-700 mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-3">Why Customers Trust Us</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ Certified &amp; licensed installers</li>
            <li>✓ Clean, safe, standards-compliant work</li>
            <li>✓ Post-installation support &amp; warranty</li>
            <li>✓ Transparent pricing, no hidden fees</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-lg mb-3">Certifications</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ NERC-compliant installation practices</li>
            <li>✓ Manufacturer-trained technicians</li>
            <li>✓ Safety &amp; quality management trained</li>
          </ul>
        </div>
      </div>
    </>
  );
}