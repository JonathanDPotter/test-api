"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("../db/utils"));
const getCharacters = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return id
        ? yield (0, utils_1.default)("SELECT * FROM characters WHERE ID=?", [id])
        : yield (0, utils_1.default)("SELECT * FROM characters");
});
const addCharacter = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, utils_1.default)("INSERT INTO characters SET ?", [data]);
});
const updateCharacter = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, utils_1.default)("UPDATE characters SET ? WHERE ID=?", [data, id]);
});
const deleteCharacter = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, utils_1.default)("DELETE FROM characters WHERE ID = ?", [id]);
});
const controller = {
    getCharacters,
    addCharacter,
    updateCharacter,
    deleteCharacter,
};
exports.default = controller;
//# sourceMappingURL=characters.controller.js.map