<script context="module">
  export let showForm;
</script>

<script>
  let ownerDetails = {
    owner_name: '',
    email: '',
    password: '',
    adhar_id: '',
    phone_no: '',
    location: '',
    owner_age: '',
    // Add other necessary details
  };

  async function createOwner() {
    try {
      const response = await fetch('http://localhost:3000/api/admin/createowner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ownerDetails),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or navigate to another page
        console.log('Owner created successfully');
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error creating owner');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<div class="form-container" class:hidden={!$showForm}>
  <h1>Create Owners</h1>
  <form on:submit|preventDefault={createOwner}>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={ownerDetails.owner_name} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={ownerDetails.email} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={ownerDetails.password} required />
    
        <label for="owner_age">Owner Age:</label>
        <input type="text" id="owner_age" bind:value={ownerDetails.owner_age} required />

    <label for="adhar_id">Aadhar ID:</label>
    <input type="text" id="adhar_id" bind:value={ownerDetails.adhar_id} required />

    <label for="phone_no">Phone Number:</label>
    <input type="text" id="phone_no" bind:value={ownerDetails.phone_no} required />

    <label for="location">Location:</label>
    <input type="text" id="location" bind:value={ownerDetails.location} required />

    <!-- Add other form fields for necessary details -->

    <button class="temp" type="submit">Create Owner</button>
  </form>
</div>

<style>
  .temp{
    margin-bottom: 25px;
  }
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
  transition: transform 0.3s ease; /* Add a transition effect */
  }
  
  .form-container button {
  background-color: #3f5f83; /* Set your desired background color */
  color: #fff;
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease; /* Add color transition */
  }
  
  .form-container button:hover {
  background-color: #1d2f4a;
  color: #fff;
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
  padding: 12px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  }
  
  button:hover {
  background-color: #1d2f4a;
  }
  
  </style>
