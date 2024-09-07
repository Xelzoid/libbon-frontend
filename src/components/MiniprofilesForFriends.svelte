<script>
    export let name="";
    export let read="";
    export let photo="";
</script>

<a href="/profile/0" class="container ">
    <div class="content">
        <img src="{photo}">
        <h3>{name}</h3>
        <p>книг: {read}</p>
    </div>  
</a>

<style>
    a{
        text-decoration: none;
        color: black;
        transition: 0.2s;
    }
    a:hover{
        transform: translateY(-5px);
        background-color: #D0C0A7;
    }
    img{
        margin-top: 10px;
        border-radius: 100%;
        width: 75px;
        height: 75px;
        object-fit: cover;
    }
    .container{
        width: 130px;
        height: 170px;
        background-color: #DBD3C6;
        border-radius: 20px;
        margin-top: 5%;
        margin-right: 40px;
        box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);

    }
    .content{
        display: flex;
        margin: auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p{
        margin: 0;
    }
</style>