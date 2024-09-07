<script>
  import BookCard from "../components/BookCard.svelte";
	import Catalog from "../components/Catalog.svelte";
  import News from "../components/News.svelte";
	import Search from "../components/Search.svelte";
  import Mainprofile from "../components/Mainprofile.svelte";
  import Button from "../components/Button.svelte";
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

  let user = 
    {
      name: "Mukanov Amir",
      read: "12",
      photo: "",
    };
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/users/me");
      if (!response.ok) {
          throw new Error("Failed to fetch user info");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
  });
</script>

<div class="container">
  <Search/>
  <hero>
    <News/>
    <Mainprofile 
      name={user.name} 
      read={user.read} 
      photo={user.photo} 
    />
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
  <Catalog/>
</div>

<style>
  .container{
    margin-left: 10%;
    margin-right: 5%;
  }
  hero {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>


