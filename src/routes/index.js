import { Router } from "express";

import users from "../services/users/routes/index.js";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "Backend server successfully running!",
  });
});

router.use("/", users);

export default router;
