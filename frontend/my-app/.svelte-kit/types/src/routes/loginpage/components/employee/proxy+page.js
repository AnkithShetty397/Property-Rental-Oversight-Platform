// @ts-nocheck

import { block_no } from '$lib/global';


/** */
export const load = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/complaints/getComplaints?block_no=`);
        if (!response.ok) {
          throw new Error(`Failed to fetch user details: ${response.status}`);
        }
        console.log("Data fetch successful")
        console.log("complaints: ",response[0])
        const responseData = await response.json();
        return{ complaints: responseData[0] }
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
}