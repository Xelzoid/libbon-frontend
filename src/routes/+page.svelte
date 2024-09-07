<script>
  import CardBook from "../components/CardBook.svelte";
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
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    }
  ];

  let user = 
    {
      name: "Mukanov Amir",
      read: "12",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
      id: '0'
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
    const response = await fetch(`/api/get_user_library?user_id=${user.id}`);
    const data = await response.json();
    books = data.books;
  });
</script>

<div class="container">
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
      <CardBook 
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