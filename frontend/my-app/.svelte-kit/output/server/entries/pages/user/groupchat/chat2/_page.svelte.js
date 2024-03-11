import { c as create_ssr_component, i as is_promise, n as noop, f as each, d as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const css = {
  code: ".wrapper.svelte-ghf53y.svelte-ghf53y{width:1100px;height:530px;margin:0 auto;position:relative}.scrollable-container.svelte-ghf53y.svelte-ghf53y{height:478px;overflow-y:auto}.scrollable-container.svelte-ghf53y.svelte-ghf53y::-webkit-scrollbar{width:10px}.scrollable-container.svelte-ghf53y.svelte-ghf53y::-webkit-scrollbar-track{background:#f1f1f1}.scrollable-container.svelte-ghf53y.svelte-ghf53y::-webkit-scrollbar-thumb{background:#888}.scrollable-container.svelte-ghf53y.svelte-ghf53y::-webkit-scrollbar-thumb:hover{background:#555}.conversation-container.svelte-ghf53y.svelte-ghf53y{display:flex;flex-direction:column;align-items:flex-start;padding:10px}.message-container.svelte-ghf53y.svelte-ghf53y{display:flex;align-items:flex-start;margin-bottom:10px}.user-image.svelte-ghf53y.svelte-ghf53y{margin:10px 10px 0px 10px}.user-avatar.svelte-ghf53y.svelte-ghf53y{width:40px;height:40px;border-radius:50%}.message-content.svelte-ghf53y.svelte-ghf53y{max-width:80%;padding:10px;border-radius:10px;background-color:#647573}.message-content.svelte-ghf53y p.svelte-ghf53y{margin:0}.manager-message.svelte-ghf53y.svelte-ghf53y{background-color:#57a6cd;color:#000;border-radius:15px}.input-container.svelte-ghf53y.svelte-ghf53y{position:absolute;bottom:0;right:0;width:1100px;padding:10px;background-color:#f0f0f0;border-top:1px solid #ccc;display:flex;align-items:center;justify-content:flex-end}.input-container.svelte-ghf53y input.svelte-ghf53y{padding:10px;border:none;border-radius:5px;margin-right:10px;flex:1}.input-container.svelte-ghf53y button.svelte-ghf53y{padding:10px 20px;background-color:#007bff;color:#fff;border:none;border-radius:5px;cursor:pointer}.input-container.svelte-ghf53y button.svelte-ghf53y:hover{background-color:#0056b3}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let newMessage = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<body>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-1ecjz70">loading</p> `;
    }
    return function(messages) {
      return ` <div class="wrapper svelte-ghf53y"><div class="scrollable-container svelte-ghf53y"><div class="conversation-container svelte-ghf53y">${each(data.streamed.messages, (message) => {
        return `<div class="${"message-container " + escape(message.sender === "manager" ? "manager-message" : "", true) + " svelte-ghf53y"}"><div class="user-image svelte-ghf53y"><img src="${"http://localhost:3000/api/profile/getProfilePicture?user_id=" + escape(message.user_id, true)}" alt="" class="user-avatar svelte-ghf53y"></div> <div class="message-content svelte-ghf53y"><p class="svelte-ghf53y"><strong>${escape(message.name)}</strong></p> <p class="svelte-ghf53y">${escape(message.message)}</p></div> </div>`;
      })}</div></div> <div class="input-container svelte-ghf53y"><input type="text" placeholder="Type your message..." class="svelte-ghf53y"${add_attribute("value", newMessage, 0)}> <button class="svelte-ghf53y" data-svelte-h="svelte-93q973">Send</button></div></div> `;
    }();
  }(data.streamed.messages)} </body>`;
});
export {
  Page as default
};
