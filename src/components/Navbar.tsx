import { useEffect, useState } from "react";
import phoenix from "@/assets/phoenix.png";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#convenios", label: "Convênios" },
  { href: "#horarios", label: "Horários" },
  { href: "#localizacao", label: "Localização" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img src={phoenix} alt="" className="h-10 w-10 transition-transform group-hover:scale-110" />
          <span className="font-display text-2xl tracking-wide">
            NEW <span className="text-gradient-fire">FENIX</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511970200631"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-fire text-primary-foreground font-display tracking-wider text-sm px-5 py-2.5 rounded-md hover:shadow-fire transition-all"
          >
            VENHA TREINAR
          </a>
        </nav>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
            <a href="https://wa.me/5511970200631" target="_blank" rel="noopener noreferrer" className="bg-gradient-fire text-primary-foreground font-display tracking-wider text-sm px-5 py-3 rounded-md text-center">
              VENHA TREINAR
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
