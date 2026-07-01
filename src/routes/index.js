import "dotenv/config";

import { Router } from "express";

import users from "../services/users/routes/index.js";
import threads from "../services/threads/routes/index.js";
import comments from "../services/comments/routes/index.js";
import votes from "../services/votes/routes/index.js";
import leaderboards from "../services/leaderboards/routes/index.js";

const host = process.env.HOST;
const port = process.env.PORT;

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    docs: `${req.protocol}://${req.get("host")}`,
    baseUrl: {
      v1: `${req.protocol}://${req.get("host")}/v1`,
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
router.use("/v1/", votes);
router.use("/v1/", leaderboards);

export default router;
