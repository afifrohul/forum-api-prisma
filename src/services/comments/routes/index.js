import express from "express";
import { validate } from "../../../middlewares/validate.js";
import { createCommentPayloadSchema } from "../../comments/validator/schema.js";
import authenticateToken from "../../../middlewares/auth.js";
import { createComment } from "../controllers/comment-controller.js";

const router = express.Router();

router.post(
  "/threads/:threadId/comments",
  authenticateToken,
  validate(createCommentPayloadSchema),
  createComment,
);

export default router;
