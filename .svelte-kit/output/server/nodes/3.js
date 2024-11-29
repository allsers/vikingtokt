import * as universal from '../entries/pages/crew/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/crew/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/crew/+page.ts";
export const imports = ["_app/immutable/nodes/3.BkrZYmY3.js","_app/immutable/chunks/disclose-version.CB45EG5S.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/chunks/legacy.FLgBXZ1o.js","_app/immutable/chunks/svelte-head.BABkBnbW.js","_app/immutable/chunks/attributes.BaQcBzAr.js","_app/immutable/chunks/wood-texture.CUqhIUo3.js"];
export const stylesheets = ["_app/immutable/assets/3.DKZ02ZZR.css"];
export const fonts = [];
