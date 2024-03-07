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
	() => import('./nodes/20')
];

export const server_loads = [];

export const dictionary = {
		"/": [5],
		"/loginpage": [6],
		"/loginpage/components": [7],
		"/loginpage/components/admin": [8],
		"/loginpage/components/employee": [9],
		"/loginpage/components/owner": [10],
		"/loginpage/components/user": [11,[2]],
		"/loginpage/components/user/editprofile": [12,[2]],
		"/loginpage/components/user/groupchat": [13,[2]],
		"/loginpage/components/user/home": [14,[2,3]],
		"/loginpage/components/user/home/search": [15,[2,3,4]],
		"/loginpage/components/user/house": [16,[2]],
		"/loginpage/components/user/notifications": [17,[2]],
		"/loginpage/components/user/profile": [18,[2]],
		"/loginpage/createacc": [19],
		"/loginpage/login": [20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';