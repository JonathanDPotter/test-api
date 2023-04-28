import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.send("Express Typescript on Vercel");
});

router.get("/ping", (_req: Request, res: Response) => {
  return res.send("pong 🏓");
});

export default router;