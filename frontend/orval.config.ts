export default {
	books: {
		input: "../backend/openapi.json", // adjust path if needed
		output: {
			target: "src/__generated__/api/books.generated.ts",
			client: "react-query",
			httpClient: "axios",
			mode: "tags-split",
			schemas: "src/__generated__/api/model",
			clean: true,
			prettier: false,
			override: {
				mutator: {
					path: "src/api/axios-instance.ts",
					name: "axios-nstance",
				},
				zod: true, // enable zod validation generation
			},
		},
	},
};
