import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.D5G4W9-0.js","_app/immutable/chunks/disclose-version.CB45EG5S.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/chunks/legacy.FLgBXZ1o.js","_app/immutable/chunks/svelte-head.BABkBnbW.js","_app/immutable/chunks/attributes.BaQcBzAr.js","_app/immutable/chunks/lifecycle.DuYTIIR2.js","_app/immutable/chunks/index-client.BFLvA0Sv.js","_app/immutable/chunks/paths.Ezu0hH9H.js","_app/immutable/chunks/wood-texture.CUqhIUo3.js","_app/immutable/chunks/leikislogo2.DydL3cgi.js"];
export const stylesheets = ["_app/immutable/assets/2.B7yO0MqO.css"];
export const fonts = [];
