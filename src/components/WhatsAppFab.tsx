import { site, whatsappLink } from "@/data/site";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFab() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}, I'd like some help.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.name} on WhatsApp`}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
