<script context="module">
  export let showForm;
</script>

<script>
  let ownerDetails = {
    name: '',
    email: '',
    // Add other necessary details
  };

  async function createOwner() {
    try {
      const response = await fetch('http://localhost:3000/api/createowner', {
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
    <input type="text" id="name" bind:value={ownerDetails.name} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={ownerDetails.email} required />

    <!-- Add other form fields for necessary details -->

    <button type="submit">Create Owner</button>
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