import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

// 🔑 Replace these with your credentials from https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN || 'YOUR_TEMPLATE_ID';
const EMAILJS_TEMPLATE_AUTOREPLY = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY || 'YOUR_AUTOREPLY_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY';

const initial = {
  name: '', phone: '', email: '',
  meterType: '', service: '', propertyType: '',
  location: '', quantity: '', message: '',
};

export default function QuoteForm({ prefill = {}, onSuccess, compact = false }) {
  const formRef = useRef();
  const [form, setForm] = useState({ ...initial, ...prefill });
  const [file, setFile] = useState(null);
  const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    if (!captcha) { setError('Please complete the reCAPTCHA.'); return; }
    setLoading(true);
    try {
      const baseParams = {
        ...form,
        subject: `New Quote Request - ${form.name}`,
        to_email: 'info@kingstechtronics.com',
        reply_to: form.email,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ADMIN, baseParams, EMAILJS_PUBLIC_KEY);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_AUTOREPLY, baseParams, EMAILJS_PUBLIC_KEY);

      // Optional: upload photo via EmailJS attachments requires FileReader -> base64 in advanced plans.
      // Keep file optional; store locally for admin to follow up.

      setDone(true);
      setForm(initial);
      setFile(null);
      setCaptcha(null);
      onSuccess?.();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-500 text-white grid place-items-center text-2xl">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-1">Thank you!</h3>
        <p className="text-green-700">We have received your request. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="label">Full Name *</label>
        <input required name="name" value={form.name} onChange={onChange} className="input" placeholder="John Doe" />
      </div>
      <div>
        <label className="label">Phone / WhatsApp *</label>
        <input required name="phone" value={form.phone} onChange={onChange} className="input" placeholder="+234 800 000 0000" />
      </div>
      <div className="sm:col-span-2">
        <label className="label">Email *</label>
        <input required type="email" name="email" value={form.email} onChange={onChange} className="input" placeholder="you@example.com" />
      </div>
      <div>
        <label className="label">Type of Meter Needed *</label>
        <select required name="meterType" value={form.meterType} onChange={onChange} className="input">
          <option value="">Select...</option>
          <option>Electricity</option>
          <option>Gas</option>
          <option>Water</option>
          <option>Multiple</option>
        </select>
      </div>
      <div>
        <label className="label">Service Needed *</label>
        <select required name="service" value={form.service} onChange={onChange} className="input">
          <option value="">Select...</option>
          <option>New Installation</option>
          <option>Replacement / Upgrade</option>
          <option>Repair</option>
          <option>Bulk Installation</option>
        </select>
      </div>
      <div>
        <label className="label">Property Type *</label>
        <select required name="propertyType" value={form.propertyType} onChange={onChange} className="input">
          <option value="">Select...</option>
          <option>Home</option>
          <option>Office</option>
          <option>Estate</option>
          <option>Factory</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="label">Number of Meters *</label>
        <input required type="number" min="1" name="quantity" value={form.quantity} onChange={onChange} className="input" placeholder="1" />
      </div>
      <div className="sm:col-span-2">
        <label className="label">Location / Address *</label>
        <input required name="location" value={form.location} onChange={onChange} className="input" placeholder="Area, city, state" />
      </div>
      <div className="sm:col-span-2">
        <label className="label">Message / Additional Details</label>
        <textarea name="message" rows={compact ? 3 : 4} value={form.message} onChange={onChange} className="input" placeholder="Anything else we should know?" />
      </div>
      <div className="sm:col-span-2">
        <label className="label">Upload Photo (optional)</label>
        <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="block w-full text-sm" />
      </div>
      <div className="sm:col-span-2">
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptcha} />
      </div>
      {error && <p className="sm:col-span-2 text-red-600 text-sm">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary sm:col-span-2 disabled:opacity-60">
        {loading ? 'Sending...' : 'Submit Quote Request'}
      </button>
    </form>
  );
}