import dbConfig from "../config/db.config.mjs";
import { Sequelize } from "sequelize";
import productModel from "./product.model.mjs";
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	operatorsAliases: false,
	pool: {
		max: dbConfig.max,
		min: dbConfig.min,
		acquire: dbConfig.acquire,
		idle: dbConfig.idle,
	},
});
const db = {
	Sequelize: Sequelize,
	sequelize: sequelize,
	product: productModel(sequelize, Sequelize),
};
export { db };
