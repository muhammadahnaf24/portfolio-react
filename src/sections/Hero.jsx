import { motion } from "framer-motion";
// 👇 PENTING: Ganti 'profile.png' sesuai nama file fotomu di folder assets/images
import profileImg from "../assets/hero.png";

// Variabel animasi untuk teks agar muncul berurutan (staggered)
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
      className="min-h-screen flex items-center relative overflow-hidden py-20 px-6"
    >
      {/* === EFEK BACKGROUND CYBER === */}
      {/* 1. Orb Cahaya Hijau di pojok kanan atas */}
      <div className="absolute top-0 right-0 -z-10 w-150 h-150 bg-accent/20 blur-[150px] rounded-full opacity-70 mix-blend-screen"></div>
      {/* 2. Orb Cahaya kecil di kiri bawah */}
      <div className="absolute bottom-0 left-0 -z-10 w-75 h-75 bg-accent/10 blur-[100px] rounded-full opacity-50"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === KOLOM KIRI: TEKS === */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 z-10 order-2 md:order-1" // di HP jadi di bawah foto
        >
          {/* Greeting bergaya terminal */}
          <motion.p
            variants={itemVariants}
            className="text-accent font-mono tracking-wider"
          >
            &gt; Halooo, Perkenalkan 👋
          </motion.p>

          {/* Nama Besar */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter"
          >
            Muhammad Ahnaf
          </motion.h1>

          {/* Sub-headline (Role) */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold text-gray-400"
          >
            Saya seorang{" "}
            <span className="text-accent relative">
              Backend Developer
              {/* Garis bawah cyber */}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/50 rounded-full"></span>
            </span>
            .
          </motion.h2>

          {/* Deskripsi Singkat */}
          <motion.p
            variants={itemVariants}
            className="max-w-lg text-gray-400 text-lg leading-relaxed pt-4"
          >
            Spesialis dalam membangun sistem yang scalable, aman, dan efisien.
            Mengubah kopi menjadi kode backend yang solid di belakang layar.
          </motion.p>

          {/* Tombol Aksi */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all"
            >
              Lihat Project
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Kontak Saya
            </a>
          </motion.div>
        </motion.div>

        {/* === KOLOM KANAN: FOTO PROFIL (SIMPLE VERSION) === */}
        <motion.div
          // Animasi Masuk (Entrance) tetap ada agar halus
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
          className="relative flex justify-center items-center order-1 md:order-2"
        >
          {/* Container Foto (Sekarang menggunakan div biasa, bukan motion.div karena tidak butuh animasi looping) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* 1. Efek Glow diam di belakang (dikurangi opacity-nya biar lebih tenang) */}
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl scale-95"></div>

            {/* 2. Foto Utama */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-surface shadow-xl">
              {/* Ganti div pembungkus foto dengan ini */}
              {/* Ganti div pembungkus foto dengan ini */}
              <motion.div
                animate={{ y: [0, -15, 0] }} // Bergerak naik 15px lalu turun lagi
                transition={{
                  duration: 6, // Durasi 6 detik (sangat pelan & tenang)
                  repeat: Infinity, // Ulangi terus menerus
                  ease: "easeInOut", // Gerakan halus (tidak kaku)
                }}
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[6px] border-surface shadow-xl overflow-hidden"
              >
                <img
                  src={profileImg}
                  alt="Profile Photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
              <img
                src={profileImg}
                alt="Profile Photo"
                // Hanya ada efek zoom sedikit saat kursor diarahkan (hover)
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
