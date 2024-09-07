
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
        transition: 0.2s;
    }
    p {
        padding: 0px 30px;
    }
    button:hover{
        transform: translateY(2px);
    }
</style>