import { Reveal } from "@/components/Reveal";

const plans = ["Totalpass", "Wellhub"];

export function Plans() {
  return (
    <section id="convenios" className="relative py-28 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="text-primary font-display tracking-[0.3em] text-sm">CONVÊNIOS ACEITOS</span>
          <h2 className="font-display text-5xl md:text-6xl mt-3 mb-4">
            TREINE USANDO SEU <span className="text-gradient-fire">BENEFÍCIO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Aceitamos os principais programas de bem-estar corporativo. Use seu plano e venha treinar conosco.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((p, i) => (
            <Reveal key={p} delay={i * 100}>
              <div className="group relative bg-card border border-border rounded-xl p-10 hover:border-primary/60 transition-all hover:shadow-fire">
                <div className="absolute inset-0 bg-gradient-fire opacity-0 group-hover:opacity-10 rounded-xl transition-opacity" />
                <div className="relative font-display text-3xl tracking-wider">{p}</div>
                <div className="relative text-xs uppercase tracking-[0.3em] text-muted-foreground mt-2">Aceito</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
