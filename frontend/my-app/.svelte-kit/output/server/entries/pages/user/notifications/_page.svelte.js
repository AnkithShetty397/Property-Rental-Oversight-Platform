import { c as create_ssr_component, f as each, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: ".notification-container.svelte-v5c5s6{background-color:#f0f0f0;padding:20px;border-radius:8px}.review-header.svelte-v5c5s6{color:#333}.scrollable-notification.svelte-v5c5s6{max-height:300px;overflow-y:auto}.message-block.svelte-v5c5s6{margin-bottom:15px;padding:10px;background-color:#fff;border-radius:5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.user-name.svelte-v5c5s6{font-weight:bold;color:#007bff}.message-content.svelte-v5c5s6{color:#555}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="notification-container svelte-v5c5s6"><h2 class="review-header svelte-v5c5s6" data-svelte-h="svelte-1lszqx3">Notifications</h2> <div class="scrollable-notification svelte-v5c5s6">${data.notification && data.notification.length > 0 ? `${each(data.notification, (message) => {
    return `<div class="message-block svelte-v5c5s6"><div class="user-name svelte-v5c5s6">${escape(message.from)}</div> <div class="message"><p class="message-content svelte-v5c5s6">${escape(message.content)}</p></div> </div>`;
  })}` : `<p class="no-reviews" data-svelte-h="svelte-trdz7q">No reviews yet</p>`}</div> </div>`;
});
export {
  Page as default
};
