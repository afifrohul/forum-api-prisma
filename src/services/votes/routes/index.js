import express from "express";
import authenticateToken from "../../../middlewares/auth.js";
import {
  downVoteThread,
  neutralVoteThread,
  upVoteThread,
} from "../controllers/vote-controller.js";

const router = express.Router();

router.post("/threads/:threadId/up-vote", authenticateToken, upVoteThread);
router.post("/threads/:threadId/down-vote", authenticateToken, downVoteThread);
router.post(
  "/threads/:threadId/neutral-vote",
  authenticateToken,
  neutralVoteThread,
);

export default router;
