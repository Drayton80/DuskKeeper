import { Router } from "express";
import { getActions, createActions, deleteAction, updateAction } from "../controllers";

const router = Router();

router.get("/actions", getActions);
router.post("/actions", createActions);
router.put("/actions/:id", updateAction);
router.delete("/actions/:id", deleteAction);

export default router;
