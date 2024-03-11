export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35')
];

export const server_loads = [];

export const dictionary = {
		"/": [13],
		"/loginpage": [14,[2]],
		"/loginpage/components": [15,[2,3]],
		"/loginpage/components/admin": [16,[2,3]],
		"/loginpage/components/admin/alteremployees": [17,[2,3]],
		"/loginpage/components/admin/createowners": [18,[2,3]],
		"/loginpage/components/employee": [19,[2,3]],
		"/loginpage/components/owner": [20,[2,3]],
		"/loginpage/components/owner/inbox": [21,[2,3]],
		"/loginpage/components/owner/request": [22,[2,3]],
		"/loginpage/components/user": [23,[2,3,4]],
		"/loginpage/components/user/complaints": [24,[2,3,4,5]],
		"/loginpage/components/user/editprofile": [25,[2,3,4,6]],
		"/loginpage/components/user/groupchat/chat1": [26,[2,3,4]],
		"/loginpage/components/user/groupchat/chat2": [27,[2,3,4]],
		"/loginpage/components/user/home": [28,[2,3,4]],
		"/loginpage/components/user/house": [29,[2,3,4,7]],
		"/loginpage/components/user/notifications": [30,[2,3,4]],
		"/loginpage/components/user/profile1": [31,[2,3,4,8]],
		"/loginpage/components/user/search/search1": [32,[2,3,4,9,10]],
		"/loginpage/components/user/search/search2": [33,[2,3,4,9,11]],
		"/loginpage/createacc": [34,[2]],
		"/loginpage/login": [35,[2,12]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';