import express from "express";

import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

const router = express.Router();

router.get("/healthz", (req, res) => {
  console.log("api in good health");
  res.json({ status: "200" });
});

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/products", getProducts);
router.get("/product/:id", getProductById);

export default router;
