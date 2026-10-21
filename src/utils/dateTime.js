export function formattedDate(inputDate) {
  const date = new Date(inputDate);
  const result = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  }).format(date);
  return result;
}

export function formattedDateWithoutTime(inputDate) {
  const date = new Date(inputDate);
  const result = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  return result;
}
