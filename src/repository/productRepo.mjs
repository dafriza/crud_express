import { createMap } from "@automapper/core";
import { mapper } from "../mappings/mappers.mjs";
import { ProductDto } from "../dto/productDto.mjs";
import inversify from "inversify";
import "reflect-metadata";

class productRepo {
	allProductRepo = (req, res, product) => {
		const {
			query: { limit, category, sort },
		} = req;
		const condition =
			category && sort && limit
				? { order: [[category, sort]], limit: parseInt(limit) }
				: {};
		product
			.findAll(condition)
			.then(data => {
				const mapProduct = createMap(mapper, data, ProductDto)[0][0];
				// res.send(data);
				res.status(200).send({ data: mapProduct, msg: "success" });
			})
			.catch(err => {
				res.status(500).send({
					message:
						err.message || "Some error occurred while creating the Tutorial.",
				});
			});
	};

	createProductRepo = (req, res, product, mapProduct) => {
		product
			.create(mapProduct)
			.then(data => {
				res.status(200).send({ data: mapProduct, msg: "success" });
			})
			.catch(err => {
				res.status(500).send({
					message:
						err.message || "Some error occurred while creating the Tutorial.",
				});
			});
	};
	putProductRepo = (req, res, product, mapProduct) => {
		const {
			params: { id },
		} = req;

		product
			.update(mapProduct, {
				where: {
					id: id,
				},
			})
			.then(data => {
				res.status(200).send({ data: mapProduct, msg: "success" });
			})
			.catch(err => {
				res.status(400).send({
					message:
						err.message || "Some error occurred while creating the Tutorial.",
				});
			});
	};
}
inversify.decorate(inversify.injectable(), productRepo);
export default productRepo;
