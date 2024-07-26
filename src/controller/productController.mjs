import services from "../service/productService.mjs";
import inversify from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import "reflect-metadata";
import container from "../boot/boot.mjs";

const productService = new services();
// const productService = container.get("productServices");
class productController {
	
	allProducts = async (req, res) => {
		productService.allProductServices(req, res);
	};

	createProduct = async (req, res) => {
		// res.send(mapProduct);
		productService.createProductServices(req, res);
	};
	putProduct = async (req, res) => {
		productService.putProductServices(req, res);
	};
}
inversify.decorate(inversify.injectable(), productController);
export default productController;
