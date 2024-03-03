<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log(data)
  
  </script>

<main>
    <div>
      {#each data.houses as house}
        <div class="result">
            <div class="image-label">
                <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`} alt="" class="house-image">
              <span class="label">Label</span>
            </div>
            <div class="text-content">
              <h3>Title: {house.house_no}</h3>
              <p>Description goes here...{house.block_no}</p>
            </div>
        </div>
      {/each}
    </div>
  </main>
  
  <style>
      .result {
      display: flex;
      margin-bottom: 20px; 
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
