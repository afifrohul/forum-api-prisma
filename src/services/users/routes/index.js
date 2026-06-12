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

/**
 * @swagger
 * /register:
 *   post:
 *     summary: POST register
 *     description: Test
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         avatar:
 *                           type: string
 */
router.post("/register", validate(registerPayloadSchema), register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: POST login
 *     description: Test
 *     tags:
 *       - users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 */
router.post("/login", validate(loginPayloadSchema), login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get All Users
 *     description: Get list of users
 *     tags:
 *       - users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       avatar:
 *                         type: string
 */
router.get("/users", authenticateToken, getAllUsers);

/**
 * @swagger
 * /users/me:
 *   get:
 *     summary: Get Own Profile
 *     description: Test
 *     tags:
 *       - users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         avatar:
 *                           type: string
 */
router.get("/users/me", authenticateToken, getOwnProfile);

export default router;
