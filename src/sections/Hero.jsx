import { motion } from "framer-motion";
import profileImg from "../assets/hero.png"; // Pastikan path ini benar

// --- VARIAN ANIMASI ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden py-20 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      {/* === EFEK BACKGROUND (Dynamic Light/Dark) === */}
      {/* 1. Orb Kanan Atas */}
      <div className="absolute top-0 right-0 -z-10 w-175 h-125 bg-emerald-300/30 dark:bg-emerald-500/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50 dark:opacity-70"></div>
      {/* 2. Orb Kiri Bawah */}
      <div className="absolute bottom-0 left-0 -z-10 w-75 h-75 bg-emerald-200/40 dark:bg-emerald-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen opacity-50"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-8xl">
        {/* === KOLOM KIRI: TEKS === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 z-10 order-2 md:order-1"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-emerald-600 dark:text-emerald-400 font-mono tracking-wider font-medium"
          >
            &gt; Halooo, Perkenalkan 👋
          </motion.p>

          {/* Nama Besar */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
          >
            Muhammad Ahnaf
          </motion.h1>

          {/* Sub-headline (Role) */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300"
          >
            Saya seorang{" "}
            <span className="text-emerald-500 relative inline-block">
              Backend Developer
              {/* Dekorasi Garis Bawah */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-500/40 rounded-full"></span>
            </span>
            .
          </motion.h2>

          {/* Deskripsi Singkat */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-gray-600 dark:text-gray-400 text-lg leading-relaxed pt-2"
          >
            Spesialis dalam membangun sistem yang scalable, aman, dan efisien.
            Mengubah kopi menjadi kode backend yang solid di belakang layar.
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
            >
              Kontak Saya
            </a>
          </motion.div>
        </motion.div>

        {/* === KOLOM KANAN: FOTO (Floating Animation) === */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          {/* Container Animasi Floating (Naik Turun) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0], // Efek melayang (floating)
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative"
          >
            {/* Lingkaran Glow di belakang foto (ikut float) */}
            <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/30 rounded-full blur-3xl transform scale-90 -z-10"></div>

            {/* Wrapper Foto Lingkaran */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-white dark:border-[#171717] shadow-2xl overflow-hidden">
              <img
                src={profileImg}
                alt="Muhammad Ahnaf"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
