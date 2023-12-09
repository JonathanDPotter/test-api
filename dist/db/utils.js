"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const query = (qryStr, values) => {
    return new Promise((resolve, reject) => {
        index_1.default.query(qryStr, values, (err, results) => {
            if (err)
                reject(err);
            resolve(results);
        });
    });
};
exports.default = query;
//# sourceMappingURL=utils.js.map