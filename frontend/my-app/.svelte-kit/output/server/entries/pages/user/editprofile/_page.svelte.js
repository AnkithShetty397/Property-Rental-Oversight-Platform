import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { u as user_id } from "../../../../chunks/global.js";
const css = {
  code: ".container.svelte-1xxv0fj{overflow-y:auto;height:530px;width:1140px}.profile-container.svelte-1xxv0fj{flex:1;display:flex;flex-direction:column;align-items:left;align-content:left}.profile-image.svelte-1xxv0fj{width:200px;height:200px;border-radius:50%;margin-bottom:20px}.user-info.svelte-1xxv0fj{text-align:left}.button.svelte-1xxv0fj{display:inline-block;padding:10px 20px;background-color:#4e4f4f;color:#fff;text-decoration:none;border:none;border-radius:5px;cursor:pointer;margin:15px 15px 15px 0}.button.svelte-1xxv0fj:disabled{background-color:#433f3f94;cursor:not-allowed}.button.svelte-1xxv0fj:hover{background-color:#3e4349}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let data1 = data.info;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><body><div class="container svelte-1xxv0fj"><div class="profile-container svelte-1xxv0fj"><img${add_attribute("src", `http://localhost:3000/api/profile/getProfilePicture?user_id=${user_id}`, 0)} alt="" class="profile-image svelte-1xxv0fj"> <p>Change Profile Photo: <input type="file" accept=".jpg, .png" style="font-size: .9rem; width:400px"></p> <div class="user-info svelte-1xxv0fj"><p data-svelte-h="svelte-g0pfar">Name:</p> <input placeholder="Name" style="font-size: 1rem; width:400px; display: block;"${add_attribute("value", data1.name, 0)}> <p data-svelte-h="svelte-1xfd939">Age:</p> <input type="number" placeholder="Age" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.age, 0)}> <p data-svelte-h="svelte-9362rv">Location:</p> <input placeholder="Location" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.location, 0)}> <p data-svelte-h="svelte-8tzq5l">Phone Number:</p> <input placeholder="Phone Number" style="font-size: .9rem; width:400px; display: block;"${add_attribute("value", data1.phone_no, 0)}></div></div> <button class="button svelte-1xxv0fj" ${!data1.name || !data1.age || !data1.location || !data1.adhar_no || !data1.phone_no ? "disabled" : ""} type="submit">Save</button></div></body> </main>`;
});
export {
  Page as default
};
