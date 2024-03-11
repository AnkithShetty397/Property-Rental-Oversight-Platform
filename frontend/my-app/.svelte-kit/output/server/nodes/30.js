import * as universal from '../entries/pages/user/notifications/_page.js';

export const index = 30;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/notifications/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/notifications/+page.js";
export const imports = ["_app/immutable/nodes/30.ChL8KqWF.js","_app/immutable/chunks/global.DC77a2-V.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js","_app/immutable/chunks/each.G4N-V4Bk.js"];
export const stylesheets = ["_app/immutable/assets/30.BIjI01Np.css"];
export const fonts = [];
