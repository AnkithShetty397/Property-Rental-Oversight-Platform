import { user_id } from '$lib/global.js';

export const load = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/user/getUserDetails?user_id=${user_id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.status}`);
        }
        console.log("Data fetch successful")
        const responseData = await response.json();
        return{ info: responseData[0] }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
}