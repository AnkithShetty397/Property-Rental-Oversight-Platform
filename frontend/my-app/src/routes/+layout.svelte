<body>
    <header>
        <h1>Apartment Management System</h1>
    </header>
    <body>
        <slot/> 
    </body>  
    <footer>
        <p>&copy; 2024 My Static Webpage. All rights reserved.</p>
    </footer>
</body>

<style>
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