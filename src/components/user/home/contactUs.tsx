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

const gradientBorder = {
  border: "2px solid transparent",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};

const ContactUs = () => {
  const [copied, setCopied] = useState(false);
  const email = "uiuxclub@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative">
      {/* Left Side - Text & Socials */}
      <div className="flex flex-col justify-between gap-8 md:gap-0 z-10">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-3 sm:mb-4">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-black/50 text-base sm:text-lg leading-relaxed mb-0">
            Have questions or want to collaborate? We'd love to hear from you —
            reach out anytime.
          </p>
        </div>

        <div>
          <div
            className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl sm:rounded-2xl px-4 sm:px-6 py-4 sm:py-5 mb-5 sm:mb-6 gap-4 sm:gap-0"
            style={gradientBorder}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-yellow-400/20 flex items-center justify-center text-yellow-500 text-base sm:text-lg shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-0.5 sm:mb-1">
                  Email us
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-black text-sm sm:text-lg font-semibold hover:text-yellow-500 transition-colors break-all"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg text-yellow-700 text-sm font-semibold transition-colors self-start sm:self-auto shrink-0"
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
            Find us on
          </p>
          <div className="flex gap-2 sm:gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 sm:py-3 text-sm sm:text-base transition-colors rounded-lg sm:rounded-xl text-black/80 font-medium hover:text-yellow-600"
                style={gradientBorder}
              >
                <span className="text-sm sm:text-base">{s.icon}</span>
                <span className="hidden xs:inline sm:inline">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div
        className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 z-20 md:z-auto"
        style={gradientBorder}
      >
        <p className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2">
          Send us a message
        </p>
        <p className="text-black/50 text-sm sm:text-base mb-6 sm:mb-8">
          We usually reply within 24 hours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div>
            <label className="block text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder-black/30 outline-none"
            />
          </div>
          <div>
            <label className="block text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder-black/30 outline-none"
            />
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <label className="block text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's it about?"
            className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder-black/30 outline-none"
          />
        </div>

        <div className="mb-5 sm:mb-6">
          <label className="block text-black/50 text-xs sm:text-sm uppercase tracking-wider mb-1.5 sm:mb-2">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Tell us more..."
            className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-black placeholder-black/30 outline-none resize-none"
          />
        </div>

        <button
          className="w-full py-3 sm:py-3.5 flex items-center justify-center gap-2 text-black text-sm sm:text-base rounded-lg sm:rounded-xl font-bold transition-colors"
          style={{
            background: "linear-gradient(to right, #FFD700, #FFF176)",
          }}
        >
          Send Message <FaArrowRight className="text-sm text-yellow-700" />
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
