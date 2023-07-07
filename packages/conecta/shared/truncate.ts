export function truncate(text?: string, limit: number = 100) {
  if (!text) {
    return '';
  }

  if (text.length <= limit) {
    return text;
  }

  const truncatedText = text.substring(0, limit);

  return `${truncatedText}...`;
}
