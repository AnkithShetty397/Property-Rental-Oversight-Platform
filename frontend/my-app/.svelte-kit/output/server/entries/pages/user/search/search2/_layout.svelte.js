import { c as create_ssr_component, d as add_attribute } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const css = {
  code: '.search-container.svelte-155jl80.svelte-155jl80{display:flex;border-radius:25px 0 0 25px;overflow:hidden;height:50px;width:1100px;margin:auto auto 20px 5px}.search-container.svelte-155jl80 input[type="text"].svelte-155jl80{flex:1;padding:10px;border:none;border-radius:25px 0 0 25px;font-size:medium;width:1100px}.search-container.svelte-155jl80 button.svelte-155jl80{background-color:#333;color:#fff;border:none;padding:10px 15px;border-radius:0 25px 25px 0;cursor:pointer;width:100px;font-size:medium}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let param = "";
  $$result.css.add(css);
  return `<body><div class="search-container svelte-155jl80"><input type="text" placeholder="Search..." class="svelte-155jl80"${add_attribute("value", param, 0)}> <button type="submit" class="svelte-155jl80" data-svelte-h="svelte-141loiu"><i class="fa fa-search"></i>Search</button></div> <div>${slots.default ? slots.default({}) : ``}</div> </body>`;
});
export {
  Layout as default
};
