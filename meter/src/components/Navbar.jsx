import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useQuote } from '../context/QuoteContext';
import kingsLogo from '../images/kinglogo.jpeg';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openQuote } = useQuote();

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-xl text-brand-700">
            <img src={kingsLogo} alt="KingsTechtronics Logo" className="h-16" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-700 hover:text-brand-700 hover:bg-gray-50'}`}>
                {l.label}
              </NavLink>
            ))}
            <button onClick={() => openQuote()} className="btn-primary ml-3 !py-2 !px-4 text-sm">
              Request a Quote
            </button>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-brand-700 bg-brand-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                {l.label}
              </NavLink>
            ))}
            <button onClick={() => { setOpen(false); openQuote(); }} className="btn-primary w-full mt-2">
              Request a Quote
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}