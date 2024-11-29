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
		client: {"start":"_app/immutable/entry/start.C6iQXvQv.js","app":"_app/immutable/entry/app.C0pfaB4v.js","imports":["_app/immutable/entry/start.C6iQXvQv.js","_app/immutable/chunks/entry.cI6M_VwQ.js","_app/immutable/chunks/scheduler.C5382k6v.js","_app/immutable/entry/app.C0pfaB4v.js","_app/immutable/chunks/scheduler.C5382k6v.js","_app/immutable/chunks/index.m_iIgkgN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
