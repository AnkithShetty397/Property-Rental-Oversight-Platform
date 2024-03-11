import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "body.svelte-17lvfsm{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#f0f0f0}header.svelte-17lvfsm{background-color:#333;color:#fff;padding:10px;text-align:center;height:60px}footer.svelte-17lvfsm{background-color:#333;font-size:small;color:#fff;text-align:center;height:30px;padding:5px 0;position:fixed;bottom:0;width:100%}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-17lvfsm"><header class="svelte-17lvfsm" data-svelte-h="svelte-1t0puuf"><h1>Apartment Management System</h1></header> <body class="svelte-17lvfsm">${slots.default ? slots.default({}) : ``}</body> <footer class="svelte-17lvfsm" data-svelte-h="svelte-1tcdslv"><p>© 2024 My Dynamic Webpage. All rights reserved.</p></footer> </body>`;
});
export {
  Layout as default
};
