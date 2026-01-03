import { motion } from "framer-motion";
import { projectList } from "../data/projectList";

const Projects = () => {
  return (
    // Section Container: Putih di Light, Hitam di Dark
    <section
      id="projects"
      className="py-24 px-6 relative bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <div className="container mx-auto">
        {/* --- JUDUL SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
            <span className="text-emerald-500">02.</span>
            Proyek
            {/* Garis Horizontal: Abu terang di Light, Putih pudar di Dark */}
            <span className="hidden md:block h-px w-32 bg-gray-300 dark:bg-white/10 ml-4"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
            Berikut adalah beberapa proyek pilihan yang pernah saya kerjakan,
            mulai dari sistem backend hingga aplikasi web interaktif.
          </p>
        </motion.div>

        {/* --- GRID PROJECT --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // --- STYLING CARD (Sangat Penting) ---
              // Light: Putih, Shadow halus, Border tipis
              // Dark: Hitam surface, Border transparan, Shadow hilang
              className="group relative bg-white dark:bg-[#171717] p-8 rounded-xl 
                         border border-gray-200 dark:border-white/5 
                         shadow-sm hover:shadow-xl dark:shadow-none
                         dark:hover:border-emerald-500/50 
                         hover:-translate-y-2 transition-all duration-300"
            >
              {/* Efek Glow Halus saat Hover (Khusus Dark Mode) */}
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>

              {/* Ikon Folder & Links */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                {/* Ikon Folder */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-emerald-500 dark:text-emerald-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>

                {/* Link Icons (Github & External) */}
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Judul & Deskripsi */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    // Tag Style:
                    // Light: Bg Hijau Muda, Teks Hijau Tua
                    // Dark: Bg Hijau Transparan, Teks Hijau Neon
                    className="text-xs font-mono 
                               text-emerald-700 bg-emerald-50 
                               dark:text-emerald-300 dark:bg-emerald-500/10 
                               px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
