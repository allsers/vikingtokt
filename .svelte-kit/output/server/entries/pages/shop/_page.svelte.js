import { Y as head, Z as stringify } from "../../../chunks/index.js";
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
  $$payload.out += `<div id="section1"${attr("style", `background-image: url(${stringify(chest)});`)} class="svelte-1c3lqe"><h1${attr("style", `background-image: url(${stringify(wood_texture)});`)} class="svelte-1c3lqe">Shop</h1> <div class="grid-container svelte-1c3lqe"><div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", viking_brooch)} alt="Item 1" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Viking brooch</h2> <p class="svelte-1c3lqe">DKK 269</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", shield)} alt="Item 2" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Shield</h2> <p class="svelte-1c3lqe">DKK 799</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", viking_sword)} alt="Item 3" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Viking Sword</h2> <p class="svelte-1c3lqe">DKK 1359</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", viking_axe)} alt="Item 4" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Viking Axe</h2> <p class="svelte-1c3lqe">DKK 2639</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", runestone)} alt="Item 5" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Runestone</h2> <p class="svelte-1c3lqe">DKK 99</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", viking_helmet)} alt="Item 6" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Viking Helmet</h2> <p class="svelte-1c3lqe">DKK 2249</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", cattle)} alt="Item 7" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Cattle</h2> <p class="svelte-1c3lqe">DKK 119900</p></div> <div class="item svelte-1c3lqe"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><img${attr("src", hnefetafl)} alt="Item 8" class="svelte-1c3lqe"> <h2 class="svelte-1c3lqe">Hnefetafl</h2> <p class="svelte-1c3lqe">DKK 275</p></div></div></div>`;
}
export {
  _page as default
};
