"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const [port, host, dbHost, user, password, database] = [
    process.env.PORT,
    process.env.HOST,
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PASS,
    process.env.DB_SCHEMA,
];
const server = { port, host };
const mysql = { host: dbHost, user, password, database };
exports.default = { server, mysql };
//# sourceMappingURL=index.js.map