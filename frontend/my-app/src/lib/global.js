/** @type {string} */
export let loc = ""
export let house_no = ""
export let user_id = "0000000001"

/**
 * Set the value of myVariable
 * @param {string} newValue The new value to assign
 */
export function setLoc(newValue) {
    loc= newValue;
}

/**
 * Set the value of myVariable
 * @param {string} newValue The new value to assign
 */
export function setHouse_no(newValue) {
    house_no= newValue;
}


export const load = async()=>{
    let data={houses: [
        { "house_no": "A101", "block_no": "B1" },
        { "house_no": "B202", "block_no": "B2" },
        { "house_no": "C303", "block_no": "B3" }
    ]
    }
    return data.houses
}