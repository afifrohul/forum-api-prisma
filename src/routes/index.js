import "dotenv/config";

import { Router } from "express";

import users from "../services/users/routes/index.js";
import threads from "../services/threads/routes/index.js";
import comments from "../services/comments/routes/index.js";

const host = process.env.HOST;
const port = process.env.PORT;

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    baseUrl: {
      v1: `http://${host}:${port}/v1`,
    },
  });
});

router.get("/v1", (req, res) => {
  return res.json({
    status: "success",
    message: "Backend server successfully running!",
    version: "Forum API Version 1",
  });
});

router.use("/v1/", users);
router.use("/v1/", threads);
router.use("/v1/", comments);

export default router;
