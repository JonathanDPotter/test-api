"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 1337;
app.listen(port, () => {
    app.use(routes_1.default);
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map