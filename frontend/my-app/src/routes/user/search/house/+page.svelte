<script>
  import { house_no, user_id } from '$lib/global.js'
  /** @type {import('./$types').PageData} */
  export let data;
  let review = ""
  let rating = "4"
  let start_date = ""
  let end_date = ""
  let rent = data.rent

  function rentHouse() {
  const requestData = {
    user_id : user_id,
    tenant_id: null,
    house_no: house_no,
    start_date: start_date,
    end_date: end_date,
    rent_per_month: rent
  };

  fetch("http://localhost:3000/api/employee/addRentalRecord", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    start_date=""
    end_date=""
    return response.json();
  })
  .then(data => {
    console.log('Response:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
  
  async function addReview() {
    let name = "Anonymous";
    
    try {
      const response = await fetch(`http://localhost:3000/api/user/getUserName?user_id=${user_id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const userData = await response.json();
      name = userData[0].tenant_name;
      console.log("Tenant Name:", name);
    } catch (error) {
      console.error('Error:', error);
    }

    const requestBody = {
      user_id: user_id,
      user_name: name,
      house_no: house_no,
      comment: review,
      rating: rating
    };

    try {
      const reviewResponse = await fetch('http://localhost:3000/api/review/addReview', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!reviewResponse.ok) {
        throw new Error(`HTTP error! Status: ${reviewResponse.status}`);
      }
      console.log('Message sent successfully');
      review = "";
      rating = "4";
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

</script>
<main>
  <div class="scrollable-container">
    <div class="house-details-container">
      <div class="image-container">
          <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001`} alt="" class="house-image">
      </div>
      <div class="info-container">
        <div class="house-info">
            <h2>House Number: {data.house_no},House Block:{data.block_name}</h2>
            <p>Location: {data.block_city}</p>
            <p>Price: {data.rent} per month</p>
            <p>House Type: {data.house_type}</p>
            <p>Floor: {data.house_floor}</p>
            <input type="text" bind:value={start_date} class="date-input"placeholder="Enter the start date here... eg: 2002/05/30" />
            <input type="text" bind:value={end_date} class="date-input"placeholder="Enter the end date here... eg: 2002/05/30" />
        </div>
        <button on:click={rentHouse} class="button">Rent</button>
      </div>
    </div>
    <div class="review-container">
      <h3>Reviews</h3>
      <div class="scrollable-reviews">
        {#if data.reviews && data.reviews.length > 0}
          {#each data.reviews as review}
            <div class="review">
              <div class="user-name">{review.user_name}</div>
              <div class="message">
                <p>{review.comment}</p>
              </div>
              <div class="rating">
                {#each Array(review.rating) as _, i}
                  {#if i < 5}
                    <span class="{i < review.rating ? 'star filled' : 'star' }" style="color: gold;">★</span>
                  {/if}
                {/each}
              </div>
            </div>
          {/each}
        {:else}
          <p>No reviews yet</p>
        {/if}
      </div>
      <div class="search-bar">
        <input type="text" bind:value={review} placeholder="Enter review here..." />
        <select id="type" bind:value={rating}>
          <option value=1> 1 </option>
          <option value=2> 2 </option>
          <option value=3> 3 </option>
          <option value=4> 4 </option>
          <option value=5> 5 </option>
        </select>
        <button on:click={addReview}>Send</button>
      </div>
    </div>
  </div>
</main>

<style>
    main {
  display: flex;
  width: 1100px;      
  margin-right: 0;
}

.scrollable-container {
  max-height: 500px; 
  overflow-y: auto;
  max-width: 1100px;
  width: 100%;
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
  background: #555;
}

.date-input{
  width: 400px;
  margin: 5px 5px 5px 0px;
}

.house-details-container {
  display: flex;
  align-items: center;
  background-color: #d8d6d6;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.image-container {
  margin-right: 20px;
}

.house-image {
  width: 250px;
  height: 250px;
  border-radius: 10px;
}

.house-info {
  text-align: left;
}

.button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

.review-container {
  margin-top: 20px;
}

.review {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 1057px;
}

.user-name {
  flex: 1; /* Allow user name to grow and occupy available space */
  padding: 10px;
  margin: 10px 10px 10px 20px;
  width: 100px
}

.rating {
  margin-left: auto; /* Push rating to the right side */
  padding: 10px;
}

.message {
  flex: 1; /* Allow message to grow and occupy available space */
  padding: 10px;
}

.scrollable-reviews {
  max-height: 300px; 
  overflow-y: auto;
  margin-top: 20px; 
  scrollbar-width: thin;
}

.scrollable-reviews::-webkit-scrollbar {
  width: 10px;
}

.scrollable-reviews::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scrollable-reviews::-webkit-scrollbar-thumb {
  background: #888;
}

.scrollable-reviews::-webkit-scrollbar-thumb:hover {
  background: #676767;
}

.search-bar {
  display: flex;
  align-items: center;
  margin: 20px auto 10px 20px;
}

input {
  padding: 8px;
  font-size: 14px;
  width: 150px; 
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  flex-grow: 1;
  height: 21px;
}

button {
  margin-left: -1px;
  padding: 8px 12px;
  font-size: 14px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  height: 38px;
  width: 100px;
}

select {
  padding: 3px; 
  font-size: 16px; 
  border: 1px solid #ccc; 
  border-radius: 0;
  width: 100px; 
  transition: border-color 0.3s ease;
  height: 39px;
}

option {
  padding: 10px; 
}

select:hover {
  border-color: #999; 
}
</style>
