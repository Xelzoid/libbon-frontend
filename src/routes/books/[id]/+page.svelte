
<script>
    import { onMount } from "svelte";
    import Bookprivate from "../../../components/Bookprivate.svelte";
	import BookCard from "../../../components/BookCard.svelte";
    // @ts-ignore
    let news = [];
    // @ts-ignore
    let error = null;
    let book;
    onMount(async () => {
        try {
            const response = await fetch("http://localhost:8000/news");
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            book = await response.json();
        } catch (err) {
            // @ts-ignore
            error = err.message;
        }
    });
    
  book = {title:"book's",author:"",description:"",photo:""};

</script>


<Bookprivate
name = {book.title};
author = {book.author};
description = {book.description};
photo = {book.photo}
/>



