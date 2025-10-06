import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
   
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
       <Header/>
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Have questions or want to get in touch? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>
      </section>


      <section className="max-w-5xl mx-auto px-6 py-16  gap-10">
 
        <div>
          <h2 className="text-3xl font-bold mb-6">Send us a message</h2>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition w-full"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                ✅ Message Sent!
              </h3>
              <p>Thank you, {formData.name}. We’ll get back to you soon.</p>
            </div>
          )}
        </div>

      </section>

      <Footer/>
    </div>
  );
}

export default Contact;
