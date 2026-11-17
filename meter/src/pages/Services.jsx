import { useQuote } from '../context/QuoteContext';

const services = [
  { title: 'New Meter Installation', desc: 'Fresh installation for new buildings, homes, and businesses — certified and warranty-backed.', service: 'New Installation' },
  { title: 'Meter Replacement / Upgrade', desc: 'Swap old analog meters for smart meters and start enjoying accurate, remote-monitored billing.', service: 'Replacement / Upgrade' },
  { title: 'Prepaid Meter Installation', desc: 'Recharge and control your consumption with prepaid smart meters for electricity, gas or water.', service: 'New Installation' },
  { title: 'Meter Repair & Maintenance', desc: 'Diagnostics, repairs, and routine maintenance to keep your meters accurate and reliable.', service: 'Repair' },
  { title: 'Bulk / Estate / Landlord Installation', desc: 'We handle large-scale meter rollouts for estates, landlords, facilities, and industrial clients.', service: 'Bulk Installation' },
  { title: 'Meter Reading & Monitoring Support', desc: 'Remote reading, usage reports, and monitoring assistance for property managers.', service: 'Replacement / Upgrade' },
];

export default function Services() {
  const { openQuote } = useQuote();
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Our Services</h1>
          <p className="text-brand-50">End-to-end smart meter services for every property type.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(s => (
          <div key={s.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition flex flex-col">
            <h3 className="font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-gray-600 mb-5 flex-1">{s.desc}</p>
            <button onClick={() => openQuote({ service: s.service })} className="btn-outline">
              Request This Service
            </button>
          </div>
        ))}
      </div>
    </>
  );
}