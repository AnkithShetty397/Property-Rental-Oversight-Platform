<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="scrollable-notification">
    {#if data.complaints && data.complaints.length > 0}
    {#each data.complaints as complaint}
        <div class="message-block">
        <div class="message">
            <p class="user-name">Rental No: {complaint.rental_no}, Rent Amount: {complaint.rent_amount}</p>
            <p class="message-content">Start_date: {complaint.start_date} , End_date: {complaint.end_date}</p>
            <p class="message-content">Payment_status: {complaint.payment_status}, House_No: {complaint.house_no}</p>
        </div>
        </div>
    {/each}
    {:else}
    <p class="no-reviews">No complaints</p>
    {/if}
</div>


<style>
    .scrollable-notification {
    margin: 10px 10px 10px 30px;
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