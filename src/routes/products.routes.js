import { Router } from "express";
import {
  getAllProducts,
  searchProducts,
} from "../controllers/products.controller.js";

const router = Router();

export default router;

router.get("/productos", getAllProducts);
router.get("/productos/search", searchProducts);
