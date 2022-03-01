"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTW = exports.toCN = exports.main = void 0;
const cn_tw_1 = require("./data/cn_tw");
const tw_cn_1 = require("./data/tw_cn");
exports.main = (data, ...args) => args
    .join(" ")
    .replace(/[^\x00-\xFF]/g, str => str in data ? data[str] : str);
/**將 args 轉為 簡體中文
 * @param {string[]} args 繁體中文
 * @return {string} 簡體中文
 */
exports.toCN = (...args) => exports.main(tw_cn_1.tw_cn, ...args);
/**將 args 轉為 繁體中文
 * @param {string[]} args 簡體中文
 * @return {string} 繁體中文
 */
exports.toTW = (...args) => exports.main(cn_tw_1.cn_tw, ...args);
