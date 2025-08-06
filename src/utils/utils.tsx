// lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, parseISO } from "date-fns";

export function twx(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}

export const convertToFullDate = (dateString: string): string => {
  const date = parseISO(dateString);

  const formatted = format(date, "MMMM d, yyyy h:mm a");
  return formatted;
};
