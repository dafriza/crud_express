import { Segments, Joi } from "celebrate";

export default {
	[Segments.BODY]: Joi.object().keys({
		title: Joi.string().required(),
		price: Joi.number().required(),
		description: Joi.string().required(),
		image: Joi.string().uri().required(),
		category: Joi.alternatives()
			.try(
				Joi.string().valid("electronics"),
				Joi.string().valid("jewelry"),
				Joi.string().valid("men's clothing"),
				Joi.string().valid("women's clothing")
			)
			.required(),
	}),
};
