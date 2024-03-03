import { loc } from 'D:/apartment Management System/Property-Rental-Oversight-Platform/frontend/my-app/src/lib/global.js'

/** @type {import('./$types').PageLoad} */
export const load = async()=>{
    //let res = await fetch(`http://localhost:3000/api/house/getHouseList?city=${loc}`);
    
    //const resp = await res.json()
    let response={houses: [
        { "house_no": "A101", "block_no": "B1" },
        { "house_no": "B202", "block_no": "B2" },
        { "house_no": "C303", "block_no": "B3" },
        { "house_no": "A101", "block_no": "B1" },
        { "house_no": "B202", "block_no": "B2" },
        { "house_no": "C303", "block_no": "B3" }
    ]
    }
    return {
        houses: response.houses
    }
}