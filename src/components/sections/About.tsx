import phoenix from "@/assets/phoenix.png";
import { Reveal } from "@/components/Reveal";
import { Flame, Users, Trophy } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/20 rounded-full blur-3xl" />
            <img src={phoenix} alt="Fênix New Fenix Fitness" width={768} height={768} loading="lazy" className="relative w-full max-w-md mx-auto drop-shadow-[0_0_60px_oklch(0.7_0.21_45/0.6)]" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <span className="text-primary font-display tracking-[0.3em] text-sm">SOBRE NÓS</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 mb-6">
            FORÇA QUE <span className="text-gradient-fire">RENASCE</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            A New Fenix Fitness nasceu da crença de que cada pessoa carrega uma força capaz de
            transformar limites em conquistas. Aqui você encontra estrutura completa, equipe
            qualificada e uma comunidade que treina junto, evolui junto e celebra cada vitória.
            Ressurja mais forte. Ressurja como uma fênix.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Flame, label: "Energia", value: "Alta" },
              { icon: Users, label: "Comunidade", value: "Forte" },
              { icon: Trophy, label: "Resultados", value: "Reais" },
            ].map((s) => (
              <div key={s.label} className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/60 transition-colors">
                <s.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
