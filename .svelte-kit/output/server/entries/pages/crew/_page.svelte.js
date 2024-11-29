import { Z as head, W as stringify } from "../../../chunks/index.js";
import { w as wood_texture } from "../../../chunks/wood-texture.js";
import { a as attr } from "../../../chunks/attributes.js";
const viking_background = "/_app/immutable/assets/vikingbackground.DA5Dop9y.png";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Vargrclan</title>`;
    $$payload2.out += `<meta name="description" content="About this app">`;
  });
  $$payload.out += `<section id="section1"${attr("style", `background-image: url(${stringify(viking_background)});`)} class="svelte-wy7p6h"><div class="container svelte-wy7p6h"${attr("style", `background-image: url(${stringify(wood_texture)});`)}><h1 class="svelte-wy7p6h">Recruitment</h1> <p class="full-text svelte-wy7p6h">We in the Vargrclan recruit new members through daring raids and cultural rites of passage. 
			Young warriors are drawn to our reputation for adventure and glory, eager to prove their bravery in battle. 
			We hold initiation ceremonies where individuals showcase their skills, 
			fostering a strong sense of loyalty and belonging within our community.</p> <p class="short-text svelte-wy7p6h">We in the Vargrclan recruit new members through daring raids and cultural rites of passage, drawing young warriors eager to prove their bravery.
			Our initiation ceremonies foster loyalty and a strong sense of belonging.</p> <p class="svelte-wy7p6h">Sign up for the Vargrclan newsletter to start your recruitment.</p> <form class="svelte-wy7p6h"><input type="name" placeholder="Name" required class="svelte-wy7p6h"> <input type="email" placeholder="Email" required class="svelte-wy7p6h"> <button type="submit">Submit</button></form></div></section>`;
}
export {
  _page as default
};
