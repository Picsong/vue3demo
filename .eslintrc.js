module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard", // eslint-config-standard
    "plugin:vue/vue3-recommended", // 必不可少的-essential，推荐的-recommended，强烈推荐的-strongly-recommended
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "warn",
  },
}
