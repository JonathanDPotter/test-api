"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const config_1 = __importDefault(require("../config"));
const connection = mysql2_1.default.createPool(config_1.default.mysql);
exports.default = connection;
//# sourceMappingURL=index.js.map