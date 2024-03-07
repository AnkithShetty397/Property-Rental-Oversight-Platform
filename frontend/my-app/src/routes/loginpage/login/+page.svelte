<script>
    import { goto } from '$app/navigation';
    import {user_id, user_type, setUserId, setUserType} from "$lib/global"
    let email = '';
    let password = '';
    let type = 'user'; 

    function loginto(){
        if(type==="user"){
            goto('/loginpage/components/user')
        }else if(type==="employee"){
            goto('/loginpage/components/employee')
        }else if(type==="owner"){
            goto('/loginpage/components/owner')
        }else if(type==="admin"){
            goto('/loginpage/components/admin')
        }
    }

    async function handleLogin() {
        try {
            const response = await fetch('YOUR_BACKEND_URL', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    type: type
                })
            });

            if (response.ok) {
                const res = await response.json();
                setUserId(res.user_id)
                setUserType(type)
                if(type==="manager"){
                    goto('/employee')
                }else{
                    goto('/home') 
                }
            }
            if(!response.ok){
                alert('Log-in failed')
                throw new Error('Login failed');
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
</script>

<div class="login-container">
    <h2>Login</h2>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} placeholder="Enter your email" style="width: 880px;">

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} placeholder="Enter your password" style="width: 880px;">

    <label for="type">Type:</label>
    <select id="type" bind:value={type}>
        <option value="user">User</option>
        <option value="employee">Employee</option>
        <option value="owner">Owner</option>
        <option value="admin">Admin</option>
    </select>

    <button on:click={loginto}>Login</button>   
</div>

<style>
    .login-container {
        width: 900px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #f9f9f9;
    }

    .login-container h2 {
        margin-bottom: 20px;
        text-align: center;
    }

    .login-container label {
        display: block;
        margin-bottom: 5px;
    }

    .login-container input[type="email"],
    .login-container input[type="password"],
    .login-container select {
        width: 100%; /* Changed width to 100% */
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .login-container button {
        width: 100%; /* Changed width to 100% */
        padding: 10px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-container button:hover {
        background-color: #0056b3;
    }
</style>



  