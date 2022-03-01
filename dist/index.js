"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTrad = exports.toSimp = void 0;
const main = (data, ...args) => args.join("").replace(/[^\x00-\xFF]/g, (s) => (s in data ? data[s] : s));
exports.toSimp = (...args) => main("", ...args);
exports.toTrad = (...args) => main("", ...args);
