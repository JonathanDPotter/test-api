"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = (0, express_1.default)();
const router = express_1.default.Router();
const port = process.env.PORT || 1337;
router.get("/", (req, res) => {
    res.json("This works!");
});
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
    server.use(router);
});
//# sourceMappingURL=index.js.map