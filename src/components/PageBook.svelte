<script>
    export let name = "Name", author = 'Author', dop = '1900/01/01', 
    description = 'Description', picture = '', stars = 0;
    
</script>

<div class="container">
    <img class="book_img" src="{picture}">
    <div class="content">
        <h1>{name}</h1>
        <h3>{author}</h3>
        <time datetime="{dop}">{dop}</time>
        <p>{description}</p>
        <p>{stars}</p>
    </div>
</div>

<style>
    .container{
        display: flex;
        
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