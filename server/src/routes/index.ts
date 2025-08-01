import { Router } from "express";

import actionsRoutes from "./actions.routes";
import actionCategoriesRoutes from "./actionCategories.routes";

const router = Router();

router.use(actionsRoutes);
router.use(actionCategoriesRoutes);

export default router;
