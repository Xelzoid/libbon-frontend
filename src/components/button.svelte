
<script>
    export let label = "";
</script>

<button class="container">
    <label>{label}</label>
</button>

<style>
    .container{
        background-color: green;
        border-radius: 5px;
        width: 130px;
        height: 30px;
        transition: 0.1s;
        opacity: 0.9;
    }
    .container:hover{
        opacity: 1;
    }
</style>