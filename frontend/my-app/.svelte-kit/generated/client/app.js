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
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46')
];

export const server_loads = [];

export const dictionary = {
		"/": [22],
		"/admin": [23,[2]],
		"/createacc": [24],
		"/employee": [25,[3]],
		"/employee/complaints": [26,[3,4]],
		"/employee/rental_records": [27,[3,5]],
		"/employee/rental_records/result1": [28,[3,5,6]],
		"/employee/rental_records/result2": [29,[3,5,7]],
		"/loginpage": [31,[9]],
		"/login": [30,[8]],
		"/owner": [32,[10]],
		"/owner/inbox": [33,[10,11]],
		"/owner/request": [34,[10,12]],
		"/user": [35,[13]],
		"/user/complaints": [36,[13,14]],
		"/user/editprofile": [37,[13,15]],
		"/user/groupchat": [38,[13,16]],
		"/user/groupchat/chat1": [39,[13,16]],
		"/user/groupchat/chat2": [40,[13,16]],
		"/user/home": [41,[13]],
		"/user/notifications": [42,[13,17]],
		"/user/profile": [43,[13,18]],
		"/user/search/house": [44,[13,19]],
		"/user/search/search1": [45,[13,20]],
		"/user/search/search2": [46,[13,21]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';