import { Reveal } from "@/components/Reveal";
import { MapPin, Navigation } from "lucide-react";

const ADDRESS = "Av. Mariana Caligiori Ronchetti, 1139 – Jardim Peri – São Paulo-SP";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Avenida Mariana Caligiori Ronchetti, 1139, Jardim Peri, São Paulo, SP")}`;
const EMBED = `https://maps.google.com/maps?q=${encodeURIComponent("Avenida Mariana Caligiori Ronchetti 1139 Jardim Peri São Paulo")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

export function Location() {
  return (
    <section id="localizacao" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-primary font-display tracking-[0.3em] text-sm">LOCALIZAÇÃO</span>
            <h2 className="font-display text-5xl md:text-6xl mt-3">
              VENHA NOS <span className="text-gradient-fire">VISITAR</span>
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-5 gap-8 items-stretch">
          <Reveal className="md:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col">
              <div className="bg-gradient-fire inline-flex h-12 w-12 items-center justify-center rounded-lg shadow-fire mb-6">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl mb-3">ENDEREÇO</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{ADDRESS}</p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-fire text-primary-foreground font-display tracking-widest px-6 py-3 rounded-md hover:scale-105 transition-transform"
              >
                <Navigation className="h-4 w-4" />
                COMO CHEGAR
              </a>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-3">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-border shadow-glow">
              <iframe
                title="Mapa New Fenix Fitness"
                src={EMBED}
                className="w-full h-full min-h-[320px]"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
