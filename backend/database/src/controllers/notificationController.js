const Notifications = require('../models/Notifications')

const getNotification = (req, res, next) => {
    const user_id = req.query.user_id;

    Notifications.findOne({ user_id })
        .then(notification => {
            if (!notification) {
                return res.status(404).json({ message: "No notifications found for the user" });
            }

            // Mapping over notifications array to extract sender and content for each notification
            const messages = notification.notification.map(item => {
                return { sender: item.sender, content: item.content };
            });

            res.status(200).json({ messages });
        })
        .catch(err => {
            console.error("Error fetching notifications:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
};

const sendNotification = (req, res, next) => {
    const { to, sender, content } = req.body;

    Notifications.findOne({ user_id: to })
        .then(existingNotification => {
            if (!existingNotification || !existingNotification.notification || existingNotification.notification.length === 0) {
                const newNotification = new Notifications({
                    user_id: to,
                    notification: [{ sender, content }]
                });
                return newNotification.save();
            } else {
                existingNotification.notification.push({ sender, content });
                return existingNotification.save();
            }
        })
        .then(savedNotification => {
            res.status(200).json({ message: "Notification sent successfully", notification: savedNotification });
        })
        .catch(err => {
            console.error("Error sending notification:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
};

module.exports = { getNotification,sendNotification }
