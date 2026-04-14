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
          <h1 className="text-6xl font-bold text-black leading-tight mb-4">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-black/50 text-lg leading-relaxed mb-10">
            Have questions or want to collaborate? We'd love to hear from you —
            reach out anytime.
          </p>
        </div>

        <div>
          <div
            className="flex items-center justify-between rounded-2xl px-6 py-5 mb-6"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 flex items-center justify-center text-yellow-500 text-lg">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-black/50 text-sm uppercase tracking-wider mb-1">
                  Email us
                </p>
                <a
                  href={`mailto:${email}`}
                  className="text-black text-lg font-semibold hover:text-yellow-500 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg text-yellow-700 text-sm font-semibold transition-colors"
              style={{
                background: "linear-gradient(to right, #FFD700, #FFF176)",
              }}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <p className="text-black/50 text-sm uppercase tracking-wider mb-4">
            Find us on
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex-1 flex items-center justify-center gap-2 py-3 text-base transition-colors rounded-xl text-black/80 font-medium hover:text-yellow-600"
                style={{
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {s.icon} {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="rounded-2xl p-10"
        style={{
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(white, white), linear-gradient(to right, #FFD700, #FFF176)",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <p className="text-black font-bold text-xl mb-2">Send us a message</p>
        <p className="text-black/50 text-base mb-8">
          We usually reply within 24 hours.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-black/50 text-sm uppercase tracking-wider mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-base text-black placeholder-black/30 outline-none"
            />
          </div>
          <div>
            <label className="block text-black/50 text-sm uppercase tracking-wider mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-base text-black placeholder-black/30 outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-black/50 text-sm uppercase tracking-wider mb-2">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's it about?"
            className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-base text-black placeholder-black/30 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-black/50 text-sm uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            rows={5}
            placeholder="Tell us more..."
            className="w-full bg-yellow-50 border border-yellow-200 focus:border-yellow-400 rounded-xl px-4 py-3 text-base text-black placeholder-black/30 outline-none resize-none"
          />
        </div>

        <button
          className="w-full py-3.5 flex items-center justify-center gap-2 text-black text-base rounded-xl font-bold transition-colors"
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
