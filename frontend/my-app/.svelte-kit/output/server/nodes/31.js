import * as universal from '../entries/pages/user/profile/_page.js';

export const index = 31;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/profile/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/profile/+page.js";
export const imports = ["_app/immutable/nodes/31.DbcQybJZ.js","_app/immutable/chunks/global.DC77a2-V.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js"];
export const stylesheets = ["_app/immutable/assets/31.BOBkP16-.css"];
export const fonts = [];
