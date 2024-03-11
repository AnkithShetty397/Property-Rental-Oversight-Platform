

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.D9I0KGI1.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index.i9izywSM.js"];
export const stylesheets = ["_app/immutable/assets/25.DSnBNRD3.css"];
export const fonts = [];
