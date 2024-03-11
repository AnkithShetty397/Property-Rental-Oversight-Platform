<script>
  import OwnerForm from './OwnerForm.svelte';
  import EmployeeForm from './EmployeeForm.svelte';
  import HouseForm from './HouseForm.svelte';

  let activeForm = 0; // 0: none, 1: owner, 2: employee, 3: house

  function goBack() {
    activeForm = 0;
  }
</script>

{#if activeForm !== 0}
  <button class="back-button" on:click={goBack}>Back</button>
{/if}

{#if activeForm === 0}
  <div class="button-container">
    <button on:click={() => activeForm = 1}>Create Owners</button>
    <button on:click={() => activeForm = 3}>Add House owner</button>
    <button on:click={() => activeForm = 2}>Add/Remove Employees</button>
  </div>
{/if}

{#if activeForm === 1}
  <OwnerForm />
{/if}

{#if activeForm === 2}
  <EmployeeForm />
{/if}

{#if activeForm === 3}
  <HouseForm />
{/if}


<style>
  .button-container {
display: flex;
justify-content: space-around;
margin: 25px;
}

.button-container button:nth-child(1) {
background-color: #4CAF50; /* Green color for the first button */
color: #fff;
}

.button-container button:nth-child(2) {
background-color: #0049B7;
; /* Red color for the second button */
color: #fff;
}

.button-container button:nth-child(3) {
background-color: red;
; /* Red color for the second button */
color: #fff;
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

.back-button {
    background-color: #ccc;
    color: #333;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .back-button:hover {
    background-color: #ddd;
  }

</style>