"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const config_1 = __importDefault(require("./config"));
const errorHanlder_1 = __importDefault(require("./middleware/errorHanlder"));
const logger_1 = __importDefault(require("./middleware/logger"));
const server = (0, express_1.default)();
const { host, port } = config_1.default.server;
server.use(express_1.default.json());
server.use(express_1.default.static(path_1.default.join(__dirname, "./static")));
server.use(logger_1.default);
server.use(index_routes_1.default);
server.use(errorHanlder_1.default);
server.listen(port, () => console.log(`Server listening on ${host}:${port}`));
//# sourceMappingURL=server.js.map