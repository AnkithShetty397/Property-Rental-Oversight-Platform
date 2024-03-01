<script lang="ts">
    import { user_id } from 'D:/apartment Management System/Property-Rental-Oversight-Platform/frontend/my-app/src/lib/global.js';

    /** @type {import('./$types').PageData} */
    export let data;
    let data1=data;
</script>

<main>
    <body>
        <div class="profile-container">
            <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=${user_id}`} alt="" class="profile-image">
            <div class="user-info">
                    <h2>{ data1.info.name}</h2>
                    <p>Email: { data1.info.email }</p>
                    <p>Age: {data1.info.age }</p>
                    <p>Location: { data1.info.location }</p>
                    <p>Aadhar Number: { data1.info.adhar_no }</p>
                    <p>Phone Number: { data1.info.phone_no }</p>
            </div>
            <a href="/profile/edit/" class="button-link">Edit</a>
        </div>
    </body> 
    
</main>

<style>
    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: left;
      align-content: left;
    }
  
    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  
    .user-info {
      text-align: left;
    }
    .button-link {
        display: inline-block;
        padding: 10px 20px; 
        background-color: #787979; 
        color: #fff;
        text-decoration: none;
        border: none; 
        border-radius: 5px; 
        cursor: pointer;
    }

    .button-link:hover {
        background-color: #3e4349;
    }
</style>