

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/complaints/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CkA3-rMm.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js"];
export const stylesheets = [];
export const fonts = [];
