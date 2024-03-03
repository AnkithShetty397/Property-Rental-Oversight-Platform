export let user_id = "0000000001"

/** @type {string} */
export let loc = ""

/**
 * Set the value of myVariable
 * @param {string} newValue The new value to assign
 */

export function setMyVariable(newValue) {
    loc= newValue;
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