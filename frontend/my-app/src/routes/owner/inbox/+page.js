import { user_id } from '$lib/global.js'

export const load = async () => {
    try {
        console.log(user_id)
        let response = await fetch(`http://localhost:3000/api/notifications?user_id=${user_id}`)
        const notifications = await response.json()
        console.log(notifications)
        if (notifications.messages.length === 0) {
            return {
                notification: []
            };
        }
        console.log(notifications.messages)
        const messages = notifications.messages

        return {
            notification: messages
        }
    } catch (error) {
        console.error("Error loading notifications:", error);
        return {
            notification: []
        }
    }
}
