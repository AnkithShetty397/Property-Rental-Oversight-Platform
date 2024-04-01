<script>
    import { goto } from "$app/navigation";

    let name=""
    let email=""
    let message=""
    function handleButton(){
        name=""
        email=""
        message=""
    }
</script>

<body>
    <div class="content">
        <h2>About Us</h2>
        <p>Welcome to our dynamic webpage created with Svelte! We take pride in crafting this platform using the powerful capabilities of Svelte, alongside Node.js for the backend infrastructure. Our team has worked diligently to ensure a seamless user experience while harnessing the capabilities of both MySQL and MongoDB databases to store and manage data efficiently.</p>
        <p>With a passion for innovation and a dedication to excellence, we've designed this website to meet your needs and exceed your expectations. Whether you're browsing for information, interacting with dynamic content, or engaging with our services, we strive to deliver a smooth and enjoyable experience.</p>
        <p>At our core, we believe in the transformative power of technology to drive positive change. Through continuous improvement and a commitment to quality, we aim to create meaningful connections and deliver value to our users.</p>
        <p>Thank you for visiting us, and we look forward to serving you on our journey of exploration and innovation.</p>
        <h3>Contact Us</h3>
        <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: 123 Street Name, City, India</li>
        </ul>

        <h3>Send us a message</h3>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" bind:value={name} required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" bind:value={email} required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" bind:value={message} required></textarea>

            <button type="submit" on:click={handleButton}>Send Message</button>
        </form>
    </div>
</body>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f0f0f0;
    }

    .content {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px auto;
        max-height: 475px;
        overflow-y: auto;
        width: 1150px;
    }

    h2 {
        color: #333;
    }

    p {
        color: #666;
        margin-bottom: 10px;
    }

    h3 {
        color: #333;
        margin-top: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 5px;
    }

    form {
        margin: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="email"],
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 10px;
    }

    textarea {
        resize: vertical;
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