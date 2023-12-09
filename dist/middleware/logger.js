"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../db/utils"));
const logger = (req, _res, next) => {
    const { method, url } = req;
    const dateLog = new Date(Date.now()).toLocaleString();
    console.log(`\x1b[33m[${method}]\x1b[0m`, `path:\x1b[34m"${url}"\x1b[0m`, dateLog);
    (0, utils_1.default)("INSERT INTO logs SET ?", [
        { Request: `[${method}] path: ${url} - ${dateLog}` },
    ]);
    next();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map