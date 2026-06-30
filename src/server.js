import express from "express";
import "dotenv/config";
import server from "./server/index.js";

const port = process.env.PORT || 3000;
const host = process.env.HOST;

server.listen(port, () => {
  console.log(`Server running at ${host}:${port}`);
});
