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