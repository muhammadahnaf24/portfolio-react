import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Saya", href: "#about" },
    { name: "Proyek", href: "#projects" },
  ];

  // --- FUNGSI BARU: HANDLE SCROLL MANUAL ---
  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // 1. Matikan fungsi link bawaan (biar gak loncat kasar)

    // 2. Tutup menu mobile (kalau lagi buka)
    setIsOpen(false);

    // 3. Cari elemen tujuan dan scroll manual
    const element = document.querySelector(targetId);
    if (element) {
      // Hitung posisi dengan offset 80px (biar judul gak ketutupan navbar)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-surface/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="logo cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-2xl font-bold text-white tracking-tight hover:text-accent transition-colors">
            Portfo<span className="text-accent">lio.</span>
          </h1>
        </div>

        {/* --- DESKTOP MENU --- */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                // Pakai handleNavClick juga di desktop biar konsisten (halus + offset pas)
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-gray-300 hover:text-accent transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-5 py-2.5 rounded-md border border-accent text-accent hover:bg-accent hover:text-black font-semibold transition-all duration-300 cursor-pointer"
            >
              Kontak Saya
            </a>
          </li>
        </ul>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-50 relative"
        >
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-surface/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-8 font-medium text-2xl">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    // 👇 INI KUNCINYA: Pakai fungsi handleNavClick
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}

              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-block px-8 py-3 rounded-full bg-accent text-black font-bold mt-4 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
