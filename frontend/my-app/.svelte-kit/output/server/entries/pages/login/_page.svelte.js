import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: '.login-container.svelte-f414zd.svelte-f414zd{width:900px;margin:0 auto;padding:20px;border:1px solid #ccc;border-radius:5px;background-color:#f9f9f9}.login-container.svelte-f414zd h2.svelte-f414zd{margin-bottom:20px;text-align:center}.login-container.svelte-f414zd label.svelte-f414zd{display:block;margin-bottom:5px}.login-container.svelte-f414zd input[type="email"].svelte-f414zd,.login-container.svelte-f414zd input[type="password"].svelte-f414zd,.login-container.svelte-f414zd select.svelte-f414zd{width:100%;padding:10px;margin-bottom:10px;border:1px solid #ccc;border-radius:5px}.login-container.svelte-f414zd button.svelte-f414zd{width:100%;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}.login-container.svelte-f414zd button.svelte-f414zd:hover{background-color:#0056b3}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="login-container svelte-f414zd"><h2 class="svelte-f414zd" data-svelte-h="svelte-bhb3ah">Login</h2> <label for="email" class="svelte-f414zd" data-svelte-h="svelte-1flf0h4">Email:</label> <input type="email" id="email" placeholder="Enter your email" style="width: 880px;" class="svelte-f414zd"${add_attribute("value", email, 0)}> <label for="password" class="svelte-f414zd" data-svelte-h="svelte-bhu94">Password:</label> <input type="password" id="password" placeholder="Enter your password" style="width: 880px;" class="svelte-f414zd"${add_attribute("value", password, 0)}> <label for="type" class="svelte-f414zd" data-svelte-h="svelte-o5n6oo">Type:</label> <select id="type" class="svelte-f414zd"><option value="user" data-svelte-h="svelte-1u8kdru">User</option><option value="employee" data-svelte-h="svelte-1nkfx0u">Employee</option><option value="owner" data-svelte-h="svelte-15zajnc">Owner</option><option value="admin" data-svelte-h="svelte-17op260">Admin</option></select> <button class="svelte-f414zd" data-svelte-h="svelte-y78872">Login</button> </div>`;
});
export {
  Page as default
};
