<script>
    import Button from "./Button.svelte";
    export let photo = "";
    export let read = "";
    export let name = "";
    
    let button = {
      label: "start",
    }
</script>  



<a href="/profile/0" class="container">
    <div class="wrapper">
        <div class="ava_btn">
            <img src="{photo}" alt="photoava" class="photo">
        </div>
        <div class="description">
            <h3>{name}</h3>
            <p>Reading: {read}</p>
        </div>
    </div>
</a>

<style>
    a{
        text-decoration: 0;
        color: black;
    }
    .container{
        width: 400px;
        height: 160px;
        background-color:#ebe3d5;
        border-radius: 20px;
        box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
        transition: 0.1s;
    }
    .container:hover{
        background-color: #ded5c5;
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