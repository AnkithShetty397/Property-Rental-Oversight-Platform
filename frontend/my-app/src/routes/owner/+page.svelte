<script>
    import InboxPage from '../owner/inbox/+page.svelte';
    import RequestsPage from './request/+page.svelte';
  
    let currentPage = null;
  
    function switchToInbox() {
      currentPage = 'inbox';
    }
  
    function switchToRequests() {
      currentPage = 'requests';
    }
</script>
  
<div class="main-container">
    <div class="buttons">
        <div>
            <button on:click={switchToInbox} class:active={currentPage === 'inbox'} class="top-buttons">Inbox</button>
            <button on:click={switchToRequests} class:active={currentPage === 'requests'} class="top-buttons">Requests</button>
        </div>
    </div>
    <div class="body-container">
        {#if currentPage === 'inbox'}
            <InboxPage />
        {:else if currentPage === 'requests'}
            <RequestsPage />
        {:else}
            <InboxPage/>
        {/if}
    </div>
</div>
  
  <style>
    .main-container{
        margin-left: 9px;
        width: 1500px;
        justify-content: center;
    }
    .buttons{
        display:flex;
        width: 1500;
    }
    .top-buttons{
        width: 747px;
        height: 50px;
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
    .body-container{
        width:1450;
        height:483px;
        background-color:#b3b9bf;

    }
  </style>
