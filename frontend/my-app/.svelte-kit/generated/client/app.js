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
	() => import('./nodes/23')
];

export const server_loads = [];

export const dictionary = {
		"/": [7],
		"/loginpage": [8],
		"/loginpage/components": [9],
		"/loginpage/components/admin": [10],
		"/loginpage/components/employee": [11],
		"/loginpage/components/owner": [12],
		"/loginpage/components/user": [13,[2]],
		"/loginpage/components/user/editprofile": [14,[2]],
		"/loginpage/components/user/groupchat": [15,[2]],
		"/loginpage/components/user/home": [16,[2,3]],
		"/loginpage/components/user/house": [17,[2,4]],
		"/loginpage/components/user/notifications": [18,[2]],
		"/loginpage/components/user/profile": [19,[2]],
		"/loginpage/components/user/search1": [20,[2,5]],
		"/loginpage/components/user/search2": [21,[2,6]],
		"/loginpage/createacc": [22],
		"/loginpage/login": [23]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';