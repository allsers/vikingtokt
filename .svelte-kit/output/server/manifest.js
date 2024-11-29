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
		client: {"start":"_app/immutable/entry/start.Dyg42vbt.js","app":"_app/immutable/entry/app.DNz3u6Gm.js","imports":["_app/immutable/entry/start.Dyg42vbt.js","_app/immutable/chunks/entry.BgwmAbSs.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/entry/app.DNz3u6Gm.js","_app/immutable/chunks/runtime.BrFAUK3q.js","_app/immutable/chunks/render.CTk9GdCv.js","_app/immutable/chunks/svelte-head.BABkBnbW.js","_app/immutable/chunks/disclose-version.CB45EG5S.js","_app/immutable/chunks/store.DUebGK4l.js","_app/immutable/chunks/index-client.BFLvA0Sv.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
