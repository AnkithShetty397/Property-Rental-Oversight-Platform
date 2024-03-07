<script lang="ts">
    import { user_id } from '$lib/global.js';

    let data1 ={
        name: "",
        email: "",
        age: null,
        phone_no: "",
        adhar_no: "",
        location: "",
        password: ""
    }

    async function updateProfile() {
        const requestBody = { ...data1, user_id : user_id }
        console.log(requestBody)
        try {
            const response = await fetch('http://localhost:3000/api/createaccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                alert("Profile Update Failed")
                throw new Error('Failed to update profile');
            }
            alert('Profile updated successfully')
            console.log('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    }
</script>



<main>
    <body>
        <div class="container">
            <div class="profile-container">
                <div class="user-info">
                    <p>Name:</p>
                    <input bind:value={data1.name} placeholder="Name" style="font-size: 1rem; width:400px; display: block;">

                    <p>E-mail:</p>
                    <input bind:value={data1.email} placeholder="E-mail" style="font-size: 1rem; width:400px; display: block;">

                    <p>Password:</p>
                    <input type="password" bind:value={data1.password} placeholder="Password" minlength="8" style="font-size: 1rem; width:400px; display: block;">
                
                    <p>Age:</p>
                    <input type="number" bind:value={data1.age} placeholder="Age" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Location:</p>
                    <input bind:value={data1.location} placeholder="Location" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Phone Number:</p>
                    <input bind:value={data1.phone_no} placeholder="Phone Number" style="font-size: .9rem; width:400px; display: block;">

                    <p>Aadhar Number:</p>
                    <input bind:value={data1.adhar_no} placeholder="Aadhar Number" style="font-size: .9rem; width:400px; display: block;">

                    <button class="button"disabled={(!data1.name || !data1.age || !data1.location || !data1.adhar_no || !data1.phone_no)} type="submit" on:click={updateProfile}>Save</button>
                </div>                
            </div>
           </div>
    </body> 
</main>

<style>
    .container {
        overflow-y: auto;
        height: 530px;
        width: 1520px;
        justify-content: center;
    }
    .container::-webkit-scrollbar {
    width: 10px;
    }

    .container::-webkit-scrollbar-track {
    background: #f1f1f1;
    }

    .container::-webkit-scrollbar-thumb {
    background: #888;
    }

    .container::-webkit-scrollbar-thumb:hover {
    background: #555;
    }
  
    .profile-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }

    .user-info {
        text-align: left;
    }
    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4e4f4f;
        color: #fff;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin: 15px 15px 15px 0;
    }

    .button:disabled {
        background-color: #433f3f94; /* Change color when disabled */
        cursor: not-allowed;
    }

    .button:hover {
        background-color: #3e4349; /* Change color on hover */
    }
</style>
