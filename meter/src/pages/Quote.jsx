import QuoteForm from '../components/QuoteForm';

export default function Quote() {
  return (
    <>
      <section className="bg-brand-700 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-2">Request a Quote</h1>
          <p className="text-brand-50">Tell us what you need and we’ll get back within 24 hours.</p>
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </>
  );
}