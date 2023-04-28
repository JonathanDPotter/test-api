"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.send("Express Typescript on Vercel");
});
router.get("/ping", (_req, res) => {
    return res.send("pong 🏓");
});
exports.default = router;
//# sourceMappingURL=index.js.map