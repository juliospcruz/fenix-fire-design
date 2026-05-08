import musc from "@/assets/musculacao.jpg";
import cross from "@/assets/crossfit.jpg";
import { Reveal } from "@/components/Reveal";
import { Dumbbell, Flame } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "MUSCULAÇÃO",
    emoji: "🏋️",
    img: musc,
    desc: "Treinos de força com equipamentos de ponta para todos os níveis. Acompanhamento técnico e planos personalizados para hipertrofia, condicionamento e estética.",
    bullets: ["Equipamentos completos", "Para todos os níveis", "Avaliação física inclusa"],
  },
  {
    icon: Flame,
    title: "CROSSFIT",
    emoji: "🔥",
    img: cross,
    desc: "Treinos funcionais em grupo, alta intensidade e variedade. Movimente-se, supere limites e descubra do que você é capaz ao lado de uma comunidade que vibra junto.",
    bullets: ["Aulas em grupo", "Alta intensidade", "Coach especializado"],
  },
];

export function Services() {
  return (
    <section id="modalidades" className="relative py-28 px-6 bg-card/40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-primary font-display tracking-[0.3em] text-sm">MODALIDADES</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              ESCOLHA SEU <span className="text-gradient-fire">FOGO</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 150}>
              <article className="group relative h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/60 hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={1280} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-gradient-fire text-primary-foreground p-3 rounded-lg shadow-fire">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-4xl mb-3">
                    {s.emoji} {s.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
