import { format } from "date-fns";

export function formatDate(date: string) {
  const datePattern = "MMM dd yyyy";

  return format(new Date(date), datePattern);
}