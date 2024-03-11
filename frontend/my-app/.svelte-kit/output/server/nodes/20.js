

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/owner/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.CDMJvZ3t.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js","_app/immutable/nodes/21.BUNLHM_e.js","_app/immutable/nodes/22.BrgPcNxD.js"];
export const stylesheets = ["_app/immutable/assets/13.DeUdYAJ8.css"];
export const fonts = [];
