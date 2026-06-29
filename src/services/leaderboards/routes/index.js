import express from "express";
import { getLeaderboards } from "../controllers/leaderboard-controller.js";

const router = express.Router();

router.get("/leaderboards", getLeaderboards);

export default router;
