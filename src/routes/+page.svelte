<script>
  import CardBook from "../components/CardBook.svelte";
  import CreateClub from "../components/CreateClub.svelte";
	// @ts-ignore
  import News from "../components/News.svelte";
	// @ts-ignore
  import { FetchMe } from "$lib/utils";
  import Mainprofile from "../components/Mainprofile.svelte";
  import CardClub from "../components/CardClub.svelte";

  import { onMount } from "svelte";
	import Footer from "../components/Footer.svelte";
	import Slide from "../components/Slide.svelte";
    // @ts-ignore
    let books = [{
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/m/a/maas_sundefined_dzhundefinedun_1450262_11.png",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkYXYpe5vuWCc8Jw0FtGtLo3x_-_LI2btEA&s",
    }
  ];

  let user, loading = true;
  onMount(async () => {
    const token = localStorage.getItem('token');
    user = FetchMe();
    loading = false;
  });
  let clubs = [{
    name:"Amir's Club",membercount: "12", photo:''
  },
  {name:"Amir's Club",membercount: "12", photo:  ''  
  },
  ]
</script>
{#if loading}
<p>Loading </p>
{:else if error}
<p>Error: check console</p>
{:else}
<div class="container">
  <CreateClub/>
  <hero>
    <Mainprofile 
      name={user.name} 
      read={user.read} 
      photo={user.photo} 
    />
  </hero>  
  <News/>

  <h1>Избранные Книги</h1>
  <div class="card-container">
    {#each books as book}
      <CardBook 
        title={book.title}
        author={book.author}
        coverImage={book.coverImage}
      />
    {/each}
  </div>
  <h1>Ваши Клубы</h1>
  <div class="card-container">
    {#each clubs as club} 
        <CardClub 
            name={club.name} 
            membercount={club.membercount} 
            photo={club.photo} 
        />
    {/each}
  </div>
</div>
{/if}
<Footer/>


<style>
  .mainsection{
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
    padding-bottom: 30px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.2);
    padding-top: 20px;
  }
  .container{
    max-width: 1100px;
    margin: auto;
  }
  hero {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
</style>