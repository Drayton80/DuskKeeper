import { Router } from "express";
import { getActions, createActions } from "../controllers";

const router = Router();

router.get("/actions", getActions);
router.post("/actions", createActions);

export default router;
