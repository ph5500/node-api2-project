const express = require("express");

const dbRouter = require("./data/db-router.js");

const server = express();

server.use(express.json());

server.use("/api/posts", dbRouter);
