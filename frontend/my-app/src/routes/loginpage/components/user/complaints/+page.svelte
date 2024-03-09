<script>
  let complaint = '';
  let description = '';

  function submitComplaint() {
    // You can handle the complaint and description data here
    console.log('Complaint:', complaint);
    console.log('Description:', description);

    // Reset the input fields after submission
    complaint = '';
    description = '';
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
