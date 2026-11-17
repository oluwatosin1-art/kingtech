import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Contact Us</h1>
          <p className="text-brand-50">We reply fast — usually within a few hours.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">Get in touch</h2>
          <ul className="space-y-3 text-gray-700">
            <li>📞 <a href="tel:+23409075516392" className="hover:text-brand-700 font-medium">+234 907 551 392</a></li>
            <li>✉️ <a href="mailto:contact@kingstechtronics.com" className="hover:text-brand-700 font-medium">contact@kingstechtronics.com</a></li>
            <li>💬 <a href="https://wa.me/23409075516392" target="_blank" rel="noopener noreferrer" className="hover:text-brand-700 font-medium">Chat on WhatsApp</a></li>
            <li>📍 17, Tokunbo Alli Street, Ikeja, Lagos, Nigeria</li>
            <li>🕒 Mon–Sat: 8:00am – 6:00pm</li>
          </ul>
          <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
              className="w-full h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold mb-4">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </>
  );
}