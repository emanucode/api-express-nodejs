import { Router } from "express";
import {
  getAllProducts,
  searchProducts,
  getProductById,
} from "../controllers/products.controller.js";

const router = Router();

export default router;

router.get("/products", getAllProducts);
router.get("/products/search", searchProducts);
router.get("/products/:id", getProductById);
