<script>
    import Button from "./Button.svelte";
    export let photo = "";
    export let read = "";
    export let name = "";
    
    let button = {
      label: "start",
    }
</script>  



<div class="container">
    <div class="wrapper">
        <div class="ava_btn">
            <img src="{photo}" alt="photoava" class="photo">
        </div>
        <div class="description">
            <h3>{name}</h3>
            <p>Reading: {read}</p>
        </div>
    </div>
</div>

<style>
    .container{
        width: 400px;
        height: 160px;
        background-color: antiquewhite;
        border-radius: 20px;
        
        
    }
    .wrapper{
        display: flex;
        margin: 15px;
        align-items: center;
    }
    .ava_btn{
        display: block;
        width: 130px;
        margin-right: 50px;

    }
    .photo{
        object-fit: cover;
        border-radius: 100%;
        width: 130px;
        height: 130px;
    }
    
</style>