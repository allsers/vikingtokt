import { Z as head, S as pop, W as stringify, Q as push } from "../../chunks/index.js";
import { w as wood_texture } from "../../chunks/wood-texture.js";
import { l as leikislogo2 } from "../../chunks/leikislogo2.js";
import { a as attr } from "../../chunks/attributes.js";
const background_image = "/vikingtokt/_app/immutable/assets/BackgroundImage.BxOsKRml.png";
const norse_image = "/vikingtokt/_app/immutable/assets/norse.jcG7f86W.png";
const vikingsymbol = "/vikingtokt/_app/immutable/assets/vikingsymbol.DmAip9nr.png";
const bluebanner = "/vikingtokt/_app/immutable/assets/left-banner.uuAdaOhh.png";
const shield = "/vikingtokt/_app/immutable/assets/vikingetogt_skjold.CVjRLIFQ.png";
const axe = "/vikingtokt/_app/immutable/assets/vikingetogt_axe.CuAeyrr8.png";
const leikislogo1 = "/vikingtokt/_app/immutable/assets/leikislogo1._ZBXKB8q.png";
const flyer = "/vikingtokt/_app/immutable/assets/flyer.C4lnXARR.png";
function _page($$payload, $$props) {
  push();
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Vargrclan</title>`;
    $$payload2.out += `<meta name="description" content="Viking home page">`;
  });
  $$payload.out += `<section id="section1"${attr("style", `background-image: url(${stringify(background_image)});`)} class="svelte-sirhnn"><h1 class="svelte-sirhnn">Óttalausir Ráðar Norðr</h1> <h2 id="eng-slogan" class="svelte-sirhnn">Fearless Raiders of the North</h2></section> <section id="section2"${attr("style", `background-image: url(${stringify(norse_image)});`)} class="svelte-sirhnn"><div class="flex svelte-sirhnn"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><h2 class="svelte-sirhnn">Our History</h2> <div class="text-content svelte-sirhnn"><p class="full-text svelte-sirhnn">The Vargrclan has a storied history rooted in the fierce spirit of the Viking Age. Emerging from the rugged fjords of Scandinavia, this clan became renowned for their seafaring prowess and warrior culture. Led by their formidable chieftain, Eirik Ulfrhjarta (Wolfheart), the Vargrclan embarked on daring raids and explorations across the North Sea, establishing a legacy that would echo through generations. They upheld traditions that honored their ancestors while adapting to new realities, revering the sea and performing rituals before voyages to ensure safe passage. Today, the legacy of the Vargrclan endures, embodying the courage and resilience that defined their journey.</p> <p class="short-text svelte-sirhnn">The Vargrclan has a rich Viking heritage, known for our seafaring skills and warrior culture. Under chieftain Eirik Ulfrhjarta, we undertook daring raids across the North Sea. We honor our ancestors with rituals for safe voyages. Our enduring legacy embodies the courage and resilience that define us.</p></div></div></section> <section id="section3"${attr("style", `background-image: url(${stringify(vikingsymbol)});`)} class="svelte-sirhnn"><div class="showcase svelte-sirhnn"><div class="imgs svelte-sirhnn"><div class="side svelte-sirhnn"><img id="banner"${attr("src", bluebanner)} alt="banner" class="svelte-sirhnn"></div> <div class="mid svelte-sirhnn"><h2${attr("style", `background-image: url(${stringify(wood_texture)});`)} id="showcase-header" class="svelte-sirhnn">Showcase</h2> <img${attr("src", shield)} alt="shield" id="shield" class="svelte-sirhnn"> <div class="row svelte-sirhnn"><img id="leikislogo"${attr("src", leikislogo1)} alt="logo1" class="svelte-sirhnn"> <img${attr("src", axe)} alt="axe"> <img id="leikislogo"${attr("src", leikislogo2)} alt="logo2" class="svelte-sirhnn"></div></div> <div class="side svelte-sirhnn"><img id="banner"${attr("src", bluebanner)} alt="banner" class="svelte-sirhnn"></div></div> <div class="center svelte-sirhnn"><img id="flyer"${attr("src", flyer)} alt="flyer" class="svelte-sirhnn"></div></div></section>`;
  pop();
}
export {
  _page as default
};
