import * as universal from '../entries/pages/crew/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/crew/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/crew/+page.ts";
export const imports = ["_app/immutable/nodes/3.Dh68tpeU.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.C5382k6v.js","_app/immutable/chunks/index.m_iIgkgN.js","_app/immutable/chunks/wood-texture.CUqhIUo3.js"];
export const stylesheets = ["_app/immutable/assets/3.BYZRS1-X.css"];
export const fonts = [];
