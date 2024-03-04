// @ts-nocheck
import { house_no } from '$lib/global.js'

/** */
export const load = async()=>{
    //let response = await fetch(`http://localhost:3000/api/house/getHouseDetails?${house_no}`);
    //const res = await response.json()

    return {
        house_no: house_no,
        house_details: "edwe31",
        reviews:[{user_name:"Ram",message:"nice",rating:5},{user_name:"Tom",message:"cool",rating:4},{user_name:"Sam",message:"okayish",rating:2}]
    }
}
