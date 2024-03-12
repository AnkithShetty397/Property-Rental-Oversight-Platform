<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="notification-container">
    <h2 class="review-header">Complaints</h2>
    <div class="scrollable-notification">
        {#if data.complaints && data.complaints.length > 0}
        {#each data.complaints as complaint}
            <div class="message-block">
            <div class="message">
                <p class="user-name">Name: {complaint.name}</p>
                <p class="message-content">Subject: {complaint.complaint}</p>
                <p class="message-content">Description: {complaint.desc}</p>
            </div>
            </div>
        {/each}
        {:else}
        <p class="no-reviews">No complaints</p>
        {/if}
    </div>
</div>

<style>
    .notification-container {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    width: 1150px;
    }

    .review-header {
    color: #333;
    }

    .scrollable-notification {
    max-height: 400px;
    overflow-y: auto;
    width: 1450px;
    }

    .message-block {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 1430px;
    }

    .user-name {
    font-weight: bold;
    color: #007bff;
    }

    .message-content {
    color: #555;
    }
</style>