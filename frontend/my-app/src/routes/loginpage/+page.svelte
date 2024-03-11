<script>
    import { goto } from "$app/navigation";
    
    function goToLogin() {
        goto("/loginpage/login");
    }
    
    function goToCreateAccount() {
        goto("/loginpage/createacc");
    }
</script>

<div class="container">
    <h2>Login or Create Account</h2>
    <button on:click={goToLogin}>Login</button>
    <button on:click={goToCreateAccount}>Create Account</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 24px;
        color: #333;
    }

    button {
        padding: 10px 20px;
        margin: 10px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background-color: #007bff;
        color: #fff;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>
