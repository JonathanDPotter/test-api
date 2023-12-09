"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const routes_json_1 = __importDefault(require("./routes.json"));
const characters_routes_1 = __importDefault(require("./characters.routes"));
const requests_routes_1 = __importDefault(require("./requests.routes"));
const router = (0, express_1.Router)();
router.get("/", (_req, res, next) => {
    try {
        res.sendFile(path_1.default.join(__dirname, "../static/index.html"));
    }
    catch (error) {
        next(error);
    }
});
router.get("/home", (_req, res, next) => {
    try {
        res.redirect("/");
    }
    catch (error) {
        next(error);
    }
});
router.get("/add-character", (_req, res, next) => {
    try {
        res.sendFile(path_1.default.join(__dirname, "../static/addCharacter.html"));
    }
    catch (error) {
        next(error);
    }
});
router.get("/about", (_req, res, next) => {
    try {
        res.sendFile(path_1.default.join(__dirname, "../static/about.html"));
    }
    catch (error) {
        next(error);
    }
});
router.get("/healthcheck", (_req, res, next) => {
    try {
        res.sendStatus(200);
    }
    catch (error) {
        next(error);
    }
});
router.get("/routes", (_req, res, next) => {
    try {
        res.status(200).json(routes_json_1.default);
    }
    catch (error) {
        next(error);
    }
});
// add api routes
router.use("/api/characters", characters_routes_1.default);
router.use("/api/requests", requests_routes_1.default);
router.all("*", (_req, res, next) => {
    res.status(404).sendFile(path_1.default.join(__dirname, "../static/404.html"));
});
exports.default = router;
//# sourceMappingURL=index.routes.js.map