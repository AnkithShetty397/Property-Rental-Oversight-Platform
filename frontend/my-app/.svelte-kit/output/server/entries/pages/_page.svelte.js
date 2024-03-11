import { c as create_ssr_component } from "../../chunks/ssr.js";
const css = {
  code: "body.svelte-c3q8kw{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#f0f0f0}.content.svelte-c3q8kw{flex-grow:1;background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);height:535px;width:1495px\r\n    }.button-link.svelte-c3q8kw{display:inline-block;padding:10px 10px 10px 0px;background-color:#ccc;color:#000001fb;text-decoration:none;border:none;border-radius:0;transition:background-color 0.3s;width:130px;text-align:center}.button-link.svelte-c3q8kw:hover{background-color:#7b7c82e6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-c3q8kw" data-svelte-h="svelte-143fws"><div class="content svelte-c3q8kw"><a href="/loginpage" class="button-link svelte-c3q8kw">Continue</a></div> </body>`;
});
export {
  Page as default
};
