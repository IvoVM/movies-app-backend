import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("Index Page");
});


export default router;
