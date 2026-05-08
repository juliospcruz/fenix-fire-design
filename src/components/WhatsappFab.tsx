import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5511970200631"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full bg-gradient-fire shadow-fire animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}
