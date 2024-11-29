export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.GbIlBsl1.js","app":"_app/immutable/entry/app.Czyeg17G.js","imports":["_app/immutable/entry/start.GbIlBsl1.js","_app/immutable/chunks/entry.DoOPHFd4.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/entry/app.Czyeg17G.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/chunks/render.CTk9GdCv.js","_app/immutable/chunks/svelte-head.BABkBnbW.js","_app/immutable/chunks/disclose-version.CB45EG5S.js","_app/immutable/chunks/store.DUebGK4l.js","_app/immutable/chunks/index-client.BFLvA0Sv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/crew",
				pattern: /^\/crew\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/shop",
				pattern: /^\/shop\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
