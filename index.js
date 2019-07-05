const toMatchSchema = (received, schema, options) => {
	const validationResult = schema.validate(received, options);
	const pass = !validationResult.error;
	const error = validationResult.error;

	if (pass) {
		return {
			message: () => error.annotate(),
			pass: true,
		};
	} else {
		return {
			message: () => error.annotate(),
			pass: false,
		};
	}
};


const jestExpect = global.expect;

if (jestExpect !== undefined) {
	jestExpect.extend({
		toMatchSchema,
	});
} else {
	console.error(
		"Unable to find Jest's global expect."
	);
};
