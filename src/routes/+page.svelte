<script>
  import CardBook from "../components/CardBook.svelte";
  import CreateClub from "../components/CreateClub.svelte";
	// @ts-ignore
	import Catalog from "../components/Catalog.svelte";
  import News from "../components/News.svelte";
	// @ts-ignore
	import Search from "../components/Search.svelte";
  import Mainprofile from "../components/Mainprofile.svelte";
  // @ts-ignore
  import Button from "../components/Button.svelte";
  import { onMount } from "svelte";
    // @ts-ignore
    let clubs = [];
    let books = [{
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    }];
  let user = {
      name: "Mukanov Amir",
      read: "12",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
      id: '0'
    };
  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user/me");
      if (!response.ok) {
          throw new Error("Failed to fetch user info");
      }
      user = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
    try {
      const response = await fetch(`/api/get_user_library?user_id=${user.id}`);
      if (!response.ok) {
          throw new Error("Failed to fetch library");
      }
      const data = await response.json();
      books = data.books;
    } catch (err) {
      // @ts-ignore
      alert(err.message);
    }
    try {
      const response = await fetch(`/api/social/my-clubs`);
      if (!response.ok) {
          throw new Error("Failed to fetch clubs");
      }
      // @ts-ignore
      const data = await response.json();
      clubs = data.clubs;
    } catch (err) {
      // @ts-ignore
      alert(err.message);
    }


  });
</script>

<div class="container">
  <CreateClub/>
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