import { user_id } from '$lib/global';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    try {
        let response = await fetch(`http://localhost:3000/api/complaints/getComplaints?user_id=${user_id}`)
        const comp= await response.json()
        const complaints = comp.response[0].complaints
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