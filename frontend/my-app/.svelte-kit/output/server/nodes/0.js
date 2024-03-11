

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.D7ElTrk1.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js"];
export const stylesheets = ["_app/immutable/assets/0.BdJ6bYZx.css"];
export const fonts = [];
