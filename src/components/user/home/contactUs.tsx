import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import { useState } from "react";

const socials = [
  { icon: <FaInstagram />, label: "Instagram", href: "#" },
  { icon: <FaLinkedin />, label: "LinkedIn", href: "#" },
  { icon: <FaDiscord />, label: "Discord", href: "#" },
];

const ContactUs = () => {
  const [copied, setCopied] = useState(false);
  const email = "uiuxclub@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="grid grid-cols-2 gap-8 items-stretch">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-bold text-white leading-tight mb-3">
            Let's <span className="text-[#7A38F0]">Connect</span>
          </h1>
          <p className="text-white/45 leading-relaxed mb-8">
            Have questions or want to collaborate? We'd love to hear from you —
            reach out anytime.
          </p>
        </div>

        <div>
          <div className="flex items-center justify-between bg-[#7A38F0]/10 border border-[#7A38F0]/30 rounded-2xl px-5 py-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7A38F0]/20 flex items-center justify-center text-[#A172F6]">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-0.5">
                  Email us
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-white font-semibold hover:text-[#A172F6] transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-[#7A38F0]/20 border border-[#7A38F0]/30 rounded-lg text-[#A172F6] text-xs font-semibold hover:bg-[#7A38F0]/30 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="text-white/40 text-xs uppercase tracking-wider mb-3">
            Find us on
          </p>
          <div className="flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/4 border border-white/8 hover:border-[#7A38F0]/50 hover:text-[#A172F6] transition-colors rounded-xl text-white/70 font-medium"
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/3 border border-white/8 rounded-2xl p-8">
        <p className="text-white font-bold text-lg mb-1">Send us a message</p>
        <p className="text-white/40 mb-6">We usually reply within 24 hours.</p>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-white/45 text-xs uppercase tracking-wider mb-1.5">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/10 focus:border-[#7A38F0]/50 rounded-xl px-4 py-2.5 text-white placeholder-white/25 outline-none"
            />
          </div>
          <div>
            <label className="block text-white/45 text-xs uppercase tracking-wider mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-white/5 border border-white/10 focus:border-[#7A38F0]/50 rounded-xl px-4 py-2.5 text-white placeholder-white/25 outline-none"
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-white/45 text-xs uppercase tracking-wider mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's it about?"
            className="w-full bg-white/5 border border-white/10 focus:border-[#7A38F0]/50 rounded-xl px-4 py-2.5 text-white placeholder-white/25 outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white/45 text-xs uppercase tracking-wider mb-1.5">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us more..."
            className="w-full bg-white/5 border border-white/10 focus:border-[#7A38F0]/50 rounded-xl px-4 py-2.5 text-white placeholder-white/25 outline-none resize-none"
          />
        </div>

        <button className="w-full py-3 bg-[#6331F4] flex items-center justify-center gap-2 text-white rounded-xl font-bold hover:bg-[#7A38F0] transition-colors">
          Send Message <FaArrowRight className="text-xs" />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
