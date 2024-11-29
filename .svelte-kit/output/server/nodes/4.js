import * as universal from '../entries/pages/shop/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/shop/+page.ts";
export const imports = ["_app/immutable/nodes/4.DWYS4MtM.js","_app/immutable/chunks/index.R8ovVqwX.js","_app/immutable/chunks/scheduler.C5382k6v.js","_app/immutable/chunks/index.m_iIgkgN.js","_app/immutable/chunks/wood-texture.CUqhIUo3.js"];
export const stylesheets = ["_app/immutable/assets/4.DcE9kuVU.css"];
export const fonts = [];
