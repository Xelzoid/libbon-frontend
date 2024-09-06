<script>
    export let photo = "";
    export let read = "";
    export let name = "";
</script>  

<div class="container">
    <div class="wrapper">
        <img src="{photo}" alt="photoava">
        <div class="description">
            <h3>{name}</h3>
            <p>{read}</p>
        </div>
    </div>
</div>

<style>
    .container{
        width: 400px;
        height: 200px;
        background-color: antiquewhite;
        border-radius: 20px;
    }
    .wrapper{
        display: flex;
        margin: 15px;
    }
</style>