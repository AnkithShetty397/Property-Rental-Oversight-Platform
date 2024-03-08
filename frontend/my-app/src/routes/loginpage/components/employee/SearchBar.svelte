<!-- SearchBar.svelte -->

<script>
  let searchTerm = '';

  function handleSearch() {
    console.log('Search term:', searchTerm);
    // Implement your search logic here
  }
</script>

<style>
  .search-bar {
    display: flex;
    align-items: center;
    margin: 20px;
  }

  input {
    padding: 8px;
    font-size: 14px;
    width: 150px; /* Adjust the width as needed */
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    flex-grow: 1;
  }

  .dropdown-arrow {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    background-color: #f9f9f9;
  }

  button {
    margin-left: -1px; /* Overlapping border with the arrow */
    padding: 8px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
</style>

<div class="search-bar">
  <input type="text" bind:value={searchTerm} on:input={handleSearch} placeholder="Search..." />
  <div class="dropdown-arrow">▼</div>
  <button on:click={handleSearch}>Search</button>
</div>
