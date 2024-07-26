import { createMap } from "@automapper/core";
import { ProductDto } from "../dto/productDto.mjs";
import { mapper } from "../mappings/mappers.mjs";
import { db } from "../models/main.mjs";
import repository from "../repository/productRepo.mjs";
import inversify from "inversify";
import "reflect-metadata";

const productRepo = new repository();
class productService {
	allProductServices = async (req, res) => {
		const { product } = db;
		await productRepo.allProductRepo(req, res, product);
	};
	createProductServices = async (req, res) => {
		const { product } = db;
		const mapProduct = createMap(mapper, req.body, ProductDto)[0][0];
		await productRepo.createProductRepo(req, res, product, mapProduct);
		// res.send(mapProduct);
	};
	putProductServices = async (req, res) => {
		const { product } = db;
		const mapProduct = createMap(mapper, req.body, ProductDto)[0][0];
		await productRepo.putProductRepo(req, res, product, mapProduct);
	};
}
inversify.decorate(inversify.injectable(), productService);
export default productService;
