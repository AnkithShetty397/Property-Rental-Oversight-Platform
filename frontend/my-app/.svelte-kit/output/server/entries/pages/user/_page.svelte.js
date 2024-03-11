import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const css = {
  code: "body.svelte-lrzomz{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#f0f0f0}.content.svelte-lrzomz{flex-grow:1;background-color:#fff;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);height:495px;width:1150px\r\n    }",
  map: null
};
let name = "User";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-lrzomz"><div class="content svelte-lrzomz"><h2 data-svelte-h="svelte-1goc09d">About Us</h2> <p>This is a simple static webpage created with HTML and CSS by ${escape(name)}.</p> <p data-svelte-h="svelte-1rqicef">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris a massa mollis tristique.</p></div> </body>`;
});
export {
  Page as default
};
