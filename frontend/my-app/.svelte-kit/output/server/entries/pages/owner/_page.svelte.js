import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import Page$1 from "./inbox/_page.svelte.js";
const css = {
  code: ".main-container.svelte-1u6lwwh{margin-left:9px;width:1500px;justify-content:center}.buttons.svelte-1u6lwwh{display:flex;width:1500}.top-buttons.svelte-1u6lwwh{width:747px;height:50px;padding:10px 20px;font-size:16px;background-color:#778fa8;color:#fff;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.top-buttons.svelte-1u6lwwh:hover{background-color:#3f5f83}.active.svelte-1u6lwwh{background-color:#3f5f83}.body-container.svelte-1u6lwwh{width:1450;height:483px;background-color:#b3b9bf}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main-container svelte-1u6lwwh"><div class="buttons svelte-1u6lwwh"><div><button class="${["top-buttons svelte-1u6lwwh", ""].join(" ").trim()}" data-svelte-h="svelte-1p5epjh">Inbox</button> <button class="${["top-buttons svelte-1u6lwwh", ""].join(" ").trim()}" data-svelte-h="svelte-awbye9">Requests</button></div></div> <div class="body-container svelte-1u6lwwh">${`${`${validate_component(Page$1, "InboxPage").$$render($$result, {}, {}, {})}`}`}</div> </div>`;
});
export {
  Page as default
};
