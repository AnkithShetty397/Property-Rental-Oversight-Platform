// @ts-nocheck
import { block_no } from '$lib/global.js';

/** */
export const load = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/groupchat/getMessage?block_no=${block_no}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        const messages = responseData.response[0].messages;

        return {
            streamed:{messages: messages}
        };
    } catch (error) {
        console.error('Error fetching messages:', error);
        return {
            streamed:{messages: []}
        };
    }
};
