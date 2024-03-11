export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","Navyom-Living-dining.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.Ct-w1M25.js","app":"_app/immutable/entry/app.Cxb-4HJ0.js","imports":["_app/immutable/entry/start.Ct-w1M25.js","_app/immutable/chunks/entry.BBIJJ-6L.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/entry/app.Cxb-4HJ0.js","_app/immutable/chunks/scheduler.Dgi1yRhy.js","_app/immutable/chunks/index._uay1wRk.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js')),
			__memo(() => import('./nodes/30.js')),
			__memo(() => import('./nodes/31.js')),
			__memo(() => import('./nodes/32.js')),
			__memo(() => import('./nodes/33.js')),
			__memo(() => import('./nodes/34.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/alteremployees",
				pattern: /^\/admin\/alteremployees\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/createowners",
				pattern: /^\/admin\/createowners\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/createacc",
				pattern: /^\/createacc\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/employee",
				pattern: /^\/employee\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/loginpage",
				pattern: /^\/loginpage\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/owner",
				pattern: /^\/owner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/owner/inbox",
				pattern: /^\/owner\/inbox\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/owner/request",
				pattern: /^\/owner\/request\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/user/complaints",
				pattern: /^\/user\/complaints\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/user/editprofile",
				pattern: /^\/user\/editprofile\/?$/,
				params: [],
				page: { layouts: [0,4,6,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/user/groupchat",
				pattern: /^\/user\/groupchat\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/user/groupchat/chat1",
				pattern: /^\/user\/groupchat\/chat1\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/user/groupchat/chat2",
				pattern: /^\/user\/groupchat\/chat2\/?$/,
				params: [],
				page: { layouts: [0,4,7,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/user/home",
				pattern: /^\/user\/home\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/user/notifications",
				pattern: /^\/user\/notifications\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/user/profile",
				pattern: /^\/user\/profile\/?$/,
				params: [],
				page: { layouts: [0,4,8,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/user/search/house",
				pattern: /^\/user\/search\/house\/?$/,
				params: [],
				page: { layouts: [0,4,9,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/user/search/search1",
				pattern: /^\/user\/search\/search1\/?$/,
				params: [],
				page: { layouts: [0,4,10,], errors: [1,,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/user/search/search2",
				pattern: /^\/user\/search\/search2\/?$/,
				params: [],
				page: { layouts: [0,4,11,], errors: [1,,,], leaf: 34 },
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
