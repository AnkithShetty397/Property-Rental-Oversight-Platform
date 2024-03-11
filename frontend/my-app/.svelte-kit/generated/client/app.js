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
		"/": [14],
		"/admin": [15,[2]],
		"/createacc": [16],
		"/employee": [17],
		"/loginpage": [19,[4]],
		"/login": [18,[3]],
		"/owner": [20],
		"/owner/inbox": [21],
		"/owner/request": [22],
		"/user": [23,[5]],
		"/user/complaints": [24,[5,6]],
		"/user/editprofile": [25,[5,7]],
		"/user/groupchat": [26,[5,8]],
		"/user/groupchat/chat1": [27,[5,8]],
		"/user/groupchat/chat2": [28,[5,8]],
		"/user/home": [29,[5]],
		"/user/notifications": [30,[5,9]],
		"/user/profile": [31,[5,10]],
		"/user/search/house": [32,[5,11]],
		"/user/search/search1": [33,[5,12]],
		"/user/search/search2": [34,[5,13]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';