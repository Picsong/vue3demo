module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard", // eslint-config-standard
    "plugin:vue/vue3-recommended", // 必不可少的-essential，推荐的-recommended，强烈推荐的-strongly-recommended
    "plugin:prettier/recommended", // 简化prettier配置
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
    "no-unused-vars": 0,
    "vue/one-component-per-file": 0,
  },
}
