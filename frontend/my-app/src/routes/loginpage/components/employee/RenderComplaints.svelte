<script lang="ts">
  export let complaints = [];

  function markAsDone(id) {
    // Filter out the complaint with the specified id
    complaints = complaints.filter(complaint => complaint._id !== id);
  }
</script>

<style>
  /* Styling for rendering complaints */
  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f8f8f8; /* Light gray background */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li:hover {
    background-color: #e0e0e0; /* Slightly darker background on hover */
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #3498db; /* Blue color for complaint title */
  }

  p {
    margin-bottom: 10px;
    color: #555;
  }

  .mark-as-done-button {
    background-color: #27ae60; /* Green color for the button */
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .mark-as-done-button:hover {
    background-color: #219653; /* Darker green on hover */
  }
</style>

<div>
  {#if complaints.length > 0}
    <ul>
      {#each complaints as complaint (complaint._id)}
        <li>
          <div>
            <h3>{complaint.name}</h3>
            <p>{complaint.complaint}</p>
            <p>{complaint.description}</p>
          </div>
          <button class="mark-as-done-button" on:click={() => markAsDone(complaint._id)}>
            Mark as Done
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <p>No complaints available.</p>
  {/if}
</div>
