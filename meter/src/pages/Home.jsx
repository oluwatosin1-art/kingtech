import { Link } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import Reveal from '../components/Reveal';
import electricity from '../images/electricity.jpg';
import gas from '../images/gas.jpg';
import smarthome from '../images/smarthome.jpg';
import water from '../images/water.jpg';

const heroImages = [
  { src: electricity, label: 'Electricity', emoji: '⚡' },
  { src: gas,         label: 'Gas',         emoji: '🔥' },
  { src: water,       label: 'Water',       emoji: '💧' },
];

const meters = [
  {
    title: 'Smart Electricity Meters',
    image: electricity,
    text: 'Single & three-phase, prepaid or postpaid. Accurate, remote-monitored, tamper-proof.',
  },
  {
    title: 'Smart Gas Meters',
    image: gas,
    text: 'Prepaid and smart gas meters that give you full control over gas consumption and billing.',
  },
  {
    title: 'Smart Water Meters',
    image: water,
    text: 'Ultrasonic and prepaid water meters for accurate measurement and leak detection.',
  },
];

const why = [
  { t: 'Certified Installers', d: 'Licensed & experienced technicians you can trust.' },
  { t: 'Fast Installation', d: 'Same-week scheduling and clean, professional work.' },
  { t: 'Accurate Billing', d: 'No more estimated bills — pay exactly for what you use.' },
  { t: 'Warranty Support', d: 'Post-installation support and maintenance.' },
  { t: 'Bulk & Estate Projects', d: 'We handle estates, landlords and commercial clients.' },
  { t: 'Transparent Pricing', d: 'Clear quotes. No hidden fees.' },
];

const steps = [
  { n: 1, t: 'Request Quote', d: 'Fill our short form or WhatsApp us.' },
  { n: 2, t: 'Site Assessment', d: 'We inspect and confirm requirements.' },
  { n: 3, t: 'Installation', d: 'Certified installers get the job done.' },
  { n: 4, t: 'Testing & Handover', d: 'We test, explain, and hand over.' },
];

const testimonials = [
  { name: 'Adebayo O.', role: 'Estate Manager, Lagos', quote: 'They installed 120 smart meters across our estate in under two weeks. Professional and reliable.' },
  { name: 'Chioma N.', role: 'Homeowner, Abuja', quote: 'My bills finally match my usage. The team was neat and explained everything clearly.' },
  { name: 'Musa I.', role: 'Factory Owner, Kano', quote: 'Bulk gas + electricity meter install — smooth process end to end.' },
];

export default function Home() {
  const { openQuote } = useQuote();

  return (
    <>
      {/* HERO — no reveal (must be visible immediately) */}
      <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-white/15 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-4">
              Certified · Fast · Trusted
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Smart Meter Installation for Energy, Gas &amp; Water
            </h1>
            <p className="text-brand-50 text-lg mb-8 max-w-xl">
              We install smart meters that put you in control of your usage and billing — for homes, offices, estates and factories.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => openQuote()}
                className="bg-white text-brand-700 font-semibold px-6 py-3 rounded-lg hover:bg-brand-50 transition"
              >
                Request a Free Quote
              </button>
              <Link
                to="/services"
                className="border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10 transition"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-3">
              {heroImages.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 120}
                  y={30}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-xl group"
                >
                  <img
                    src={item.src}
                    alt={`${item.label} meter`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center text-white">
                    <div className="text-2xl">{item.emoji}</div>
                    <div className="font-semibold text-sm">{item.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* METERS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-center mb-2">What We Install</h2>
          <p className="text-center text-gray-600 mb-10">Three meter categories. One trusted installer.</p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {meters.map((m, i) => (
            <Reveal
              key={m.title}
              delay={i * 120}
              className="rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition group flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{m.text}</p>
                <Link to="/products" className="text-brand-700 font-semibold text-sm hover:underline">
                  View products →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-center mb-2">Why Choose Us</h2>
            <p className="text-center text-gray-600 mb-10">Built on certifications, experience, and happy customers.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((w, i) => (
              <Reveal
                key={w.t}
                delay={(i % 3) * 120}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-100 text-brand-700 grid place-items-center font-bold mb-3">✓</div>
                <h3 className="font-bold mb-1">{w.t}</h3>
                <p className="text-sm text-gray-600">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-center mb-2">How It Works</h2>
          <p className="text-center text-gray-600 mb-10">Simple, transparent process from start to finish.</p>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140} className="text-center">
              <div className="w-14 h-14 rounded-full bg-brand-600 text-white grid place-items-center font-extrabold text-xl mx-auto mb-3">
                {s.n}
              </div>
              <h3 className="font-bold mb-1">{s.t}</h3>
              <p className="text-sm text-gray-600">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-extrabold text-center mb-10">What Our Clients Say</h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 120}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <footer className="text-sm font-semibold">
                  {t.name} <span className="text-gray-500 font-normal">— {t.role}</span>
                </footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal className="rounded-2xl bg-brand-700 text-white p-10 md:p-14 text-center" y={60}>
          <h2 className="text-3xl font-extrabold mb-3">Ready to upgrade to a smart meter?</h2>
          <p className="mb-6 text-brand-50">Get a free, no-obligation quote today.</p>
          <button
            onClick={() => openQuote()}
            className="bg-white text-brand-700 font-semibold px-8 py-3 rounded-lg hover:bg-brand-50 transition"
          >
            Request a Free Quote
          </button>
        </Reveal>
      </section>
    </>
  );
}