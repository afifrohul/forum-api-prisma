import express from "express";
import {
  register,
  login,
  getAllUsers,
  getOwnProfile,
} from "../controllers/user-controller.js";
import { validate } from "../../../middlewares/validate.js";
import {
  registerPayloadSchema,
  loginPayloadSchema,
} from "../../../services/users/validator/schema.js";
import authenticateToken from "../../../middlewares/auth.js";

const router = express.Router();

router.post("/register", validate(registerPayloadSchema), register);
router.post("/login", validate(loginPayloadSchema), login);
router.get("/users", authenticateToken, getAllUsers);
router.get("/users/me", authenticateToken, getOwnProfile);

export default router;
