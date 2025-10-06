export default {
  books: {
    input: "http://localhost:3000/api/swagger-json",
    output: {
      target: "src/__generated__/api/books.generated.ts",
      client: "react-query",
      httpClient: "axios",
      mode: "tags-split",
      schemas: "src/__generated__/api/model",
      clean: true,
      hooks: {
        afterAllFilesWrite: "bun run lint",
      },
      override: {
        mutator: {
          path: "src/api/axios-instance.ts",
          name: "axiosInstanceMutator",
        },
        zod: true,
      },
    },
  },
};
