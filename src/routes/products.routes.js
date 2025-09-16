import { Router } from "express";
import {
  getAllProducts,
  searchProducts,
  filtredProducts,
} from "../controllers/products.controller.js";

const router = Router();

export default router;

router.get("/products", filtredProducts);
router.get("/products/search", searchProducts);
