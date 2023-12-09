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
const express_1 = require("express");
const characters_controller_1 = __importDefault(require("../controllers/characters.controller"));
const router = (0, express_1.Router)();
router.get("/:id?", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.status(200).json(yield characters_controller_1.default.getCharacters(id));
    }
    catch (error) {
        next(error);
    }
}));
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json(yield characters_controller_1.default.addCharacter(req.body));
    }
    catch (error) {
        next(error);
    }
}));
router.put("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.status(200).json(yield characters_controller_1.default.updateCharacter(id, req.body));
    }
    catch (error) {
        next(error);
    }
}));
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        res.status(200).json(yield characters_controller_1.default.deleteCharacter(id));
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=characters.routes.js.map