import { type, data } from '$lib/global';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    try {
        let response = await fetch(`http://localhost:3000/api/employee/retrieveRentalRecords?type=${type}&data=${data}`)
        const complaints= await response.json()
        if (complaints.length === 0) {
            return {
                complaints: []
            };
        }
        return {
            complaints: complaints
        }
    } catch (error) {
        console.error("Error loading complaints:", error);
        return {
            complaints: []
        }
    }
}