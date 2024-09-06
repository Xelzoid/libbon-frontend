<script>

    import { onMount } from "svelte";
    // @ts-ignore
    let news = [];
    // @ts-ignore
    let error = null;

    onMount(async () => {
        try {
            const response = await fetch("http://localhost:8000/news");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            news = await response.json();
        } catch (err) {
            // @ts-ignore
            error = err.message;
        }
    });

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
        margin: auto;
    }
    .content{
        
    }
    .book_img{
        height: 650px;
        width: 300px;
        object-fit: cover;
    }
    h1{
        font-weight: bold;
        font-size: x-large;
    }
</style>