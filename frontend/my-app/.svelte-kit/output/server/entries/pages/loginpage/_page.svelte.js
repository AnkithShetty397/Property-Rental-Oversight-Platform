import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: ".container.svelte-1glu4x5{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:Arial, sans-serif}h2.svelte-1glu4x5{margin-bottom:20px;font-size:24px;color:#333}button.svelte-1glu4x5{padding:10px 20px;margin:10px;font-size:18px;border:none;border-radius:5px;cursor:pointer;background-color:#007bff;color:#fff;transition:background-color 0.3s ease}button.svelte-1glu4x5:hover{background-color:#0056b3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container svelte-1glu4x5"><h2 class="svelte-1glu4x5" data-svelte-h="svelte-1notkat">Login or Create Account</h2> <button class="svelte-1glu4x5" data-svelte-h="svelte-1h52j0f">Login</button> <button class="svelte-1glu4x5" data-svelte-h="svelte-jfyo99">Create Account</button> </div>`;
});
export {
  Page as default
};
