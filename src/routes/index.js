import { Router } from "express";

import users from "../services/users/routes/index.js";

const router = Router();

router.get("/v1", (req, res) => {
  return res.json({
    status: "success",
    message: "Backend server successfully running!",
  });
});

router.use("/v1/", users);

export default router;
