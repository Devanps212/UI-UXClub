import { FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040714] border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-3">
              UIUX <span className="text-yellow-500">Club</span>
            </h2>
            <p className="text-white/50 max-w-md">
              Crafting beautiful digital experiences through design and
              collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/60">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contests
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Projects/Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-white/60">
              <li>
                <a
                  href="mailto:uiuxclub@email.com"
                  className="hover:text-[#A172F6] transition-colors"
                >
                  uiuxclub@email.com
                </a>
              </li>
              <li className="text-white/50">
                Made with ❤️ for designers & creators
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} UIUX Club. All rights reserved.
          </p>

          <div className="flex gap-6 text-white/50">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              <FaDiscord size={20} />
            </a>
          </div>

          <p className="text-white/40 text-sm">
            Privacy Policy • Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
