import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
const css = {
  code: ".container.svelte-1jxmd5w{overflow-y:auto;height:530px;width:1520px;justify-content:center}.container.svelte-1jxmd5w::-webkit-scrollbar{width:10px}.container.svelte-1jxmd5w::-webkit-scrollbar-track{background:#f1f1f1}.container.svelte-1jxmd5w::-webkit-scrollbar-thumb{background:#888}.container.svelte-1jxmd5w::-webkit-scrollbar-thumb:hover{background:#555}.profile-container.svelte-1jxmd5w{flex:1;display:flex;flex-direction:column;align-items:center;align-content:center}.user-info.svelte-1jxmd5w{text-align:left}.button.svelte-1jxmd5w{display:inline-block;padding:10px 20px;background-color:#4e4f4f;color:#fff;text-decoration:none;border:none;border-radius:5px;cursor:pointer;margin:15px 15px 15px 0}.button.svelte-1jxmd5w:disabled{background-color:#433f3f94;cursor:not-allowed}.button.svelte-1jxmd5w:hover{background-color:#3e4349}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let data1 = {
    name: "",
    email: "",
    age: null,
    phone_no: "",
    adhar_no: "",
    location: "",
    password: ""
  };
  $$result.css.add(css);
  return `<main><body><div class="container svelte-1jxmd5w"><div class="profile-container svelte-1jxmd5w"><div class="user-info svelte-1jxmd5w"><p data-svelte-h="svelte-g0pfar">Name:</p> <input placeholder="Name" style="font-size: 1rem; width:400px; display: block;"${add_attribute("value", data1.name, 0)}> <p data-svelte-h="svelte-gzvzx">E-mail:</p> <input placeholder="E-mail" style="font-size: 1rem; width:400px; display: block;"${add_attribute("value", data1.email, 0)}> <p data-svelte-h="svelte-1ot92d5">Password:</p> <input type="password" placeholder="Password" minlength="8" style="font-size: 1rem; width:400px; display: block;"${add_attribute("value", data1.password, 0)}> <p data-svelte-h="svelte-1xfd939">Age:</p> <input type="number" placeholder="Age" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.age, 0)}> <p data-svelte-h="svelte-9362rv">Location:</p> <input placeholder="Location" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.location, 0)}> <p data-svelte-h="svelte-8tzq5l">Phone Number:</p> <input placeholder="Phone Number" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.phone_no, 0)}> <p data-svelte-h="svelte-10hqp0c">Aadhar Number:</p> <input placeholder="Aadhar Number" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.adhar_no, 0)}> <button class="button svelte-1jxmd5w" ${"disabled"} type="submit">Save</button></div></div></div></body> </main>`;
});
export {
  Page as default
};
