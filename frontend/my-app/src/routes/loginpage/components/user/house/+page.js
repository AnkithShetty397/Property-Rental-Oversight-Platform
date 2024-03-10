import { house_no } from '$lib/global.js'

/** @type {import('./$types').PageLoad} */
export const load = async()=>{
    /*
    let response = await fetch(`http://localhost:3000/api/house/getHouseDetails?${house_no}`);
    const res = await response.json()
    return{
        house_no: res.house_no,
        house_type: res.house_type,
        house_floor:res.house_floor,
        block_name: res.block_name,
        block_city: res.city,
        owner_name: res.owner_name,
        owner_phoneno: res.phone_no
    }
    */
    return {
        house_no: house_no,
        house_details: "edwe31",
        reviews:[{user_name:"Ram",message:"nice",rating:5},{user_name:"Tom",message:"cool",rating:4},{user_name:"Sam",message:"okayish",rating:2}]
    }
}
