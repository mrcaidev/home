import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-recommended"],
  prettier,
  {
    languageOptions: {
      parserOptions: {
        // The new `projectService` option should have been used instead.
        // See: https://typescript-eslint.io/packages/parser/#projectservice
        // But it has not yet been supported by eslint-plugin-astro.
        // See: https://github.com/ota-meshi/eslint-plugin-astro/issues/447
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { ignores: [".astro", "dist"] },
);
