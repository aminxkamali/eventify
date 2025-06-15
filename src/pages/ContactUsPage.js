import React, { useState } from 'react';

export default function ContactUsPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        // Here you can add API call for sending the message
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0E141E] to-[#1A2233] text-white px-4 py-12">
            <h1 className="text-4xl font-bold mb-6 text-orange-500">Contact Us</h1>
            <p className="mb-8 text-lg text-gray-300 max-w-xl text-center">Have a question, suggestion, or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="bg-[#151922] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="p-3 rounded bg-[#23293a] text-white border border-[#21333F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="p-3 rounded bg-[#23293a] text-white border border-[#21333F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="p-3 rounded bg-[#23293a] text-white border border-[#21333F] focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-200"
                >
                    Send Message
                </button>
                {submitted && (
                    <div className="text-green-400 text-center mt-2">Thank you for contacting us! We'll respond soon.</div>
                )}
            </form>
        </div>
    );
}
