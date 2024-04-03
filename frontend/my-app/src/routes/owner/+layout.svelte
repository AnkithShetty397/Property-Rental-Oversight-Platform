<script>
    import { goto } from "$app/navigation";
    import { user_id } from "$lib/global";

    let activeButton = "inbox";

    function inbox() {
        activeButton = 'inbox';
        goto('/owner/inbox');
    }

    function request() {
        activeButton = 'request';
        goto('/owner/request');
    }
</script>

<div class="main-container">
    <div class="buttons">
        <div>
            <button on:click={inbox} class:active={activeButton === 'inbox'} class="top-buttons">Inbox</button>
            <button on:click={request} class:active={activeButton === 'request'} class="top-buttons">Rent</button>
        </div>
    </div>
    <div class="body-container">
        <slot/>
    </div>
</div>

<style>
    .main-container {
        margin-left: 9px;
        max-width: calc(100vw - 18px); /* Set maximum width to 100% of viewport width minus the margins */
        display: flex;
        flex-direction: column; /* Added to ensure buttons and body-container stack vertically */
        align-items: center; /* Center content horizontally */
    }

    .buttons {
        display: flex;
        width: 100%;
    }

    .top-buttons {
        /* flex: 1; Grow to fill available space */
        height: 50px;
        margin: 20px;
        padding: 10px 50px;
        font-size: 16px;
        background-color: #778fa8;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .top-buttons:hover {
        background-color: #3f5f83;
    }

    .active {
        background-color: #3f5f83;
    }

    .body-container {
        width: 100%;
        max-width: calc(100vw - 18px); /* Set maximum width to 100% of viewport width minus the margins */
        height: 483px;
    }
</style>
