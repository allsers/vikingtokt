import { Z as head, W as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { w as wood_texture } from "../../../chunks/wood-texture.js";
import { a as attr } from "../../../chunks/attributes.js";
const chest = "/_app/immutable/assets/norse_chest.BBhegAeS.png";
const viking_brooch = "/_app/immutable/assets/viking_brooch.XqKF26eU.jpg";
const shield = "/_app/immutable/assets/shield.ygPuER1W.png";
const viking_sword = "/_app/immutable/assets/viking_sword.BbLyp8Z5.png";
const viking_axe = "/_app/immutable/assets/viking_axe.BJMKBJ0I.png";
const runestone = "/_app/immutable/assets/runestone.t8rt5ihR.png";
const viking_helmet = "/_app/immutable/assets/viking_helmet.CVzI6K9W.png";
const cattle = "/_app/immutable/assets/cattle.DITkZ9zf.png";
const hnefetafl = "/_app/immutable/assets/Hnefetafl.DY9TNmKa.png";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Vargrclan</title>`;
    $$payload2.out += `<meta name="description" content="About this app">`;
  });
  $$payload.out += `<div id="section1"${attr("style", `background-image: url(${stringify(base + chest)});`)} class="svelte-1dumujv"><h1${attr("style", `background-image: url(${stringify(base + wood_texture)});`)} class="svelte-1dumujv">Shop</h1> <div class="grid-container svelte-1dumujv"><div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + viking_brooch)} alt="Item 1" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Viking brooch</h2> <p class="svelte-1dumujv">DKK 269</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + shield)} alt="Item 2" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Shield</h2> <p class="svelte-1dumujv">DKK 799</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + viking_sword)} alt="Item 3" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Viking Sword</h2> <p class="svelte-1dumujv">DKK 1359</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + viking_axe)} alt="Item 4" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Viking Axe</h2> <p class="svelte-1dumujv">DKK 2639</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + runestone)} alt="Item 5" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Runestone</h2> <p class="svelte-1dumujv">DKK 99</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + viking_helmet)} alt="Item 6" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Viking Helmet</h2> <p class="svelte-1dumujv">DKK 2249</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + cattle)} alt="Item 7" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Cattle</h2> <p class="svelte-1dumujv">DKK 119900</p></div> <div class="item svelte-1dumujv"${attr("style", `background-image: url(${stringify(base + wood_texture)});`)}><img${attr("src", base + hnefetafl)} alt="Item 8" class="svelte-1dumujv"> <h2 class="svelte-1dumujv">Hnefetafl</h2> <p class="svelte-1dumujv">DKK 275</p></div></div></div>`;
}
export {
  _page as default
};
