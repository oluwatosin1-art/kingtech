import { useQuote } from '../context/QuoteContext';
import QuoteForm from './QuoteForm';

export default function QuoteModal() {
  const { open, closeQuote, prefill } = useQuote();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-2xl my-8 p-6 sm:p-8 relative">
        <button onClick={closeQuote} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none" aria-label="Close">×</button>
        <h2 className="text-2xl font-extrabold text-brand-700 mb-1">Request a Free Quote</h2>
        <p className="text-gray-600 text-sm mb-6">Fill the form and our team will get back to you within 24 hours.</p>
        <QuoteForm prefill={prefill} onSuccess={closeQuote} compact />
      </div>
    </div>
  );
}