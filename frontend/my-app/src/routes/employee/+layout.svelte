<script>
    import { goto } from '$app/navigation';

    function changeRentalText(){
        goto('/employee/rental_records/result1')
    }

    function fetchComplaints(){
        goto('/employee/complaints')
    }
  </script>
  
  
  <div>
    <div class="button-container">
      <button class="custom-button rental-button" on:click={changeRentalText}>Rental Details</button>
      <button class="custom-button complaints-button" on:click={fetchComplaints}>Complaints</button>
    </div>
    <body><slot/></body>
  </div>
  
  
  <style>
    .custom-button {
      margin: 10px;
      padding: 15px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    .rental-button {
      background-color: #3498db;
      color: #fff;
    }
  
    .rental-button:hover {
      background-color: #2980b9;
    }
  
    .complaints-button {
      background-color: #e74c3c;
      color: #fff;
    }
  
    .complaints-button:hover {
      background-color: #c0392b;
    }
  
    .button-container{
      display:flex;
      justify-content: space-around;
      margin:25px;
    }
  </style>
  