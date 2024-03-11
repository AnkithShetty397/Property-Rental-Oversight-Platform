

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/profile/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CL-LCCZz.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index.i9izywSM.js"];
export const stylesheets = [];
export const fonts = [];
