<script>
  import BookCard from "../../../components/CardBook.svelte";
	import Catalog from "../../../components/Catalog.svelte";
	import Search from "../../../components/Search.svelte";
  import Footer from "../../../components/Footer.svelte";
  import { onMount } from "svelte";
    let books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "",
    }
  ];
  let total = 0, page = 1, totalPages = 0;
  const limit = 20;
  onMount(async () => {
    try {
      const url = new URL(window.location.href);
      page = Number(url.pathname.split('/').pop()) || 1;

      const offset = (page - 1) * limit;

      const response = await fetch(`/api/books?limit=${limit}&offset=${offset}`);
      const data = await response.json();

      books = data.books;
      total = data.total;
      totalPages = Math.ceil(total / limit);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  });
  function goToPage(newPage) {
    window.location.href = `/books/${newPage}`;
  }
</script>

<div class="container">
  <hero>
    <Search/>
    <Catalog/>
  </hero>  
  <div class="card-container">
    {#each books as book}
      <BookCard 
        title={book.title}
        author={book.author}
        coverImage={book.coverImage}
      />
    {/each}
  </div>
  <div class="pagination">
    {#if page > 1}
      <button on:click={() => goToPage(page - 1)}>Previous</button>
    {/if}
  
    <span>Page {page} of {totalPages}</span>
  
    {#if page < totalPages}
      <button on:click={() => goToPage(page + 1)}>Next</button>
    {/if}
  </div>
</div>
<Footer/>

<style>
  .container{
    margin-left: 10%;
    margin-right: 5%;
  }
  hero {
    margin-top: 20px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 20px;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>

