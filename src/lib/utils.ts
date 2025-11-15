import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pushToDataLayer = (
  eventName: string,
  eventParams: Record<string, string | number | undefined>,
) => {
  // Adicionada verificação para evitar erros caso o GTM não carregue
  if (window.dataLayer && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  } else {
    console.warn("Google Tag Manager's dataLayer is not available.");
  }
};