import { house_no } from '$lib/global.js';

/** @type {import('./$types').PageLoad} */
export const load = async () => {
    try {
        // Fetch house details
        let response = await fetch(`http://localhost:3000/api/search/getHouseDetails?house_no=${house_no}`);
        const houseData = await response.json();

        if (houseData.length === 0) {
            return {
                error: "No house data found"
            };
        }

        const houseInfo = houseData[0];

        //fetch house reviews
        let reviewsResponse = await fetch(`http://localhost:3000/api/review/getHouseReview?house_no=${house_no}`);
        const reviewsData = await reviewsResponse.json();
        console.log(reviewsData.response)

        return {
            house_no: houseInfo.house_no,
            house_type: houseInfo.house_type,
            house_floor: houseInfo.house_floor,
            block_name: houseInfo.block_name,
            block_city: houseInfo.city, 
            rent: houseInfo.rent,
            reviews: reviewsData.response
        };
    } catch (error) {
        return {
            error: "Failed to load data"
        };
    }
};

