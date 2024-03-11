import { u as user_id } from "../../../../chunks/global.js";
const load = async () => {
  try {
    let response = await fetch(`http://localhost:3000/api/notifications?user_id=${user_id}`);
    const notifications = await response.json();
    if (notifications.length === 0) {
      return {
        notification: []
      };
    }
    const houseInfo = notifications[0];
    return {
      notification: notifications
    };
  } catch (error) {
    return {
      notification: []
    };
  }
};
export {
  load
};
