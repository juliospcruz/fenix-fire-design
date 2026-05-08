import phoenix from "@/assets/phoenix.png";
import { Reveal } from "@/components/Reveal";
import { Embers } from "@/components/Embers";
import { Phone, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <section className="relative py-28 px-6 bg-card/40 border-t border-border">
        <Embers count={20} />
        <div className="relative mx-auto max-w-4xl text-center">
          <Reveal>
            <img src={phoenix} alt="" width={768} height={768} loading="lazy" className="h-20 w-20 mx-auto mb-6 drop-shadow-[0_0_40px_oklch(0.7_0.21_45/0.7)]" />
            <h2 className="font-display text-5xl md:text-7xl mb-4">
              RENOVE SEU <span className="text-gradient-fire">CORPO E MENTE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Sua transformação começa com um passo. Fale com a gente agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/5511970200631"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-fire text-primary-foreground font-display text-lg tracking-widest px-8 py-4 rounded-md hover:scale-105 transition-transform animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                WHATSAPP (11) 97020-0631
              </a>
              <a
                href="tel:+5511970200631"
                className="inline-flex items-center gap-3 border border-primary/50 font-display text-lg tracking-widest px-8 py-4 rounded-md hover:bg-primary/10 transition-all"
              >
                <Phone className="h-5 w-5 text-primary" />
                (11) 97020-0631
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center h-14 w-14 border border-primary/50 rounded-md hover:bg-primary/10 transition-all"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <div className="border-t border-border py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={phoenix} alt="" className="h-7 w-7" />
            <span className="font-display tracking-wider">NEW <span className="text-gradient-fire">FENIX</span> FITNESS</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 New Fenix Fitness. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
