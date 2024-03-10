<script>
    import { goto } from '$app/navigation';
    import { loc, setLoc } from '$lib/global.js'

    let param = ""

    function handleClick() {
        console.log(loc)
        setLoc(param);
        console.log(loc);
        console.log("search button clicked");
        goto('/loginpage/components/user/search/search1')
    }
</script>

<body>
    <div class="search-container">
        <input type="text" placeholder="Search..." bind:value={param}>
        <button type="submit" on:click={handleClick} ><i class="fa fa-search"></i>Search</button>
    </div>
    <div>
        <slot/>
    </div>
</body>

<style>
    .search-container {
        display: flex;
        border-radius: 25px 0 0 25px; 
        overflow: hidden;
        height: 50px;
        width: 1100px;
        margin: auto auto 20px 5px;
    }
    
    .search-container input[type="text"] {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 25px 0 0 25px;
        font-size: medium;
        width: 1100px;
    }
    
    .search-container button {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 0 25px 25px 0;
        cursor: pointer;
        width: 100px;
        font-size: medium;
    }
</style>

  