export const firstLetterCaps = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const handleShuffle = (array: string[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};
