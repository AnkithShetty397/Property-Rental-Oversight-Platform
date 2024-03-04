import { house_no } from '$lib/global.js'

/** @type {import('./$types').PageLoad} */
export const load = async()=>{
    //let response = await fetch(`http://localhost:3000/api/house/getHouseDetails?${house_no}`);
    //const res = await response.json()

    return {
        house_no: house_no,
        house_details: "edwe31",
        reviews:["nice","cool","okayish"]
    }
}
