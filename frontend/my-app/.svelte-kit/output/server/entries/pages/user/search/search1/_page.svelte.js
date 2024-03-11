import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const css = {
  code: ".scrollable-container.svelte-1wfv7kr.svelte-1wfv7kr{max-height:450px;overflow-y:auto;width:1100px;padding-right:10px}.scrollable-container.svelte-1wfv7kr.svelte-1wfv7kr::-webkit-scrollbar{width:10px}.scrollable-container.svelte-1wfv7kr.svelte-1wfv7kr::-webkit-scrollbar-track{background:#f1f1f1}.scrollable-container.svelte-1wfv7kr.svelte-1wfv7kr::-webkit-scrollbar-thumb{background:#888}.scrollable-container.svelte-1wfv7kr.svelte-1wfv7kr::-webkit-scrollbar-thumb:hover{background:#676767}.result.svelte-1wfv7kr.svelte-1wfv7kr{position:relative;display:flex;margin-bottom:20px;background-color:#b0afaf;padding:10px;border-radius:10px}.open-button.svelte-1wfv7kr.svelte-1wfv7kr{position:absolute;bottom:15px;right:15px;padding:12px 20px;font-size:14px;background-color:#424342;color:white;border:none;border-radius:5px;cursor:pointer}.open-button.svelte-1wfv7kr.svelte-1wfv7kr:hover{background-color:#1d1e1d}.image-label.svelte-1wfv7kr.svelte-1wfv7kr{width:100px;flex-shrink:0}.image-label.svelte-1wfv7kr img.svelte-1wfv7kr{width:100%;height:auto;display:block}.label.svelte-1wfv7kr.svelte-1wfv7kr{display:block;text-align:center;margin-top:5px}.text-content.svelte-1wfv7kr.svelte-1wfv7kr{flex-grow:1;padding-left:10px}.text-content.svelte-1wfv7kr h3.svelte-1wfv7kr{margin-top:0;margin-bottom:5px}.text-content.svelte-1wfv7kr p.svelte-1wfv7kr{margin-top:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><div class="scrollable-container svelte-1wfv7kr">${data.houses.length === 0 ? `<div data-svelte-h="svelte-slmht6">No houses found</div>` : `${each(data.houses, (house) => {
    return `<div class="result svelte-1wfv7kr"><div class="image-label svelte-1wfv7kr" data-svelte-h="svelte-1ahombt"><img${add_attribute("src", `http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`, 0)} alt="" class="house-image svelte-1wfv7kr"> <span class="label svelte-1wfv7kr"></span></div> <div class="text-content svelte-1wfv7kr"><h3 class="svelte-1wfv7kr">House number: ${escape(house.house_no)}</h3> <p class="svelte-1wfv7kr">Block number: ${escape(house.block_no)}</p> <p class="svelte-1wfv7kr" data-svelte-h="svelte-1ilib0w">Description goes here...</p></div> <button class="open-button svelte-1wfv7kr" data-svelte-h="svelte-156eqz">Open</button> </div>`;
  })}`}</div> </main>`;
});
export {
  Page as default
};
