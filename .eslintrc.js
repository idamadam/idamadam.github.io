module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  extends: [
    "airbnb-typescript",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
  ignorePatterns: [".eslintrc.js", "next.config.js"],
};
