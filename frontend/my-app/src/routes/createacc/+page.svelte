<script lang="ts">
    import {  } from 'zod';
    import { user_id } from 'D:/apartment Management System/Property-Rental-Oversight-Platform/frontend/my-app/src/lib/global.js';

    let data1 ={
        name: "",
        email: "",
        age: null,
        phone_no: "",
        adhar_no: "",
        location: ""
    }

    async function uploadFile() {
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput instanceof HTMLInputElement && fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            const formData = new FormData()
            formData.append('user_id', user_id)
            formData.append('profilephoto', file)
            console.log(formData)
            try {
                const response = await fetch('http://localhost:3000/api/profile/saveProfilePicture', {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Failed to upload file');
                }

                console.log('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('No file selected');
        }
    }

    async function updateProfile() {
        const requestBody = { ...data1, user_id : user_id }
        console.log(requestBody)
        try {
            const response = await fetch('http://localhost:3000/api/user/updateUserDetails', {
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
                
                    <p>Age:</p>
                    <input type="number" bind:value={data1.age} placeholder="Age" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Location:</p>
                    <input bind:value={data1.location} placeholder="Location" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Phone Number:</p>
                    <input bind:value={data1.phone_no} placeholder="Phone Number" style="font-size: .9rem; width:400px; display: block;">

                    <p>Aadhar Number:</p>
                    <input bind:value={data1.adhar_no} placeholder="Aadhar Number" style="font-size: 1rem; width:400px; display: block;">

                    <p>Profile Picture</p>
                    <input type="file" accept=".jpg, .png" on:change={uploadFile} style="font-size: .9rem; width:400px">
                </div>                
            </div>
            <button class="button"disabled={(!data1.name || !data1.age || !data1.location || !data1.adhar_no || !data1.phone_no)} type="submit" on:click={updateProfile}>Save</button>
        </div>
    </body> 
</main>

<style>
    .container {
        overflow-y: auto;
        height: 530px;
        width: 1140px;
        justify-content: center;
    }
  
    .profile-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: left;
        align-content: left;
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
