import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { u as user_id } from "../../../../chunks/global.js";
const css = {
  code: ".profile-container.svelte-yv322h{display:flex;flex-direction:column;align-items:left;align-content:left}.profile-image.svelte-yv322h{width:200px;height:200px;border-radius:50%;margin-bottom:20px}.user-info.svelte-yv322h{text-align:left}.button-link.svelte-yv322h{display:inline-block;padding:10px 20px;background-color:#787979;color:#fff;text-decoration:none;border:none;border-radius:5px;cursor:pointer}.button-link.svelte-yv322h:hover{background-color:#3e4349}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><body><div class="profile-container svelte-yv322h"><img${add_attribute("src", `http://localhost:3000/api/profile/getProfilePicture?user_id=${user_id}`, 0)} alt="" class="profile-image svelte-yv322h"> <div class="user-info svelte-yv322h"><h2>${escape(data.info.name)}</h2> <p>Email: ${escape(data.info.email)}</p> <p>Age: ${escape(data.info.age)}</p> <p>Location: ${escape(data.info.location)}</p> <p>Aadhar Number: ${escape(data.info.adhar_no)}</p> <p>Phone Number: ${escape(data.info.phone_no)}</p></div> <a href="/user/editprofile" class="button-link svelte-yv322h" data-svelte-h="svelte-6jicm2">Edit</a></div></body> </main>`;
});
export {
  Page as default
};
