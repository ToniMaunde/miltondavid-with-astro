import { format } from "date-fns";

type TDatePattern = "MMM dd yyyy" | "yyyy-MM-dd";

export function formatDate(date: Date, pattern: TDatePattern) {
  return format(date, pattern);
}
