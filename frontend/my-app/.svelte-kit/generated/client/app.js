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
		"/": [15],
		"/admin": [16,[2]],
		"/createacc": [17],
		"/employee": [18],
		"/loginpage": [20,[4]],
		"/login": [19,[3]],
		"/owner": [21,[5]],
		"/owner/inbox": [22,[5]],
		"/owner/request": [23,[5]],
		"/user": [24,[6]],
		"/user/complaints": [25,[6,7]],
		"/user/editprofile": [26,[6,8]],
		"/user/groupchat": [27,[6,9]],
		"/user/groupchat/chat1": [28,[6,9]],
		"/user/groupchat/chat2": [29,[6,9]],
		"/user/home": [30,[6]],
		"/user/notifications": [31,[6,10]],
		"/user/profile": [32,[6,11]],
		"/user/search/house": [33,[6,12]],
		"/user/search/search1": [34,[6,13]],
		"/user/search/search2": [35,[6,14]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';