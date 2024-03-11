<script>
  import { loc, setHouse_no } from '$lib/global.js'
  import { goto } from '$app/navigation';
  
  /** @type {import('./$types').PageData} */
  export let data

  /**
   * Handle button click event.
   * @param {string} houseNo - The house number.
   */
  function handleButtonClick(houseNo) {
      setHouse_no(houseNo)
      goto('/user/search/house');
  }
</script>

<main>
  <div class=scrollable-container>
    {#if data.houses.length === 0}
      <div>No houses found</div>
    {:else}
      {#each data.houses as house}
        <div class="result">
            <div class="image-label">
                <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`} alt="" class="house-image">
              <span class="label"></span>
            </div>
            <div class="text-content">
              <h3>House number: {house.house_no}</h3>
              <p>Block number: {house.block_no}</p>
              <p>Description goes here...</p>
            </div>
            <button class="open-button" on:click={() => handleButtonClick(house.house_no)}>Open</button>
        </div>
      {/each}
    {/if}
  </div>
</main>

<style>
  .scrollable-container {
    max-height: 450px;
    overflow-y: auto;
    width: 1100px;
    padding-right: 10px; 
}

.scrollable-container::-webkit-scrollbar {
      width: 10px;
}

.scrollable-container::-webkit-scrollbar-track {
      background: #f1f1f1;
}

.scrollable-container::-webkit-scrollbar-thumb {
      background: #888;
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
      background: #676767;
}
.result {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      background-color: #b0afaf;
      padding: 10px; 
      border-radius: 10px;
}

.open-button {
  position: absolute;
  bottom: 15px; 
  right: 15px; 
  padding: 12px 20px; 
  font-size: 14px; 
  background-color: #424342; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.open-button:hover {
  background-color: #1d1e1d; 
}

.image-label {
width: 100px; 
flex-shrink: 0; 
}

.image-label img {
width: 100%;
height: auto;
display: block;
}

.label {
display: block;
text-align: center;
margin-top: 5px; 
}

.text-content {
flex-grow: 1; 
padding-left: 10px; 
}

.text-content h3 {
margin-top: 0;
margin-bottom: 5px; 
}

.text-content p {
margin-top: 0;
}
</style>
  