import { Router } from "express";
import { getActionCategories, createActionCategory } from "../controllers";

const router = Router();

router.get("/action-categories", getActionCategories);
router.post("/action-categories", createActionCategory);

export default router;
