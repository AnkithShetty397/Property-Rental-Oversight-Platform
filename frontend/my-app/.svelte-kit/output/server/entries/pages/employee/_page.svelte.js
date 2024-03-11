import { c as create_ssr_component, f as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: "ul.svelte-4ixiz{list-style:none;padding:0}li.svelte-4ixiz{margin-bottom:20px;padding:15px;border:1px solid #ddd;border-radius:10px;background-color:#f8f8f8;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:background-color 0.3s ease;display:flex;justify-content:space-between;align-items:center}li.svelte-4ixiz:hover{background-color:#e0e0e0}h3.svelte-4ixiz{margin-bottom:10px;font-size:18px;color:#3498db}p.svelte-4ixiz{margin-bottom:10px;color:#555}.mark-as-done-button.svelte-4ixiz{background-color:#27ae60;color:#fff;padding:8px 12px;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.mark-as-done-button.svelte-4ixiz:hover{background-color:#219653}",
  map: null
};
const RenderComplaints = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { complaints = [] } = $$props;
  if ($$props.complaints === void 0 && $$bindings.complaints && complaints !== void 0)
    $$bindings.complaints(complaints);
  $$result.css.add(css$1);
  return `<div>${complaints.length > 0 ? `<ul class="svelte-4ixiz">${each(complaints, (complaint) => {
    return `<li class="svelte-4ixiz"><div><h3 class="svelte-4ixiz">${escape(complaint.name)}</h3> <p class="svelte-4ixiz">${escape(complaint.complaint)}</p> <p class="svelte-4ixiz">${escape(complaint.description)}</p></div> <button class="mark-as-done-button svelte-4ixiz" data-svelte-h="svelte-1ocndk7">Mark as Done</button> </li>`;
  })}</ul>` : `<p class="svelte-4ixiz" data-svelte-h="svelte-198t74u">No complaints available.</p>`}</div>`;
});
const css = {
  code: ".custom-button.svelte-1kyihox{margin:10px;padding:15px 20px;font-size:16px;border:none;border-radius:5px;cursor:pointer;transition:background-color 0.3s ease}.rental-button.svelte-1kyihox{background-color:#3498db;color:#fff}.rental-button.svelte-1kyihox:hover{background-color:#2980b9}.complaints-button.svelte-1kyihox{background-color:#e74c3c;color:#fff}.complaints-button.svelte-1kyihox:hover{background-color:#c0392b}.button-container.svelte-1kyihox{display:flex;justify-content:space-around;margin:25px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let rentalButtonText = "Rental Records";
  let complaintsButtonText = "Complaints";
  let complaints = [];
  $$result.css.add(css);
  return `<div><div class="button-container svelte-1kyihox"><button class="custom-button rental-button svelte-1kyihox">${escape(rentalButtonText)}</button> <button class="custom-button complaints-button svelte-1kyihox">${escape(complaintsButtonText)}</button></div> ${`${validate_component(RenderComplaints, "RenderComplaints").$$render($$result, { complaints }, {}, {})}`} </div>`;
});
export {
  Page as default
};
