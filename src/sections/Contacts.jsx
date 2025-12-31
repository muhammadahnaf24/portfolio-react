import { motion } from "framer-motion";
import { socialLinks } from "../data/socials";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Dekorasi Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        {/* Sub-heading */}
        <p className="text-accent font-mono mb-4 text-sm tracking-widest">
          What's Next?
        </p>

        {/* Heading Besar */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        {/* Paragraf Ajakan */}
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          Saya saat ini sedang terbuka untuk peluang baru, baik itu proyek
          freelance maupun full-time. Punya pertanyaan atau sekadar ingin
          menyapa? Inbox saya selalu terbuka!
        </p>

        {/* Tombol Besar (Main CTA) */}
        <motion.a
          href="mailto:emailmu@gmail.com" // Ganti emailmu di sini
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded text-lg 
                     hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300"
        >
          Say Hello 👋
        </motion.a>
      </motion.div>

      {/* --- BAGIAN FOOTER & SOSMED --- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-32 w-full border-t border-white/5 pt-10 flex flex-col items-center gap-6"
      >
        {/* Ikon Sosial Media */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300"
              title={link.name}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={link.icon} />
              </svg>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
