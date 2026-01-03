import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah state saat scroll lebih dari 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Saya", href: "#about" },
    { name: "Proyek", href: "#projects" },
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
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

  // --- Framer Motion Variants ---
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled || isOpen
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-gray-200 dark:border-white/5 shadow-sm py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 max-w-8xl flex justify-between items-center">
        <div
          className="logo cursor-pointer z-50 flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Portfo<span className="text-accent">lio.</span>
          </h1>
        </div>

        {/* --- 2. DESKTOP MENU (Modern Pill Style) --- */}
        <ul className="hidden md:flex items-center gap-2 font-medium text-sm">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-accent dark:hover:text-accent transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Separator kecil */}
          <li className="h-6 w-px bg-gray-300 dark:bg-white/10 mx-2"></li>

          {/* Theme Toggle di Desktop */}
          <li>
            <ThemeToggle />
          </li>

          <li className="ml-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Me
            </a>
          </li>
        </ul>

        {/* --- 3. MOBILE CONTROLS --- */}
        <div className="flex items-center gap-4 md:hidden z-50">
          {/* Toggle Theme Mobile */}
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white focus:outline-none p-2 -mr-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7 hover:text-accent transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* --- 4. MOBILE MENU OVERLAY (Staggered Animation) --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 bg-white/95 dark:bg-[#0a0a0a]/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-6 font-medium text-2xl">
              {navLinks.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-800 dark:text-gray-200 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}

              <motion.li variants={itemVariants} className="mt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-block px-8 py-3 rounded-full bg-accent text-white font-bold shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.23)] hover:-translate-y-1 transition-all"
                >
                  Contact Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
