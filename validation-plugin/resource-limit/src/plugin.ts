import { definePlugin } from "@monokle/plugin-toolkit";
import { noEmptyAnnotations } from "./rules/1-example.js";
import { ensureMemLimit } from "./rules/2-ensureMemLimit.js";

export default definePlugin({
  id: "YCP",
  name: "ycp",
  displayName: "Resource Limit Check Plugin",
  description: "Optimize your resource utilization!",
  rules: {
    noEmptyAnnotations,
    ensureMemLimit
  },
});
