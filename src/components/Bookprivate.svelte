<script>
    export let name = "";
    export let author = "";
    export let description = "";
    export let photo = "";
</script>

<div class="container">
    <img class="book_img" src="{photo}">
    <div class="content">
        <h1>{name}</h1>
        <h3>{author}</h3>
        <p>{description}</p>
    </div>
</div>

<style>
    .container{
        max-width: 1000px;
        display: flex;
        margin-left: 20%;
        margin-top: 5%;
    }
    .content{
        margin-left: 15%;
    }
    .book_img{
        height: 400px;
        width: 300px;
        object-fit: cover;
    }
    h1{
        font-weight: bold;
        font-size: 50px;
    }
    h3{
        font-size: 30px;
    }
</style>