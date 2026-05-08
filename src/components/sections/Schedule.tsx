import { Reveal } from "@/components/Reveal";
import { Clock } from "lucide-react";

const rows = [
  { day: "Segunda a Quinta-feira", hours: "06:00 – 22:00" },
  { day: "Sexta-feira", hours: "06:00 – 22:00" },
  { day: "Sábado", hours: "07:00 – 15:00" },
  { day: "Domingo", hours: "Fechado", closed: true },
];

export function Schedule() {
  return (
    <section id="horarios" className="relative py-28 px-6 bg-card/40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-primary font-display tracking-[0.3em] text-sm">HORÁRIOS</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              QUANDO <span className="text-gradient-fire">VOCÊ QUISER</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-glow">
            <div className="bg-gradient-fire px-6 py-4 flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary-foreground" />
              <span className="font-display tracking-widest text-primary-foreground">FUNCIONAMENTO</span>
            </div>
            <div className="divide-y divide-border">
              {rows.map((r) => (
                <div key={r.day} className="flex items-center justify-between px-6 py-5 hover:bg-primary/5 transition-colors">
                  <span className="font-medium text-foreground">{r.day}</span>
                  <span className={`font-display text-2xl tracking-wide ${r.closed ? "text-muted-foreground" : "text-gradient-fire"}`}>
                    {r.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6 italic">
            Horários especiais em feriados podem variar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
