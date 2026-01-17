import { motion } from "motion/react";
import { Palette, Video, Image, Code } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Design Gráfico",
    description: "Identidades visuais e peças que chamam atenção e comunicam.",
  },
  {
    icon: Video,
    title: "Edição de Vídeo",
    description: "Edição dinâmica com ritmo, clareza e impacto.",
  },
  {
    icon: Image,
    title: "Edição de Foto",
    description: "Tratamento, manipulação e acabamento profissional.",
  },
  {
    icon: Code,
    title: "Web Design",
    description: "Layouts modernos pensados pra conversão e experiência.",
  },
];

export function Services() {
  return (
    <section className="relative bg-white text-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl uppercase tracking-tight mb-4">
            Tiago Brito
          </h2>
          <div className="w-32 h-1 bg-orange-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-orange-500 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              <h3 className="text-3xl md:text-4xl mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
