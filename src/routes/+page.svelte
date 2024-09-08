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
      coverImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "https://m.media-amazon.com/images/I/61NAx5pd6XL._AC_UF1000,1000_QL80_.jpg",
    }
  ];

  let user, loading = false;
  onMount(async () => {
    const token = localStorage.getItem('token');
    user = FetchMe();
    loading = false;
  });
  let clubs = [{
    name:"Amir's Club",membercount: "12", photo:''
  },
  {name:"Amir's Club",membercount: "12", photo:  ''  
}]
  user = { photo: "https://images.immediate.co.uk/production/volatile/sites/3/2024/01/avatar-the-last-airbender-cdc2b79.jpg?resize=1200%2C630", name: 'Amir', read: "12"}
</script>
{#if loading}
<p>Loading </p>
{:else}
<div class="mainsection">
  <div class="container">
    <CreateClub/>
    <hero>
      <div>
      <Slide/></div>
      <Mainprofile 
        name={user.name} 
        read={user.read} 
        photo={user.photo} 
      />
    </hero>  
  </div>
</div>
<div class="book_section">
  <div class="container">
  <News/></div>
</div>
<div class="container">
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
  .book_section{
    background-color:#f2f2f2;
    padding-top: 20px;
    padding-bottom: 60px;
  }
  .mainsection{
    background-color: #6969B3;
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