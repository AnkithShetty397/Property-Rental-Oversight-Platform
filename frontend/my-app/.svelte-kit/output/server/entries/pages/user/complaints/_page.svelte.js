import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "main.svelte-dbyf1m{display:flex;flex-direction:column;align-items:center;margin:2rem}.complaint-form.svelte-dbyf1m{width:1100px\r\n  }.textarea-constraints.svelte-dbyf1m{max-width:1082px;min-width:1082px;min-height:100px;max-height:188px}h1.svelte-dbyf1m{font-size:2rem;margin-bottom:1rem}form.svelte-dbyf1m{width:300px;display:flex;flex-direction:column;gap:1rem}label.svelte-dbyf1m{font-size:1rem;margin-bottom:0.5rem}input.svelte-dbyf1m,textarea.svelte-dbyf1m{padding:0.5rem;font-size:1rem}button.svelte-dbyf1m{background-color:#4caf50;color:white;padding:0.5rem;cursor:pointer;border:none;font-size:1rem}button.svelte-dbyf1m:hover{background-color:#45a049}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let complaint = "";
  $$result.css.add(css);
  return `<main class="svelte-dbyf1m"><h1 class="svelte-dbyf1m" data-svelte-h="svelte-17fip5">Complaint Form</h1> <form class="complaint-form svelte-dbyf1m"><label for="complaint" class="svelte-dbyf1m" data-svelte-h="svelte-1lfj226">Complaint:</label> <input type="text" id="complaint" class="svelte-dbyf1m"${add_attribute("value", complaint, 0)}> <label for="description" class="svelte-dbyf1m" data-svelte-h="svelte-1jjlhqk">Description:</label> <textarea id="description" class="textarea-constraints svelte-dbyf1m">${escape("")}</textarea> <button type="submit" class="svelte-dbyf1m" data-svelte-h="svelte-1ou7dtz">Submit</button></form></main>`;
});
export {
  Page as default
};
