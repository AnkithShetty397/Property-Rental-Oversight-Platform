<script>
    import {block_no} from '$lib/global.js'
</script>
<body>
    {#if block_no === "0"}
        <div><b>Global Chat</b></div>
    {:else}
        <div><b><center>Block Hub (Block No: {block_no})<center></b></div>
    {/if}
    <slot/>
</body>