import { motion } from "motion/react";

const projects = [
  {
    title: "BRAND IDENTITY",
    category: "Identidade Visual",
    image: "https://images.unsplash.com/photo-1616205255812-c07c8102cc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwbG9nbyUyMG1vY2t1cHxlbnwxfHx8fDE3Njg2NzY0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-orange-600/80 via-red-600/70 to-purple-900/80",
  },
  {
    title: "SOCIAL POSTS",
    category: "Posts & Social Media",
    image: "https://images.unsplash.com/photo-1759932021109-ffbec9251f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBncmlkfGVufDF8fHx8MTc2ODY3NjQ5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-pink-600/80 via-orange-600/70 to-yellow-500/80",
  },
  {
    title: "VIDEO EDIT",
    category: "Edição de Vídeo",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZXxlbnwxfHx8fDE3Njg1OTgxOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-blue-600/80 via-purple-600/70 to-pink-600/80",
  },
  {
    title: "PHOTO RETOUCH",
    category: "Edição de Foto / Manipulação",
    image: "https://plus.unsplash.com/premium_photo-1668485966810-cbd0f685f58f?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-green-600/80 via-teal-600/70 to-blue-700/80",
  },
  {
    title: "WEBSITE",
    category: "Websites / Landing Pages",
    image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3VwfGVufDF8fHx8MTc2ODYyNzI1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-yellow-600/80 via-orange-600/70 to-red-700/80",
  },
  {
    title: "UI DESIGN",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "from-purple-600/80 via-indigo-600/70 to-blue-800/80",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase tracking-tight mb-4 text-white">
            Oque Posso Fazer?
          </h2>
          <div className="w-32 h-1 bg-orange-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Color Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <p className="text-sm uppercase tracking-widest mb-3 text-white/80">
                    {project.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl uppercase tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
