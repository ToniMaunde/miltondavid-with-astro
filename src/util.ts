import { format } from "date-fns";

export function articleDate(createdAt: string, updatedAt: string) {
  const datePattern = "MMM dd yyyy"
  if (createdAt === updatedAt) return format(new Date(createdAt), datePattern);
  return `Updated on ${format(new Date(updatedAt), datePattern)}` ;
}