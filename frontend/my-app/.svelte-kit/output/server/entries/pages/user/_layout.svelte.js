import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: ".button-link.svelte-17qfeo6.svelte-17qfeo6{display:inline-block;padding:10px 10px 10px 0px;background-color:#ccc;color:#000001fb;text-decoration:none;border:none;border-radius:0;transition:background-color 0.3s;width:130px;text-align:center}.button-link.svelte-17qfeo6.svelte-17qfeo6:hover{background-color:#7b7c82e6}.sideblock.svelte-17qfeo6 ul.svelte-17qfeo6{list-style-type:none}body.svelte-17qfeo6.svelte-17qfeo6{font-family:Arial, sans-serif;margin:0;padding:0;background-color:#f0f0f0}.container.svelte-17qfeo6.svelte-17qfeo6{width:100vw;max-width:calc(100vw - 80px);margin:20px;padding:0 20px;display:flex;flex-direction:row}.sideblock.svelte-17qfeo6.svelte-17qfeo6{width:200px;height:495px;background-color:#ccc;padding:20px;border-radius:5px;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);margin-right:20px;text-align:left}.button.svelte-17qfeo6.svelte-17qfeo6{padding:10px 20px;font-size:16px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease;width:140px;margin:200px auto auto auto}.button.svelte-17qfeo6.svelte-17qfeo6:hover{background-color:#0056b3}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<body class="svelte-17qfeo6"><div class="container svelte-17qfeo6"><div class="sideblock svelte-17qfeo6"><ul class="svelte-17qfeo6"><li data-svelte-h="svelte-1sxmha2"><a href="/user/profile" class="button-link svelte-17qfeo6">Profile</a></li> <li data-svelte-h="svelte-12kkmis"><a href="/user/home" class="button-link svelte-17qfeo6">Home</a></li> <li data-svelte-h="svelte-1jr63o0"><a href="/user/notifications" class="button-link svelte-17qfeo6">Notifications</a></li> <li data-svelte-h="svelte-17wovwy"><a href="/user/groupchat/chat1" class="button-link svelte-17qfeo6">Chatbox</a></li> <li data-svelte-h="svelte-1wd959s"><a href="/user/complaints" class="button-link svelte-17qfeo6">Complaints</a></li> <li data-svelte-h="svelte-ee6ode"><a href="/user" class="button-link svelte-17qfeo6">About Us</a></li> <li><button class="button svelte-17qfeo6" data-svelte-h="svelte-1dy2rpf">logout</button></li></ul></div> ${slots.default ? slots.default({}) : ``}</div> </body>`;
});
export {
  Layout as default
};
