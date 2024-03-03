/** @type {import('./$types').PageLoad} */
export const load = async()=>{
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