import hero from "@/assets/hero-gym.jpg";
import { Embers } from "@/components/Embers";
import { Flame, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={hero} alt="Atleta em treino na New Fenix Fitness" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/80" />
      <Embers count={35} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-20">
        <div className="animate-fade-up inline-flex items-center gap-2 border border-primary/40 rounded-full px-4 py-1.5 mb-8 bg-background/40 backdrop-blur">
          <Flame className="h-4 w-4 text-primary" />
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Academia em São Paulo</span>
        </div>
        <h1 className="animate-fade-up font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] leading-[0.9] mb-6" style={{ animationDelay: "0.1s" }}>
          RENOVE SEU <br />
          <span className="text-gradient-fire">CORPO E MENTE</span>
        </h1>
        <p className="animate-fade-up max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10" style={{ animationDelay: "0.25s" }}>
          Como uma fênix, ressurja mais forte. Treinos de alta performance em musculação e CrossFit
          para transformar seu corpo, sua mente e sua história.
        </p>
        <div className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://wa.me/5511970200631"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-fire text-primary-foreground font-display text-lg tracking-widest px-8 py-4 rounded-md hover:scale-105 transition-transform animate-pulse-glow"
          >
            VENHA TREINAR
          </a>
          <a
            href="#sobre"
            className="border border-primary/50 text-foreground font-display text-lg tracking-widest px-8 py-4 rounded-md hover:bg-primary/10 hover:border-primary transition-all"
          >
            CONHEÇA A ACADEMIA
          </a>
        </div>
      </div>

      <a href="#sobre" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-primary transition-colors">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
