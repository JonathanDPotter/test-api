"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, _req, res) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message });
};
exports.default = errorHandler;
//# sourceMappingURL=errorHanlder.js.map