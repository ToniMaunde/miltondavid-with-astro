import { format } from "date-fns";

type TDatePattern = "MMM dd yyyy" | "yyyy-MM-dd";

export function formatDate(date: Date, pattern: TDatePattern): string {
  return format(date, pattern);
}

export function slugify(topic: string): string {
  return topic.toLowerCase().replaceAll(".", "").split(" ").join("-");
}

export function truncateText(text: string, length: number): string {
  return text.substring(0, length).concat("...");
}
