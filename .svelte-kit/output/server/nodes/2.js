import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DxDkn5gf.js","_app/immutable/chunks/scheduler.C5382k6v.js","_app/immutable/chunks/index.m_iIgkgN.js","_app/immutable/chunks/wood-texture.CUqhIUo3.js"];
export const stylesheets = ["_app/immutable/assets/2.BQHTDTpS.css"];
export const fonts = [];
