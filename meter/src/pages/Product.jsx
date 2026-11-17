import { useQuote } from '../context/QuoteContext';
import smartgas from '../images/smartgas.jpg';
import prepaidgas from '../images/prepaidgas.jpg';
import ThreePhase from '../images/ThreePhase.jpg';
import singlephase from '../images/singlephase.jpg';
import electricity from '../images/electricity.jpg';
import water from '../images/water.jpg';

const products = [
  {
    category: 'Smart Electricity Meters',
    items: [
      {
        name: 'Single-Phase Smart Meter',
        desc: 'Ideal for homes and small apartments.',
        features: ['Remote reading', 'Prepaid/Postpaid', 'Tamper alerts'],
        image: singlephase,
      },
      {
        name: 'Three-Phase Smart Meter',
        desc: 'Built for offices, factories and larger buildings.',
        features: ['High load capacity', 'Real-time monitoring', 'Load profiling'],
        image: ThreePhase,
      },
      {
        name: 'Prepaid / Postpaid Meter',
        desc: 'Choose your preferred billing model.',
        features: ['Recharge token', 'Auto disconnect', 'LCD display'],
        image: electricity,
      },
    ],
  },
  {
    category: 'Smart Gas Meters',
    items: [
      {
        name: 'Prepaid Gas Meter',
        desc: 'Pay before use and control your gas consumption.',
        features: ['Smart card/token', 'Leak detection', 'Accurate readings'],
        image: prepaidgas,
      },
      {
        name: 'Smart Gas Meter',
        desc: 'IoT-enabled meter with remote monitoring.',
        features: ['Remote monitoring', 'Usage reports', 'Compact design'],
        image: smartgas,
      },
    ],
  },
  {
    category: 'Smart Water Meters',
    items: [
      {
        name: 'Ultrasonic Water Meter',
        desc: 'High-accuracy measurement with no moving parts.',
        features: ['Low maintenance', 'Leak detection', 'Long battery life'],
        image: water,
      },
      {
        name: 'Prepaid Water Meter',
        desc: 'Control usage with prepaid credit.',
        features: ['Prepaid tokens', 'Auto valve', 'Remote monitoring'],
        image: water,
      },
    ],
  },
];

export default function Product() {
  const { openQuote } = useQuote();

  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Our Smart Meters</h1>
          <p className="text-brand-50">
            Certified products for electricity, gas, and water — installed by experts.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {products.map(cat => (
          <section key={cat.category}>
            <h2 className="text-2xl font-extrabold mb-6">{cat.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.items.map(p => (
                <article
                  key={p.name}
                  className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col"
                >
                  {/* ✅ Image now actually rendered */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 overflow-hidden">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          // If the file fails to load, replace with emoji
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement.innerHTML =
                            `<div style="width:100%;height:100%;display:grid;place-items:center;font-size:4rem">${
                              cat.category.includes('Electricity') ? '⚡'
                              : cat.category.includes('Gas') ? '🔥' : '💧'
                            }</div>`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-6xl">
                        {cat.category.includes('Electricity') ? '⚡'
                          : cat.category.includes('Gas') ? '🔥' : '💧'}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
                    <ul className="text-sm text-gray-700 space-y-1 mb-5">
                      {(p.features || []).map(f => (
                        <li key={f}>✓ {f}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() =>
                        openQuote({
                          meterType: cat.category.replace('Smart ', '').replace(' Meters', ''),
                          message: `I'm interested in: ${p.name}`,
                        })
                      }
                      className="btn-primary mt-auto"
                    >
                      Request Quote
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}