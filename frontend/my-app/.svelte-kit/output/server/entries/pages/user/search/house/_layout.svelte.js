import { c as create_ssr_component } from "../../../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body>${slots.default ? slots.default({}) : ``}</body>`;
});
export {
  Layout as default
};
