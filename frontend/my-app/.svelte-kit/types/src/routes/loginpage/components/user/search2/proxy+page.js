// @ts-nocheck
import { loc } from '$lib/global.js';

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export const load = async ({ fetch }) => {
    try {
        const res = await fetch(`http://localhost:3000/api/search/searchHouse?city=${loc}`)
        if (!res.ok) {
            console.log('Response not okay');
            return {
                houses: []
            };
        }

        const data = await res.json();
        return {
            houses: data
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            status: 500,
            error: 'Error fetching data'
        };
    }
};
