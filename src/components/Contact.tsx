"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden"
      id="contact"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                together.
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              I'm Akash GS, a Data Scientist specializing in AI, Machine Learning,
              and Python development. I build predictive models, computer vision
              systems, and data-driven applications. If you have a project related
              to AI or data analytics, feel free to contact me.
            </p>

            <div className="flex flex-col gap-6 mb-12">

              {/* Email */}
              <a
                href="mailto:akashgscareers@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <span className="text-lg">akashgscareers@gmail.com</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <SocialLink
                  href="https://github.com/akshgs"
                  icon={<GithubIcon />}
                  label="GitHub"
                />

                <SocialLink
                  href="https://www.linkedin.com/in/akash-gs369"
                  icon={<LinkedinIcon />}
                  label="LinkedIn"
                />
              </div>
            </div>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors transform hover:-translate-y-1"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white"
                required
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white"
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold"
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          <p className="text-white text-2xl font-bold tracking-widest uppercase mb-2">Akash GS</p>
          <p>© {new Date().getFullYear()} AKASH GS. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10"
    >
      {icon}
    </a>
  );
}

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m7 3v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
