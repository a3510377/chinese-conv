import { cn_tw as cn_twData } from "./data/cn_tw";
import { tw_cn as tw_cnData } from "./data/tw_cn";

export type dataType = typeof cn_twData | typeof tw_cnData;

const main = (data: dataType, ...args: string[]): string =>
  args
    .join("")
    .replace(/[^\x00-\xFF]/g, str =>
      str in data ? data[<keyof dataType>str] : str
    );

/**將 args 轉為 簡體中文
 * @param {string[]} args 繁體中文
 * @return {string} 簡體中文
 */
export const toCN = (...args: string[]): string => main(tw_cnData, ...args);

/**將 args 轉為 繁體中文
 * @param {string[]} args 簡體中文
 * @return {string} 繁體中文
 */
export const toTW = (...args: string[]): string => main(cn_twData, ...args);
