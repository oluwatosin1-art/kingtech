import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || 'YOUR_CONTACT_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || 'YOUR_RECAPTCHA_SITE_KEY';

const initial = { name: '', phone: '', email: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async e => {
    e.preventDefault();
    setError('');
    if (!captcha) { setError('Please complete the reCAPTCHA.'); return; }
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, {
        ...form,
        to_email: 'info@kingstechtronics.com',
        reply_to: form.email,
        subject: `Contact: ${form.subject}`,
      }, PUBLIC_KEY);
      setDone(true);
      setForm(initial);
      setCaptcha(null);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-green-500 text-white grid place-items-center text-2xl">✓</div>
        <h3 className="text-xl font-bold text-green-800 mb-1">Thank you!</h3>
        <p className="text-green-700">Your message has been sent. We'll respond shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
      <div><label className="label">Full Name *</label>
        <input required name="name" value={form.name} onChange={onChange} className="input" /></div>
      <div><label className="label">Phone Number *</label>
        <input required name="phone" value={form.phone} onChange={onChange} className="input" /></div>
      <div className="sm:col-span-2"><label className="label">Email Address *</label>
        <input required type="email" name="email" value={form.email} onChange={onChange} className="input" /></div>
      <div className="sm:col-span-2"><label className="label">Subject *</label>
        <input required name="subject" value={form.subject} onChange={onChange} className="input" /></div>
      <div className="sm:col-span-2"><label className="label">Message *</label>
        <textarea required name="message" rows={5} value={form.message} onChange={onChange} className="input" /></div>
      <div className="sm:col-span-2">
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptcha} />
      </div>
      {error && <p className="sm:col-span-2 text-red-600 text-sm">{error}</p>}
      <button disabled={loading} className="btn-primary sm:col-span-2 disabled:opacity-60">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}