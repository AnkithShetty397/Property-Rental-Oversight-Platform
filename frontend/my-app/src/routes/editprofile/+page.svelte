<script>
    import { getContext } from 'svelte'
    import { onMount } from 'svelte'

    //const user_id = getContext('user_id')
    const user_id = "1234567890"

    let user = {
        name: 'User Name',
        image: 'http://localhost:3000/api/profile/getProfilePicture',
        email: 'user@example.com',
        age: 18,
        location: 'User Location'
    };
    
    async function fetchUserDetails() {
        try {
            const response = await fetch('http://localhost:3000/api/user/getUserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: user_id })
        })

        if (response.ok) {
            const userDetails = await response.json();
            user = {
            name: userDetails.user_name,
            email: userDetails.email,
            age: userDetails.age,
            location: userDetails.city,
            image: user.image // Keeping the original image URL
            };
        } else {
            console.error('Failed to fetch profile picture')
        }
        } catch (error) {
            console.error('Error fetching profile picture:', error)
        }
    }
    onMount(fetchUserDetails)
  </script>
  
  <style>
    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  
    .user-info {
      text-align: center;
    }
  </style>
  
  <div class="profile-container">
    <img src='http://localhost:3000/api/profile/getProfilePicture' alt="profile_picture" class="profile-image">
    <div class="user-info">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Location: {user.location}</p>
    </div>
  </div>
  