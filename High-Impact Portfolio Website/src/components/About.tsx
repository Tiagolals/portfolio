import { motion } from "motion/react";

export function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-purple-900 py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase tracking-tight mb-12 text-white leading-tight">
            Transformo Ideias em Impacto Visual
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-white/90 leading-relaxed">
            <p>
              Design, vídeo, foto e web com estética forte e execução rápida.
            </p>

            <p>
              Meu foco é criar experiências que chamam atenção e conectam.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 pt-16 border-t border-white/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl md:text-3xl mb-2 text-white uppercase tracking-tight">Foco</div>
                <div className="text-sm text-white/70">
                  Design + Vídeo<br />Foto + Web
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-2 text-white uppercase tracking-tight">Estilo</div>
                <div className="text-sm text-white/70">
                  Bold • Clean<br />Moderno
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-2 text-white uppercase tracking-tight">Entrega</div>
                <div className="text-sm text-white/70">
                  Visual forte<br />e direto
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl mb-2 text-white uppercase tracking-tight">Objetivo</div>
                <div className="text-sm text-white/70">
                  Impacto +<br />resultado
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
    </section>
  );
}
