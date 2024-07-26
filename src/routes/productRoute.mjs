import { celebrate } from "celebrate";
import { Router } from "express";
import productSchema from "../schema/productSchema.mjs";
import "reflect-metadata";
import container from "../boot/boot.mjs";

const router = Router();
// const productController = new controller();
// const container = new inversify.Container();
const productController = container.get("productController");
router.get("/v1/products/", (req, res) => {
	// controller.allProducts(req, res);
	productController.allProducts(req, res);
});
router.post("/v1/products", celebrate(productSchema), (req, res) => {
	productController.createProduct(req, res);
});
router.put("/v1/products/:id", celebrate(productSchema), (req, res) => {
	const {
		params: { id },
	} = req;
	if (isNaN(id)) return res.sendStatus(400);
	productController.putProduct(req, res);
	// console.log(`id ${id}`);
});
export default router;
