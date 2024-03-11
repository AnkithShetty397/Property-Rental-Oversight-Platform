import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
const css$1 = {
  code: "body.svelte-1srupz6{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#f0f0f0}.content.svelte-1srupz6{flex-grow:1;background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);height:417px;width:1100px;margin:auto auto auto auto}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<body class="svelte-1srupz6" data-svelte-h="svelte-18pveua"><div class="content svelte-1srupz6"><h2>Home</h2> <p>This is a simple static webpage created with HTML and CSS.</p> <p>description.</p></div> </body>`;
});
const css = {
  code: '.search-container.svelte-k1jwyj.svelte-k1jwyj{display:flex;border-radius:25px 0 0 25px;overflow:hidden;height:50px;width:1130px;margin:auto auto 20px 5px}.search-container.svelte-k1jwyj input[type="text"].svelte-k1jwyj{flex:1;padding:10px;border:none;border-radius:25px 0 0 25px;font-size:medium;width:1100px}.search-container.svelte-k1jwyj button.svelte-k1jwyj{background-color:#333;color:#fff;border:none;padding:10px 15px;border-radius:0 25px 25px 0;cursor:pointer;width:100px;font-size:medium}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let param = "";
  $$result.css.add(css);
  return `<body><div class="search-container svelte-k1jwyj"><input type="text" placeholder="Search..." class="svelte-k1jwyj"${add_attribute("value", param, 0)}> <button type="submit" class="svelte-k1jwyj" data-svelte-h="svelte-141loiu"><i class="fa fa-search"></i>Search</button></div> <div>${validate_component(Home, "Home").$$render($$result, {}, {}, {})}</div> </body>`;
});
export {
  Page as default
};
