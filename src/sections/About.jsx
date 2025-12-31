import { motion } from "framer-motion";
import { skills } from "../data/skills";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor (Angka Binary samar-samar) */}
      <div className="absolute top-10 right-0 text-9xl font-bold text-white/5 select-none pointer-events-none z-0">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-accent">01.</span>
            Tentang Saya
          </h2>

          {/* Paragraf Bio */}
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Halo! Saya adalah seorang pengembang perangkat lunak yang memiliki
              ketertarikan mendalam pada sisi{" "}
              <span className="text-white font-medium">
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
              <span className="text-accent">seni memecahkan masalah</span>.
            </p>
          </div>
        </motion.div>

        {/* --- KOLOM KANAN: SKILLS TERMINAL --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface rounded-xl border border-white/10 shadow-2xl overflow-hidden group hover:border-accent/30 transition-colors duration-300"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 p-3 flex items-center gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500 font-mono">
              root@developer:~
            </span>
          </div>

          {/* Terminal Body (Skills Grid) */}
          <div className="p-6 space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-sm font-mono text-accent mb-3 border-b border-white/5 pb-1 inline-block">
                  // {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded hover:bg-accent hover:text-black transition-all duration-300 cursor-default"
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
