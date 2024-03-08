<script lang="ts">
  import { onMount } from 'svelte';

  import SearchBar from './SearchBar.svelte';

  let rentalButtonText = 'Rental Records';
  let complaintsButtonText = 'Complaints';
  let showSearchBar = false;

  function changeRentalText() {
    showSearchBar = true;
  }

  function changeComplaintsText() {
    complaintsButtonText = 'Clicked!';
    showSearchBar = false;
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

    <button class="custom-button complaints-button" on:click={changeComplaintsText}>
      {complaintsButtonText}
    </button>
  </div>

  {#if showSearchBar}
    <SearchBar />
  {/if}
</div>
