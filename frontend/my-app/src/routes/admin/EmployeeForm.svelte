<script lang="ts">
  let employeeDetails = {
    employeeId: '',
    operation: 'add', // Default operation is 'add'
    employee_name: '',
    employee_age: '',
    gender: '',
    employee_salary: '',
    hire_date: '',
    DoB: '',
    phone_no: '',
    email: '',
    password: '',
  };

  async function performEmployeeOperation() {
    try {
      let url = '';
      let method = '';
      console.log(employeeDetails);
      if (employeeDetails.operation === 'add') {
        url = 'http://localhost:3000/api/admin/createemployee';
        method = 'POST';
      } else if (employeeDetails.operation === 'remove') {
        url = `http://localhost:3000/api/admin/removeemployee?user_id=${employeeDetails.employeeId}`;
      }

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeDetails),
      });

      if (response.ok) {
        console.log(`Employee ${employeeDetails.operation} successful`);
      } else {
        console.error(`Error in employee ${employeeDetails.operation}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<div style="height: 490px; overflow: auto; border-radius: 10px">
<div class="form-container">
  <h1>Add/Remove Employees</h1>
  <form on:submit|preventDefault={performEmployeeOperation}>
    {#if employeeDetails.operation === 'remove'}
      <label for="employeeId">Employee ID:</label>
      <input type="text" id="employeeId" bind:value={employeeDetails.employeeId} required />
    {/if}

    <label for="operation">Select Operation:</label>
    <select id="operation" bind:value={employeeDetails.operation} required>
      <option value="add">Add Employee</option>
      <option value="remove">Remove Employee</option>
    </select>

    {#if employeeDetails.operation === 'add'}
      <label for="name">Name:</label>
      <input type="text" id="name" bind:value={employeeDetails.employee_name} required />

      <label for="age">Age:</label>
      <input type="text" id="age" bind:value={employeeDetails.employee_age} required />

      <label for="gender">Gender:</label>
      <select id="gender" bind:value={employeeDetails.gender} required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label for="salary">Salary:</label>
      <input type="number" id="salary" bind:value={employeeDetails.employee_salary} required />

      <label for="hireDate">Hire Date:</label>
      <input type="text" id="hireDate" bind:value={employeeDetails.hire_date} required />

      <label for="dob">Date of Birth:</label>
      <input type="text" id="dob" bind:value={employeeDetails.DoB} required />

      <label for="phoneNo">Phone Number:</label>
      <input type="text" id="phoneNo" bind:value={employeeDetails.phone_no} required />

      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={employeeDetails.email} required />

      <label for="password">Password:</label>
      <input type="password" id="password" bind:value={employeeDetails.password} required />

    {/if}

    <button type="submit">Submit</button>
  </form>
</div>
</div>

<style>
  select{
    height: 35px
  }
  .form-container {
    max-width: 800px;
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

  .form-container form {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr); /* Two fields in a row */
  }

  .form-container label {
    font-size: 16px;
    color: #555;
    text-align: left;
  }

  .form-container input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .form-container button {
    background-color: #3f5f83;
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
</style>
