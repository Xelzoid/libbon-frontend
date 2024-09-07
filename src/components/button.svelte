
<script>
    export let label = "";
</script>

<button>
    <p>{label}</p>
</button>

<style>
    button {
        background-color: lightblue;
        border-radius: 5px;
        transition: 0.1s;
        min-height: 20px;
        opacity: 0.9;
    }
    p {
        padding: 0px 30px;
    }
    button:hover{
        opacity: 1;
    }
</style>