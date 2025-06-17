export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4">Have questions or need help? Reach out to our support team!</p>
      <form className="bg-white rounded-lg shadow p-8 flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" required />
        <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" required />
        <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows={4} required />
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Send Message</button>
      </form>
    </div>
  );
}
