<script>
  import { house_no } from 'D:/apartment Management System/Property-Rental-Oversight-Platform/frontend/my-app/src/lib/global.js'
  /** @type {import('./$types').PageData} */
  export let data;

  function rentHouse() {
      // Navigate to the payment gateway
      window.location.href = '/paymentgateway';
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
            <h2>House Number: {data.house_no},House Block</h2>
            <p>Location: House Location</p>
            <p>Price: House Price per month</p>
            <p>House Type: 3BHK</p>
            <p>Area: Area in sq.ft.</p>
            <p>Other Features: </p>
            <p>Description: desc</p>
        </div>
        <button on:click={rentHouse} class="button">Rent</button>
      </div>
    </div>
    <div class="review-container">
      <h3>Reviews</h3>
      {#if data.reviews && data.reviews.length > 0}
        {#each data.reviews as review}
          <div class="review">
            <p>{review}</p>
          </div>
        {/each}
      {:else}
        <p>No reviews yet</p>
      {/if}
    </div>
  </div>
</main>

<style>
    main {
      display: flex;
      width: 1100px;      
      margin-right:0
    }
    .scrollable-container {
        max-height: 500px; /* Adjust as needed */
        overflow-y: auto;
        max-width:1100px;
        width: 100%;
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
        background: #555;
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
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
  }
</style>
