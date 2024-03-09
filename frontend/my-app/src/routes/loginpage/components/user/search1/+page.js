import { loc } from '$lib/global.js';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
    try {
        const res = await fetch(`http://localhost:3000/api/search/searchHouse?city=${loc}`);
        if (!res.ok) {
            console.log('Response not okay');
            return {
                houses:[]
            }
        }

        const data = await res.json();
        return {
            houses: data
        };
    } catch (error) {
        console.error('Error fetching data:');
        return {
            house: []
        }
    }
};
