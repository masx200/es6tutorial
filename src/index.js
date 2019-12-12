import "@masx200/webpack-react-vue-spa-awesome-config/registerserviceworker.js";
import { config, mountinit } from "@masx200/markdown-reader/src/mark-down-reader";
Object.assign(config, {
  github_username: "masx200",
  github_repo: "es6tutorial",
  doctitle: "ECMAScript 6 入门",
  subtitle: "Lightweight Markdown Documentation System",
  index: "README.md",
  summary: "SUMMARY.md"
});
mountinit();
