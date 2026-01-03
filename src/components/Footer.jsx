import { socialLinks } from "../data/socials"; // Import ini dibiarkan jika nanti ingin dipakai

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-white/5 pt-16 pb-8 relative overflow-hidden transition-colors duration-300">
      {/* 1. Dekorasi Glow Halus (Garis Atas) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-linear-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>

      <div className="container mx-auto px-6">
        {/* === BAGIAN ATAS (GRID LAYOUT) === */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* KOLOM 1 & 2: Brand & Deskripsi */}
          <div className="md:col-span-2 space-y-4">
            <h2
              onClick={handleScrollTop}
              className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight cursor-pointer inline-block group"
            >
              Portfo
              <span className="text-emerald-500 group-hover:text-emerald-600 dark:group-hover:text-white transition-colors">
                lio.
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
              Membangun solusi digital yang skalabel, aman, dan berfokus pada
              pengalaman pengguna. Let's build something amazing together.
            </p>
          </div>

          {/* (Opsional) Jika Anda ingin menampilkan Social Links di kolom kanan, bisa ditambahkan di sini */}
        </div>

        {/* GARIS PEMISAH */}
        <div className="border-t border-gray-200 dark:border-white/10 my-8"></div>

        {/* === BAGIAN BAWAH (COPYRIGHT & TOMBOL UP) === */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-xs text-center md:text-left font-mono">
            &copy; {currentYear}{" "}
            <span className="text-gray-900 dark:text-gray-200 font-semibold">
              Muhammad Ahnaf
            </span>
            . <br className="md:hidden" /> All rights reserved.
          </p>

          {/* TOMBOL BACK TO TOP */}
          <button
            onClick={handleScrollTop}
            // Button Style:
            // Light: Background abu sangat muda, Teks abu tua
            // Dark: Background transparan, Teks abu terang
            // Hover: Hijau Emerald
            className="group flex items-center gap-2 px-5 py-2 rounded text-sm transition-all duration-300
                       bg-gray-100 border border-gray-200 text-gray-600 
                       hover:bg-emerald-500 hover:text-white hover:border-emerald-500
                       dark:bg-white/5 dark:border-white/10 dark:text-gray-300 
                       dark:hover:bg-emerald-500 dark:hover:text-white"
          >
            <span>Back to Top</span>
            {/* Ikon Panah Atas */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
