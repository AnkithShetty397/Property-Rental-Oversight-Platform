<script>
    import { goto } from "$app/navigation";

    function handleButton(){
        goto('/user/')
    }
</script>
<body>
    <div class="container">
        <div class="content">
            <h2>Welcome to Our House Rental Website</h2>
            <p>Thank you for visiting! Here, you'll find a wide selection of houses available for rent.</p>
            <p>Whether you're looking for a cozy apartment, a spacious family home, or a luxurious villa, we've got you covered.</p>
            <p>Feel free to explore our listings and discover the perfect home for you and your family. If you have any questions or need assistance, our team is here to help.</p>

            <button on:click={handleButton}>Contact Us</button>
        </div>
    </div>
</body>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
    }
    .container {
        display: flex;
        justify-content: center;
        height: 456px;
    }
    .content {
        background-color: #fff;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 1000px;
    }
    h2 {
        color: #333;
        margin-bottom: 20px;
    }
    p {
        color: #666;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
