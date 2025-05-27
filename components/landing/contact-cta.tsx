"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Phone, Loader2 } from "lucide-react";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xjkwnyog", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });

    form.reset();
    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative bg-white py-20 px-4 md:px-10 lg:px-20 font-raleway"
    >
      {/* Toast */}
      {submitted && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#4b8de8] text-white px-6 py-4 rounded-2xl shadow-xl text-center text-lg font-readex">
          ✅ Your message has been sent!
        </div>
      )}

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mt-10">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#174f97] font-readex">
            Experiencing Tech Issues Right Now?
          </h2>
          <p className="text-[#000000] text-lg">
            Get the tech support you need today without any commitment — just
            reliable service to keep your business moving forward.
          </p>

          {/* Contact Info Bento Box */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#3e76c3] text-white p-6 rounded-xl hover:bg-[#2f64a7] transition">
              <a href="tel:5806564279" className="flex items-start gap-4">
                <Phone size={24} className="mt-1" />
                <div>
                  <h4 className="text-lg font-semibold font-readex">
                    Call Now
                  </h4>
                  <p>(580) 656-4279</p>
                </div>
              </a>
            </div>
            <div className="bg-[#3e76c3] text-white p-6 rounded-xl flex items-start gap-4">
              <MapPin size={24} className="mt-1" />
              <div>
                <h4 className="text-lg font-semibold font-readex">
                  Our Office
                </h4>
                <p>
                  812 W Main St.
                  <br />
                  Duncan, OK 73533
                </p>
              </div>
            </div>
            <div className="bg-[#3e76c3] text-white p-6 rounded-xl hover:bg-[#2f64a7] transition">
              <a
                href="mailto:support@pcwizard-ok.com"
                className="flex items-start gap-4"
              >
                <Mail size={24} className="mt-1" />
                <div>
                  <h4 className="text-lg font-semibold font-readex">Email</h4>
                  <p>support@pcwizard-ok.com</p>
                </div>
              </a>
            </div>
            <div className="bg-[#3e76c3] text-white p-6 rounded-xl flex items-start gap-4">
              <Clock size={24} className="mt-1" />
              <div>
                <h4 className="text-lg font-semibold font-readex">Hours</h4>
                <p>
                  Mon - Fri: 8am - 6pm
                  <br />
                  24/7 Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="bg-[#f3f6fb] p-10 rounded-xl shadow-md mt-4 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#174f97] font-readex">
            Get Your Free Consultation
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
              />
            </div>
            <input
              type="text"
              name="firm"
              placeholder="Law Firm Name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            />
            <textarea
              name="message"
              placeholder="Tell us about your current IT challenges or goals..."
              rows={4}
              className="border border-gray-300 rounded-md px-4 py-2 w-full text-black"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4b8de8] hover:bg-[#3e76c3] text-white px-6 py-3 rounded-md font-semibold w-full flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? "Sending..." : "Schedule Consultation →"}
            </button>
            <p className="text-xs text-center text-gray-500">
              By submitting this form, you agree to our Privacy Policy and Terms
              of Service.
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
