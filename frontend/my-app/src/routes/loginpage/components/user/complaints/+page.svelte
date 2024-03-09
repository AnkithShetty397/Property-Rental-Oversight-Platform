<script>
  import { user_id, block_no } from "$lib/global";

  let complaint = '';
  let description = '';

  function submitComplaint() {
    const data = {
        user_id: user_id,
        block_no: block_no,
        complaint: complaint,
        desc: description
    };

    fetch('http://localhost:3000/api/complaints/addComplaint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Response from server:', data);
        complaint = '';
        description = '';
    })
    .catch(error => {
        console.error('Error sending data to server');
    });
  }
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }

  .complaint-form{
    width: 1100px
  }
  .textarea-constraints {
    max-width: 1082px;
    min-width: 1082px;
    min-height: 100px;
    max-height: 188px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    font-size: 1rem;
  }

  button:hover {
    background-color: #45a049;
  }
</style>

<main>
  <h1>Complaint Form</h1>

  <form on:submit|preventDefault={submitComplaint} class="complaint-form">
    <label for="complaint">Complaint:</label>
    <input type="text" id="complaint" bind:value={complaint} />

    <label for="description">Description:</label>
    <textarea id="description" bind:value={description} class="textarea-constraints"></textarea>

    <button type="submit">Submit</button>
  </form>
</main>
