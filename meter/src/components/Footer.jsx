import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-white font-extrabold text-lg mb-3">KingsTechtronics</h3>
          <p className="text-sm leading-relaxed">
            Certified smart meter installation for electricity, gas, and water. Accurate billing. Fast installation. Trusted nationwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-brand-500">Home</Link></li>
            <li><Link to="/products" className="hover:text-brand-500">Products</Link></li>
            <li><Link to="/services" className="hover:text-brand-500">Services</Link></li>
            <li><Link to="/about" className="hover:text-brand-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-500">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-500">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📞 <a href="tel:+23408109438094" className="hover:text-brand-500">+234 810 943 8094, 09075516392</a></li>
            <li>✉️ <a href="mailto:contact@kingstechtronics.com" className="hover:text-brand-500">contact@kingstechtronics.com</a></li>
            <li>📍 17, Tokunbo Alli Street, Ikeja, Lagos, Nigeria</li>
            <li>🕒 Mon–Sat: 8:00am – 6:00pm</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 hover:bg-brand-600">f</a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 hover:bg-brand-600">ig</a>
            <a href="#" aria-label="LinkedIn" className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 hover:bg-brand-600">in</a>
            <a href="https://wa.me/23408109438094" aria-label="WhatsApp" className="w-9 h-9 grid place-items-center rounded-full bg-gray-800 hover:bg-green-600">wa</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} KingsTechtronics. All rights reserved.
      </div>
    </footer>
  );
}