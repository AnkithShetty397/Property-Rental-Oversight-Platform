<!-- SearchBar.svelte -->

<script>
  let searchTerm = '';
  let type = "";

  function handleSearch() {
    console.log('Search term:', searchTerm);
    //fetch data
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
  button {
    margin-left: -1px; /* Overlapping border with the arrow */
    padding: 8px 12px;
    font-size: 14px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    height: 34px;
  }
  select {
    padding: 3px; 
    font-size: 16px; 
    border: 1px solid #ccc; 
    border-radius: 0;
    width: 200px; 
    transition: border-color 0.3s ease;
    height: 34px;
  }

  option {
      padding: 10px; 
  }

  select:hover {
      border-color: #999; 
  }
</style>

<div class="search-bar">
  <input type="text" bind:value={searchTerm} on:input={handleSearch} placeholder="Search..." />
  <select id="type" bind:value={type}>
    <option value="user">All</option>
    <option value="employee">tenant id</option>
    <option value="owner">Payment status</option>
    <option value="admin">Date</option>
  </select>
  <button on:click={handleSearch}>Search</button>
</div>
