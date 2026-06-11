import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.json({
    status: "success",
    message: "Backend server successfully running!",
  });
});

export default router;
