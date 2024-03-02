<script lang="ts">
    import { user_id } from 'D:/apartment Management System/Property-Rental-Oversight-Platform/frontend/my-app/src/lib/global.js';
    
    /** @type {import('./$types').PageData} */
    export let data;
    let data1 = data;
    let data2 = data1;
    
    async function uploadFile() {
        const fileInput = document.querySelector('input[type="file"]');

        if (fileInput instanceof HTMLInputElement && fileInput.files && fileInput.files.length > 0) {
            const file = fileInput.files[0];

            const formData = new FormData();
            formData.append('user_id', user_id);
            formData.append('profilephoto', file);

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

    async function updateProfile(){

    }

</script>



<main>
    <body>
        <div class="container">
            <div class="profile-container">
                <img src={`http://localhost:3000/api/profile/getProfilePicture?user_id=${user_id}`} alt="" class="profile-image">
                <p>Change Profile Photo <input type="file" accept=".jpg, .png" on:change={uploadFile} style="font-size: .9rem; width:400px"></p>
                <div class="user-info">
                    <p>Name:</p>
                    <input bind:value={data2.info.name} placeholder="Name" style="font-size: 1rem; width:400px; display: block;">
                
                    <p>Age:</p>
                    <input type="number" bind:value={data2.info.age} placeholder="Age" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Location:</p>
                    <input bind:value={data2.info.location} placeholder="Location" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Aadhar Number:</p>
                    <input bind:value={data2.info.adhar_no} placeholder="Aadhar Number" style="font-size: .9rem; width:400px; display: block;">
                
                    <p>Phone Number:</p>
                    <input bind:value={data2.info.phone_no} placeholder="Phone Number" style="font-size: .9rem; width:400px; display: block;">
                </div>                
            </div>
            <button class="button"disabled={(!data2.info.name || !data2.info.age || !data2.info.location || !data2.info.adhar_no || !data2.info.phone_no)} type="submit" on:click={updateProfile}>Save</button>
        </div>
    </body> 
</main>

<style>
    .container {
        overflow-y: auto;
        height: 530px;
        width: 1140px;
    }
  
    .profile-container {
        flex: 1;
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
