const main = (data: any, ...args: string[]): string =>
  args.join("").replace(/[^\x00-\xFF]/g, (s) => (s in data ? data[s] : s));

export const toSimp = (...args: string[]): string => main("", ...args);

export const toTrad = (...args: string[]): string => main("", ...args);
