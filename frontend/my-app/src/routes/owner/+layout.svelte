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
        width: 1500px;
        justify-content: center;
    }

    .buttons {
        display: flex;
        width: 1500;
    }

    .top-buttons {
        width: 705px;
        height: 50px;
        margin: 20px;
        padding: 10px 20px;
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
        width: 1450;
        height: 483px;
    }
</style>
