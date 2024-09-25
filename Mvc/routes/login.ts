// src/routes/userRoutes.ts
import { Router } from "express";
import { createUser } from "../controllers/RegisterController";

const router = Router();

router.post("/", createUser);

export default router;
