import { Router } from "express";
import { getActions } from "../controllers";

const router = Router();

router.get("/actions", getActions);

export default router;
