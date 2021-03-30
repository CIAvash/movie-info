export const concatTitleYear = (title: string, year: string): string => `${title} (${year})`;

export const isValid = (str: string): boolean => str !== undefined && str.toLowerCase() !== 'n/a' && str !== '';