<script>
  import BookCard from "../components/BookCard.svelte";
  import News from "../components/News.svelte";

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
</script>

<div class="container">
  <News/>
  <div class="card-container">
    {#each books as book}
      <BookCard 
        title={book.title} 
        author={book.author} 
        coverImage={book.coverImage} 
      />
    {/each}
  </div>
</div>

<style>
  .container{
    margin-left: 10%;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
