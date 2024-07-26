export default (sequelize, Sequelize) => {
	const product = sequelize.define("products", {
		title: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		price: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		image: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		category: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	});

	return product;
};
