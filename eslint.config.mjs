import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Tắt cảnh báo thẻ <img> thuần
  {
    rules: {
      "@next/next/no-img-element": "off", // Cho phép dùng <img> mà không bị gạch đỏ
    },
  },

  // Override default ignores
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
