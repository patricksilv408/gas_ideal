import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pushToDataLayer = (
  eventName: string,
  eventParams: Record<string, string | number | undefined>,
) => {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  } catch (e) {
    console.error("Error pushing to dataLayer:", e);
  }
};