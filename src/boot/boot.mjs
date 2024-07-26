import { Container } from "inversify";
import productController from "../controller/productController.mjs";
import productService from "../service/productService.mjs";
import productRepo from "../repository/productRepo.mjs";
import "reflect-metadata";

const container = new Container();

/** Bind Repository */
container.bind(productController.name).to(productController);
container.bind(productService.name).to(productService);
container.bind(productRepo.name).to(productRepo);
export default container;
