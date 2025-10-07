import { defineConfig } from "orval";

export default defineConfig({
  books: {
    input: "http://localhost:3000/api/swagger-json",
    output: {
      target: "src/__generated__/api/books.generated.ts",
      client: "react-query",
      httpClient: "axios",
      mode: "tags-split",
      schemas: "src/__generated__/api/model",
      clean: true,
      override: {
        mutator: {
          path: "src/lib/axios-instance.ts",
          name: "axiosInstanceMutator",
        },
      },
    },
    hooks: {
      afterAllFilesWrite: "pnpm run lint",
    },
  },
});
