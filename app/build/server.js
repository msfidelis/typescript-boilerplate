"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer();
server.listen(3000, function () {
    console.log("Server rodando na porta 3000");
});
