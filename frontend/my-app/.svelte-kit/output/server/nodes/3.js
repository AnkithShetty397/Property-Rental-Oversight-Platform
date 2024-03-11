

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/loginpage/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CkA3-rMm.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js"];
export const stylesheets = [];
export const fonts = [];
