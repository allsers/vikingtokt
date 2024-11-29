import { T as store_get, V as unsubscribe_stores, S as pop, Q as push, W as slot } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
import { a as attr } from "../../chunks/attributes.js";
import { l as leikislogo2 } from "../../chunks/leikislogo2.js";
const logo = "/_app/immutable/assets/logo.CdfuFSTc.png";
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<header class="svelte-1em0pko"><nav class="svelte-1em0pko"><ul class="svelte-1em0pko"><li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/crew" ? "page" : void 0)} class="svelte-1em0pko"><a href="/crew" class="svelte-1em0pko">Crew</a></li> <li id="flex"${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "page" : void 0)} class="svelte-1em0pko"><img id="logo"${attr("src", logo)} alt="logo" class="svelte-1em0pko"> <a href="/" class="svelte-1em0pko">Vargrclan</a></li> <li${attr("aria-current", store_get($$store_subs ??= {}, "$page", page).url.pathname === "/shop" ? "page" : void 0)} class="svelte-1em0pko"><a href="/shop" class="svelte-1em0pko">Shop</a></li></ul></nav></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-11rrqya"><div class="container svelte-11rrqya"><div class="sep svelte-11rrqya"><div class="logo svelte-11rrqya"><img${attr("src", leikislogo2)} id="logo" alt="logo" class="svelte-11rrqya"> <h1 class="svelte-11rrqya">Vargrclan</h1></div> <p>© 2024 Vargrclan</p></div> <div class="row svelte-11rrqya"><div class="footer-col"><h4 class="svelte-11rrqya">Vargrclan</h4> <ul class="svelte-11rrqya"><li class="svelte-11rrqya"><a href="/" class="svelte-11rrqya">Home</a></li> <li class="svelte-11rrqya"><a href="/crew" class="svelte-11rrqya">Recruitment</a></li> <li class="svelte-11rrqya"><a href="/shop" class="svelte-11rrqya">Shop</a></li></ul></div></div></div></footer>`;
}
function _layout($$payload, $$props) {
  $$payload.out += `<div class="app svelte-skyukn">`;
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-skyukn"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
