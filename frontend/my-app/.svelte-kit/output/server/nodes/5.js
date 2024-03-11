

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CMVnlBRv.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index.i9izywSM.js","_app/immutable/chunks/entry.DTdBLLXD.js","_app/immutable/chunks/global.DC77a2-V.js"];
export const stylesheets = ["_app/immutable/assets/5.D1UWUEqM.css"];
export const fonts = [];
