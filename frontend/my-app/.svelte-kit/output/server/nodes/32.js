import * as universal from '../entries/pages/user/notifications/_page.js';

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/user/notifications/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/user/notifications/+page.js";
export const imports = ["_app/immutable/nodes/32.BlDSVW6m.js","_app/immutable/chunks/global.DC77a2-V.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index.i9izywSM.js","_app/immutable/chunks/each.CvcTpb99.js"];
export const stylesheets = ["_app/immutable/assets/32.BIjI01Np.css"];
export const fonts = [];
