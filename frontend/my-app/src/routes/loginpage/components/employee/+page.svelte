<script lang="ts">
  import { onMount } from 'svelte';

  import SearchBar from './SearchBar.svelte';
  import RenderComplaints from './RenderComplaints.svelte';

  let rentalButtonText = 'Rental Records';
  let complaintsButtonText = 'Complaints';
  let showSearchBar = false;
  let count = 5;
  let complaints = [];

  function changeRentalText() {
    showSearchBar = true;
  }

  async function renderComplaints() {
    // Simulating fetching data from the server
    complaints = generateRandomComplaints();
    console.log(complaints);
  }

  // Function to generate random complaints
  function generateRandomComplaints() {
    const complaints = [];
    for (let i = 1; i <= count; i++) {
      complaints.push({ _id: i, title: `Complaint ${i}`, description: `Issue ${i}` });
    }
    return complaints;
  }

  // Function to reset button text and hide SearchBar on component mount
  onMount(() => {
    resetButtons();
  });

  function resetButtons() {
    rentalButtonText = 'Rental Records';
    complaintsButtonText = 'Complaints';
    showSearchBar = false;
  }
</script>

<style>
  .custom-button {
    margin: 10px;
    padding: 15px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .rental-button {
    background-color: #3498db;
    color: #fff;
  }

  .rental-button:hover {
    background-color: #2980b9;
  }

  .complaints-button {
    background-color: #e74c3c;
    color: #fff;
  }

  .complaints-button:hover {
    background-color: #c0392b;
  }

  .button-container{
    display:flex;
    justify-content: space-around;
    margin:25px;
  }

  
</style>

<div>
  <div class="button-container">
    <button class="custom-button rental-button" on:click={changeRentalText}>
      {rentalButtonText}
    </button>

    <button class="custom-button complaints-button" on:click={renderComplaints}>
      {complaintsButtonText}
    </button>
  </div>

  {#if showSearchBar}
    <SearchBar />
  {:else}
    <RenderComplaints {complaints} />
  {/if}
</div>
