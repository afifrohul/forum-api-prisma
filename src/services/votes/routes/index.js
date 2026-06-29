import express from "express";
import authenticateToken from "../../../middlewares/auth.js";
import {
  downVoteComment,
  downVoteThread,
  neutralVoteComment,
  neutralVoteThread,
  upVoteComment,
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

router.post(
  "/threads/:threadId/comments/:commentId/up-vote",
  authenticateToken,
  upVoteComment,
);
router.post(
  "/threads/:threadId/comments/:commentId/down-vote",
  authenticateToken,
  downVoteComment,
);
router.post(
  "/threads/:threadId/comments/:commentId/neutral-vote",
  authenticateToken,
  neutralVoteComment,
);

export default router;
