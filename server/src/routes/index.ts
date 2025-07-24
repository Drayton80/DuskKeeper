import { Router } from "express";

import actionsRoutes from "./actions.routes";

const router = Router();

router.use(actionsRoutes);

export default router;
