<script>
  let houseDetails = {
    houseNumber: '',
    // Add other necessary details for houses
  };

  async function submitHouse() {
    try {
      const response = await fetch('/api/submit-house', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(houseDetails),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or navigate to another page
        console.log('House submitted successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error submitting house');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<div class="form-container active">
  <h1>Enter House Details</h1>
  <form on:submit|preventDefault={submitHouse}>
    <label for="houseNumber">House Number:</label>
    <input type="text" id="houseNumber" bind:value={houseDetails.houseNumber} required />

    <!-- Add other form fields for necessary details for houses -->

    <button type="submit">Submit House</button>
  </form>
</div>

<style>
  .form-container {
    max-width: 400px;
    width: 100%;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
    transition: transform 0.3s ease;
  }

  .form-container.active {
    transform: translateY(0);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  form {
    display: grid;
    gap: 20px;
  }

  label {
    font-size: 16px;
    color: #555;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    background-color: #3f5f83;
    color: #fff;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button:hover {
    background-color: #1d2f4a;
    color: #fff;
  }
</style>
