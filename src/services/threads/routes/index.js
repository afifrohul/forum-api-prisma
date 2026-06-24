import express from "express";
import { validate } from "../../../middlewares/validate.js";
import { createThreadPayloadSchema } from "../../../services/threads/validator/schema.js";
import authenticateToken from "../../../middlewares/auth.js";
import {
  createThread,
  getAllThreads,
  getDetailThread,
} from "../controllers/thread-controller.js";

const router = express.Router();

router.post(
  "/threads",
  authenticateToken,
  validate(createThreadPayloadSchema),
  createThread,
);

router.get("/threads", getAllThreads);

router.get("/threads/:id", getDetailThread)

export default router;
