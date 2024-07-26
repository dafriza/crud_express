import express from "express";
import env from "dotenv";
import { db } from "./src/models/main.mjs";
import indexRoute from "./src/routes/indexRoute.mjs";
import { errors } from "celebrate";
import container from "./src/boot/boot.mjs";
import { InversifyExpressServer } from "inversify-express-utils";
import "reflect-metadata";
env.config();

const app = express();
const PORT = process.env.SERVER_PORT;
const server = new InversifyExpressServer(container);
// app.listen(PORT, () => {
// 	console.log(`Server is running port ${PORT}`);
// 	// console.log(container.get("productController"));
// });
server.build().listen(PORT, () => {
	console.log(`Server is running port ${PORT}`);
});
app.use(express.json());
app.use(indexRoute);

// schema database
// db.sequelize
// 	.sync({ force: true })
// 	.then(() => {
// 		console.log("Synced db");
// 	})
// 	.catch(err => {
// 		console.log(`Failed to sync db ${err}`);
// 	});

app.get("/", (req, res) => {
	// console.log("hello world");
});
app.use(errors());
