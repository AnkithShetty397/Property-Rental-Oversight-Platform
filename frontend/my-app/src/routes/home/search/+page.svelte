<script>
  import { setHouse_no } from '$lib/global.js'
  import { goto } from '$app/navigation';
  
  /** @type {import('./$types').PageData} */
  export let data;
  console.log(data)

  /**
 * Handle button click event.
 * @param {string} houseNo - The house number.
 */
  
function handleButtonClick(houseNo) {
    console.log(houseNo)
    setHouse_no(houseNo)
    goto('/house');
}
</script>

<main>
  <div class=scrollable-container>
    {#each data.houses as house}
      <div class="result">
          <div class="image-label">
              <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`} alt="" class="house-image">
            <span class="label"></span>
          </div>
          <div class="text-content">
            <h3>Title: {house.house_no}</h3>
            <p>Description goes here...{house.block_no}</p>
          </div>
          <button class="open-button" on:click={() => handleButtonClick(house.house_no)} >Open</button>
      </div>
    {/each}
  </div>
</main>

<style>
  .scrollable-container {
    max-height: 450px; /* Adjust as needed */
    overflow-y: auto;
    width: 1100px;
    padding-right: 10px; /* Add padding to create space for the scrollbar */
}

.scrollable-container::-webkit-scrollbar {
      width: 10px;
}

/* Track (the area behind the scrollbar) */
.scrollable-container::-webkit-scrollbar-track {
      background: #f1f1f1;
}

/* Handle (the draggable scrolling part) */
.scrollable-container::-webkit-scrollbar-thumb {
      background: #888;
}

/* Handle on hover */
.scrollable-container::-webkit-scrollbar-thumb:hover {
     background: #676767;
}
.result {
      position: relative; /* Add relative positioning to .result */
      display: flex;
      margin-bottom: 20px;
      background-color: #b0afaf; /* Slightly dark color */
      padding: 10px; /* Add padding for better spacing */
      border-radius: 10px;
}

.open-button {
  position: absolute;
  bottom: 15px; /* Adjust as needed */
  right: 15px; /* Adjust as needed */
  padding: 12px 20px; /* Adjust padding to increase or decrease button size */
  font-size: 14px; /* Adjust font size */
  background-color: #424342; /* Green background */
  color: white; /* Text color */
  border: none;
  border-radius: 5px; /* Adjust border radius to change button shape */
  cursor: pointer;
}

.open-button:hover {
  background-color: #1d1e1d; /* Darker green background on hover */
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
