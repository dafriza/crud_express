import { Router } from "express";
import productRoute from "./productRoute.mjs";
const router = Router();
router.use(productRoute);
export default router;
