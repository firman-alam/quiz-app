export const firstLetterCaps = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const parseQuotes = (str: string) => {
  return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
};

export const handleShuffle = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
