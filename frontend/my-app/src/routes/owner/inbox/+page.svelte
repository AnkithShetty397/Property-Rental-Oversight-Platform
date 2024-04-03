<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="notification-container">
    <h2 class="review-header">Notifications</h2>
    <div class="scrollable-notification">
        {#if data.notification && data.notification.length > 0}
            {#each data.notification as message}
                <div class="message-block">
                    <div class="user-name">{message.sender}</div>
                    <div class="message">
                        <p class="message-content">{message.content}</p>
                    </div>
                </div>
            {/each}
        {:else}
            <p class="no-reviews">No reviews yet</p>
        {/if}
    </div>
</div>

<style>
    .notification-container {
        background-color: #f0f0f0;
        padding: 20px;
        border-radius: 8px;
        width: auto; /* Adjusted width to fit content */
        max-width: 1100px; /* Added max-width to limit the width */
        margin: 0 auto; /* Center the container horizontally */
    }

    .review-header {
        color: #333;
    }

    .scrollable-notification {
        max-height: 400px;
        overflow-y: auto;
        width: 100%; /* Set width to 100% */
    }

    .message-block {
        margin-bottom: 15px;
        padding: 10px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .user-name {
        font-weight: bold;
        color: #007bff;
    }

    .message-content {
        color: #555;
    }
</style>
