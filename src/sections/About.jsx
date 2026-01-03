import { motion } from "framer-motion";
import { skills } from "../data/skills";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      {/* Background Decor (Angka Binary) */}
      {/* Light: Abu sangat muda | Dark: Putih transparan */}
      <div className="absolute top-10 right-0 text-9xl font-bold text-gray-100 dark:text-white/5 select-none pointer-events-none z-0">
        0101
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* --- KOLOM KIRI: BIO --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Judul Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="text-emerald-500">01.</span>
            Tentang Saya
          </h2>

          {/* Paragraf Bio */}
          <div className="space-y-4 text-gray-700 dark:text-gray-400 text-lg leading-relaxed">
            <p>
              Halo! Saya adalah seorang pengembang perangkat lunak yang memiliki
              ketertarikan mendalam pada sisi{" "}
              <span className="text-gray-900 dark:text-white font-semibold">
                Backend Engineering
              </span>{" "}
              dan arsitektur sistem.
            </p>
            <p>
              Perjalanan coding saya dimulai ketika saya mencoba mengotomatisasi
              tugas sederhana, yang kemudian berkembang menjadi obsesi untuk
              membangun aplikasi web yang efisien dan *scalable*.
            </p>
            <p>
              Saat ini, saya fokus mendalami teknologi cloud dan microservices.
              Bagi saya, kode yang bersih bukan hanya tentang fungsi, tapi juga
              tentang{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                seni memecahkan masalah
              </span>
              .
            </p>
          </div>
        </motion.div>

        {/* --- KOLOM KANAN: SKILLS TERMINAL --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          // Container Terminal:
          // Light: Abu-abu muda (bg-gray-50) & Border abu (border-gray-200)
          // Dark: Hitam surface (bg-[#171717]) & Border transparan
          className="bg-gray-50 dark:bg-[#171717] rounded-xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden group hover:border-emerald-500/30 transition-colors duration-300"
        >
          {/* Terminal Header */}
          <div className="bg-gray-200 dark:bg-white/5 p-3 flex items-center gap-2 border-b border-gray-300 dark:border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-mono">
              root@developer:~
            </span>
          </div>

          {/* Terminal Body (Skills Grid) */}
          <div className="p-6 space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                {/* Judul Kategori Skill */}
                <h4 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mb-3 border-b border-gray-200 dark:border-white/5 pb-1 inline-block">
                  // {skillGroup.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      // Chip Skill:
                      // Light: Background putih, teks abu tua
                      // Dark: Background transparan, teks abu terang
                      className="text-sm text-gray-700 dark:text-gray-300 bg-white border border-gray-200 dark:bg-white/5 dark:border-transparent px-3 py-1 rounded hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all duration-300 cursor-default shadow-sm dark:shadow-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
