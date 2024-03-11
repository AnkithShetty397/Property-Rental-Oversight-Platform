

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/owner/inbox/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/23.ChvVrZFk.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index.i9izywSM.js"];
export const stylesheets = [];
export const fonts = [];
