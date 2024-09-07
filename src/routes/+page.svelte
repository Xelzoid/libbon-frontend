<script>
  import BookCard from "../components/BookCard.svelte";
	import Catalog from "../components/Catalog.svelte";
  import News from "../components/News.svelte";
	import Search from "../components/Search.svelte";
  import Mainprofile from "../components/Mainprofile.svelte";
  import Button from "../components/Button.svelte";
  import ClubCard from "../components/ClubCard.svelte";

  import { onMount } from "svelte";

    let books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/m/a/maas_sundefined_dzhundefinedun_1450262_11.png",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    },{
    title: "1984",
      author: "George Orwell",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    },{title: "1984",
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
      clubs = await response.json();
    } catch (err) {
      // @ts-ignore
      error = err.message;
    }
    const response = await fetch(`/api/get_user_library?user_id=${user.id}`);
    const data = await response.json();
    books = data.books;
  });
  let clubs = [{
    name:"Amir's Club",membercount: "12", photo: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/m/a/maas_sundefined_dzhundefinedun_1450262_11.png"
  },
  {name:"Amir's Club",membercount: "12", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s"    
  },
  ]
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
  <h1>Избранные Книги</h1>
  <div class="card-container">
    {#each books as book}
      <BookCard 
        title={book.title}
        author={book.author}
        coverImage={book.coverImage}
      />
    {/each}
  </div>
  <h1>Ваши Клубы</h1>
  <div class="card-container">
    {#each clubs as club} 
        <ClubCard 
            name={club.name} 
            membercount={club.membercount} 
            photo={club.photo} 
        />
    {/each}
</div>
</div>

<style>
  .container{
    max-width: 1100px;
    margin: auto;
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
    justify-content: left;
  }
</style>