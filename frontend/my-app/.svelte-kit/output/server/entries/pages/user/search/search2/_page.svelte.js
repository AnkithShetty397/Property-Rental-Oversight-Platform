import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const css = {
  code: ".scrollable-container.svelte-1ceyvdl.svelte-1ceyvdl{max-height:450px;overflow-y:auto;width:1100px;padding-right:10px}.scrollable-container.svelte-1ceyvdl.svelte-1ceyvdl::-webkit-scrollbar{width:10px}.scrollable-container.svelte-1ceyvdl.svelte-1ceyvdl::-webkit-scrollbar-track{background:#f1f1f1}.scrollable-container.svelte-1ceyvdl.svelte-1ceyvdl::-webkit-scrollbar-thumb{background:#888}.scrollable-container.svelte-1ceyvdl.svelte-1ceyvdl::-webkit-scrollbar-thumb:hover{background:#676767}.result.svelte-1ceyvdl.svelte-1ceyvdl{position:relative;display:flex;margin-bottom:20px;background-color:#b0afaf;padding:10px;border-radius:10px}.open-button.svelte-1ceyvdl.svelte-1ceyvdl{position:absolute;bottom:15px;right:15px;padding:12px 20px;font-size:14px;background-color:#424342;color:white;border:none;border-radius:5px;cursor:pointer}.open-button.svelte-1ceyvdl.svelte-1ceyvdl:hover{background-color:#1d1e1d}.image-label.svelte-1ceyvdl.svelte-1ceyvdl{width:100px;flex-shrink:0}.image-label.svelte-1ceyvdl img.svelte-1ceyvdl{width:100%;height:auto;display:block}.label.svelte-1ceyvdl.svelte-1ceyvdl{display:block;text-align:center;margin-top:5px}.text-content.svelte-1ceyvdl.svelte-1ceyvdl{flex-grow:1;padding-left:10px}.text-content.svelte-1ceyvdl h3.svelte-1ceyvdl{margin-top:0;margin-bottom:5px}.text-content.svelte-1ceyvdl p.svelte-1ceyvdl{margin-top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="scrollable-container svelte-1ceyvdl">${each(data.houses, (house) => {
    return `<div class="result svelte-1ceyvdl"><div class="image-label svelte-1ceyvdl" data-svelte-h="svelte-1ahombt"><img${add_attribute("src", `http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`, 0)} alt="" class="house-image svelte-1ceyvdl"> <span class="label svelte-1ceyvdl"></span></div> <div class="text-content svelte-1ceyvdl"><h3 class="svelte-1ceyvdl">Title: ${escape(house.house_no)}</h3> <p class="svelte-1ceyvdl">Description goes here...${escape(house.block_no)}</p></div> <button class="open-button svelte-1ceyvdl" data-svelte-h="svelte-7l9gwf">Open</button> </div>`;
  })}</div> </main>`;
});
export {
  Page as default
};
