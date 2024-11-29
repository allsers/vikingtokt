import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/ssr.js";
import { w as wood_texture } from "../../../chunks/wood-texture.js";
const chest = "/_app/immutable/assets/norse_chest.BBhegAeS.png";
const viking_brooch = "/_app/immutable/assets/viking_brooch.XqKF26eU.jpg";
const shield = "/_app/immutable/assets/shield.ygPuER1W.png";
const viking_sword = "/_app/immutable/assets/viking_sword.BbLyp8Z5.png";
const viking_axe = "/_app/immutable/assets/viking_axe.BJMKBJ0I.png";
const runestone = "/_app/immutable/assets/runestone.t8rt5ihR.png";
const viking_helmet = "/_app/immutable/assets/viking_helmet.CVzI6K9W.png";
const cattle = "/_app/immutable/assets/cattle.DITkZ9zf.png";
const hnefetafl = "/_app/immutable/assets/Hnefetafl.DY9TNmKa.png";
const css = {
  code: "#section1.svelte-103bvtq{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding-top:2rem;height:100vh;width:100%;background-size:cover;background-position:center}h1.svelte-103bvtq{width:100%;align-self:center;color:#ffffff;font-family:var(--font-header);font-size:2.2em;z-index:1}p.svelte-103bvtq{font-family:var(--font-norse);color:#ffffff;display:flex;font-size:1.2rem}.grid-container.svelte-103bvtq{max-width:1200px;width:100%;display:grid;grid-template-columns:repeat(4, 1fr);gap:20px;padding:20px}.item.svelte-103bvtq{border-radius:4% 4%;display:flex;flex-direction:column;flex-wrap:wrap;align-items:center}h2.svelte-103bvtq{font-family:var(--font-norse);color:#ffffff;display:flex}img.svelte-103bvtq{width:150px;height:150px;object-fit:cover;border-radius:2% 2%}@media only screen and (max-width: 710px){#section1.svelte-103bvtq{height:190vh}.grid-container.svelte-103bvtq{grid-template-columns:repeat(2, 1fr)}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<svelte:head>\\n\\t<title>Vargrclan</title>\\n\\t<meta name=\\"description\\" content=\\"About this app\\" />\\n</svelte:head>\\n\\n<script lang=\\"ts\\">import chest from \\"$lib/images/norse_chest.png\\";\\nimport wood_texture from \\"$lib/images/wood-texture.png\\";\\nimport viking_brooch from \\"$lib/images/viking_brooch.jpg\\";\\nimport shield from \\"$lib/images/shield.png\\";\\nimport viking_sword from \\"$lib/images/viking_sword.png\\";\\nimport viking_axe from \\"$lib/images/viking_axe.png\\";\\nimport runestone from \\"$lib/images/runestone.png\\";\\nimport viking_helmet from \\"$lib/images/viking_helmet.png\\";\\nimport cattle from \\"$lib/images/cattle.png\\";\\nimport hnefetafl from \\"$lib/images/Hnefetafl.png\\";\\n<\/script>\\n\\n<div id=\\"section1\\" style='background-image: url({chest});'>\\n\\t<h1 style='background-image: url({wood_texture});'>Shop</h1>\\n\\t<div class=\\"grid-container\\">\\n        <div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{viking_brooch}\\" alt=\\"Item 1\\">\\n            <h2>Viking brooch</h2>\\n            <p>DKK 269</p>\\n        </div>\\n        <div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{shield}\\" alt=\\"Item 2\\">\\n            <h2>Shield</h2>\\n            <p>DKK 799</p>\\n        </div>\\n        <div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{viking_sword}\\" alt=\\"Item 3\\">\\n            <h2>Viking Sword</h2>\\n            <p>DKK 1359</p>\\n        </div>\\n        <div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{viking_axe}\\" alt=\\"Item 4\\">\\n            <h2>Viking Axe</h2>\\n            <p>DKK 2639</p>\\n        </div>\\n\\t\\t<div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{runestone}\\" alt=\\"Item 5\\">\\n            <h2>Runestone</h2>\\n            <p>DKK 99</p>\\n        </div>\\n\\t\\t<div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{viking_helmet}\\" alt=\\"Item 6\\">\\n            <h2>Viking Helmet</h2>\\n            <p>DKK 2249</p>\\n        </div>\\n\\t\\t<div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{cattle}\\" alt=\\"Item 7\\">\\n            <h2>Cattle</h2>\\n            <p>DKK 119900</p>\\n        </div>\\n\\t\\t<div class=\\"item\\" style='background-image: url({wood_texture});'>\\n            <img src=\\"{hnefetafl}\\" alt=\\"Item 8\\">\\n            <h2>Hnefetafl</h2>\\n            <p>DKK 275</p>\\n        </div>\\n\\n    </div>\\n</div>\\n\\n<style>\\n\\t#section1 {\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tflex-wrap: wrap;\\n\\t\\tpadding-top: 2rem;\\n\\t\\theight: 100vh;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-size: cover;\\n\\t\\tbackground-position: center;\\n\\t}\\n\\th1 {\\n\\t\\twidth: 100%;\\n\\t\\talign-self: center;\\n\\t\\tcolor: #ffffff;\\n\\t\\tfont-family: var(--font-header);\\n\\t\\tfont-size: 2.2em;\\n\\t\\tz-index: 1;\\n\\t}\\n\\tp {\\n\\t\\tfont-family: var(--font-norse);\\n\\t\\tcolor: #ffffff;\\n\\t\\tdisplay: flex;\\n\\t\\tfont-size: 1.2rem;\\n\\t}\\n\\t.grid-container {\\n\\t\\tmax-width: 1200px;\\n\\t\\twidth: 100%;\\n\\t\\tdisplay: grid;\\n\\t\\tgrid-template-columns: repeat(4, 1fr);\\n\\t\\tgap: 20px;\\n\\t\\tpadding: 20px;\\n\\n\\t}\\n\\t.item {\\n\\t\\tborder-radius: 4% 4%;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tflex-wrap: wrap;\\n\\t\\talign-items: center;\\n\\t\\t\\n\\t}\\n\\th2 {\\n\\t\\tfont-family: var(--font-norse);\\n\\t\\tcolor: #ffffff;\\n\\t\\tdisplay: flex;\\n\\t\\t\\n\\t}\\n\\timg {\\n\\t\\twidth: 150px;\\n\\t\\theight: 150px;\\n\\t\\tobject-fit: cover;\\n\\t\\tborder-radius: 2% 2%;\\n\\t}\\n\\t@media only screen and (max-width: 710px) {\\n\\t\\t#section1 {\\n\\t\\t\\theight: 190vh;\\n\\t\\t}\\n\\t\\t.grid-container {\\n\\t\\t\\tgrid-template-columns: repeat(2, 1fr);\\n\\t\\t}\\n\\t}\\n\\t\\n</style>"],"names":[],"mappings":"AAiEC,wBAAU,CACT,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MACtB,CACA,iBAAG,CACF,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,IAAI,aAAa,CAAC,CAC/B,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,CACV,CACA,gBAAE,CACD,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MACZ,CACA,8BAAgB,CACf,SAAS,CAAE,MAAM,CACjB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IAEV,CACA,oBAAM,CACL,aAAa,CAAE,EAAE,CAAC,EAAE,CACpB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAEd,CACA,iBAAG,CACF,WAAW,CAAE,IAAI,YAAY,CAAC,CAC9B,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAEV,CACA,kBAAI,CACH,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,EAAE,CAAC,EACnB,CACA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,wBAAU,CACT,MAAM,CAAE,KACT,CACA,8BAAgB,CACf,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACrC,CACD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-6h9051_START -->${$$result.title = `<title>Vargrclan</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-6h9051_END -->`, ""}  <div id="section1" style="${"background-image: url(" + escape(chest, true) + ");"}" class="svelte-103bvtq" data-svelte-h="svelte-1srx3mq"><h1 style="${"background-image: url(" + escape(wood_texture, true) + ");"}" class="svelte-103bvtq">Shop</h1> <div class="grid-container svelte-103bvtq"><div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", viking_brooch, 0)} alt="Item 1" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Viking brooch</h2> <p class="svelte-103bvtq">DKK 269</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", shield, 0)} alt="Item 2" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Shield</h2> <p class="svelte-103bvtq">DKK 799</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", viking_sword, 0)} alt="Item 3" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Viking Sword</h2> <p class="svelte-103bvtq">DKK 1359</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", viking_axe, 0)} alt="Item 4" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Viking Axe</h2> <p class="svelte-103bvtq">DKK 2639</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", runestone, 0)} alt="Item 5" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Runestone</h2> <p class="svelte-103bvtq">DKK 99</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", viking_helmet, 0)} alt="Item 6" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Viking Helmet</h2> <p class="svelte-103bvtq">DKK 2249</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", cattle, 0)} alt="Item 7" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Cattle</h2> <p class="svelte-103bvtq">DKK 119900</p></div> <div class="item svelte-103bvtq" style="${"background-image: url(" + escape(wood_texture, true) + ");"}"><img${add_attribute("src", hnefetafl, 0)} alt="Item 8" class="svelte-103bvtq"> <h2 class="svelte-103bvtq">Hnefetafl</h2> <p class="svelte-103bvtq">DKK 275</p></div></div> </div>`;
});
export {
  Page as default
};