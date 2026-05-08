import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Plans } from "@/components/sections/Plans";
import { Schedule } from "@/components/sections/Schedule";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";
import { WhatsappFab } from "@/components/WhatsappFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Fenix Fitness — Academia em São Paulo | Musculação e CrossFit" },
      { name: "description", content: "Renove seu corpo e mente na New Fenix Fitness. Musculação e CrossFit em São Paulo. Aceitamos Gympass, Totalpass e Wellhub." },
      { property: "og:title", content: "New Fenix Fitness — Renove seu corpo e mente" },
      { property: "og:description", content: "Academia em São Paulo com musculação e CrossFit. Treine com sua wellness pass." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Schedule />
        <Location />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}
