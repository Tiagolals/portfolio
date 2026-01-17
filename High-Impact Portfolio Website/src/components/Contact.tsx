import { motion } from "motion/react";
import { ArrowRight, Mail, Linkedin, Instagram, Link2 } from "lucide-react";

export function Contact() {
  return (
    <section className="relative bg-white text-black py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mb-8 leading-tight">
            Vamos Criar Algo
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 bg-clip-text text-transparent">
              Incrível
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Tem um projeto em mente? Vamos colaborar e dar vida à sua visão.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="mailto:tiago.el.brito@gmail.com"
            className="group inline-flex items-center gap-4 bg-black text-white px-12 py-6 text-lg hover:bg-orange-600 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
            Entrar em Contato
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 flex items-center justify-center gap-8"
          >
            <a
              href="https://www.linkedin.com/in/tiago-brito-analista-de-dados-programador/"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/tiagobrto?igsh=dmpsN2RiN2gxc2R0"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://tiagolals.github.io/Linkhub/"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-300"
            >
              <Link2 className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-7xl mx-auto mt-32 pt-12 border-t border-gray-200"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2026 Creative Portfolio. Todos os direitos reservados.</p>
          <p className="uppercase tracking-wider">Projetado e Desenvolvido com Visão</p>
        </div>
      </motion.div>
    </section>
  );
}
