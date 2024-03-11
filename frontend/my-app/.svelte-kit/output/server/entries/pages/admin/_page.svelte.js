import { c as create_ssr_component } from "../../../chunks/ssr.js";
const css = {
  code: ".form-container.svelte-1haywde{max-width:400px;width:100%;background-color:#f8f8f8;border:1px solid #ccc;border-radius:8px;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);padding:30px;box-sizing:border-box;text-align:center;margin:0 auto;transition:transform 0.3s ease}.form-container.active.svelte-1haywde{transform:translateY(0)}h1.svelte-1haywde{font-size:24px;margin-bottom:20px;color:#333}form.svelte-1haywde{display:grid;gap:20px}label.svelte-1haywde{font-size:16px;color:#555;text-align:left}input.svelte-1haywde{width:100%;padding:12px;font-size:16px;border:1px solid #ccc;border-radius:5px;box-sizing:border-box}button.svelte-1haywde{background-color:#3f5f83;color:#fff;padding:12px 20px;font-size:18px;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}button.svelte-1haywde:hover{background-color:#1d2f4a}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div>${`<div class="button-container"><button class="svelte-1haywde" data-svelte-h="svelte-2hd4o9">Create Owners</button> <button class="svelte-1haywde" data-svelte-h="svelte-1dno4yf">Add/Remove Employees</button></div>`} ${``} ${``} </div>`;
});
export {
  Page as default
};
