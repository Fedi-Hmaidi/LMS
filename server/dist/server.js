"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv").config();
//create server
app_1.app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=server.js.map