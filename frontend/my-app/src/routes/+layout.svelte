<body>

    <header>
        <h1>House Renting Platform</h1>
    </header>

    <div class="container"> 
        <div class="sideblock">
            <ul>
                <li><a href="/profile/" class="button-link">Profile</a></li>
                <li><a href="/home/" class="button-link">Home</a></li>
                <li><a href="/groupchat" class="button-link">Notifications</a></li>
                <li><a href="/groupchat" class="button-link">Chatbox</a></li>
                <li><a href="/login/" class="button-link">Log-in</a></li>
                <li><a href="/createacc/" class="button-link">Create Account</a></li>
                <li><a href="/" class="button-link">About Us</a></li>
            </ul>
        </div>
        
        <slot/>   

    </div>

    <footer>
        <p>&copy; 2024 My Static Webpage. All rights reserved.</p>
    </footer>

</body>

<style>
    .button-link {
        display: inline-block; 
        padding: 10px 10px 10px 0px;
        background-color: #ccc; 
        color: #000001fb; 
        text-decoration: none;
        border: none; 
        border-radius: 0;
        transition: background-color 0.3s; 
        width: 130px; 
        text-align: center;

    }

    .button-link:hover {
        background-color: #7b7c82e6; 
    }
    
    .sideblock ul {
        list-style-type: none;
    }

    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
        /*background-image: url(http://localhost:3000/api/profile/getProfilePicture?user_id=0000000001);*/
    }
    header {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        height: 60px;
    }
    .container {
        width: 100vw;
        max-width: calc(100vw - 80px);
        margin: 20px;
        padding: 0 20px;
        display: flex;
        flex-direction: row; 
    }
    
    .sideblock {
        width: 200px; 
        height: 495px;
        background-color: #ccc;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin-right: 20px; 
        text-align: left;
    }

    footer {
        background-color: #333;
        font-size: small;
        color: #fff;
        text-align: center;
        height: 30px;
        padding: 5px 0;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>