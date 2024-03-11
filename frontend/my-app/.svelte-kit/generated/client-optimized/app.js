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
	() => import('./nodes/34')
];

export const server_loads = [];

export const dictionary = {
		"/": [12],
		"/admin": [13],
		"/admin/alteremployees": [14],
		"/admin/createowners": [15],
		"/createacc": [16],
		"/employee": [17],
		"/loginpage": [19,[3]],
		"/login": [18,[2]],
		"/owner": [20],
		"/owner/inbox": [21],
		"/owner/request": [22],
		"/user": [23,[4]],
		"/user/complaints": [24,[4,5]],
		"/user/editprofile": [25,[4,6]],
		"/user/groupchat": [26,[4,7]],
		"/user/groupchat/chat1": [27,[4,7]],
		"/user/groupchat/chat2": [28,[4,7]],
		"/user/home": [29,[4]],
		"/user/notifications": [30,[4]],
		"/user/profile": [31,[4,8]],
		"/user/search/house": [32,[4,9]],
		"/user/search/search1": [33,[4,10]],
		"/user/search/search2": [34,[4,11]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';