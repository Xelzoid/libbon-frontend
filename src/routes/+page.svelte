<script>
  import BookCard from "../components/BookCard.svelte";
  import News from "../components/News.svelte";
  import Mainprofile from "../components/Mainprofile.svelte";
  import Button from "../components/Button.svelte";
  import Bookprivate from "../components/Bookprivate.svelte";
    
    let books_private = [{
        name: "bool",
        author: "Bil",
        description: "bil's book",
    }]
    

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

  let buttons = [
    {
      label: "click me",
    }
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
  <div class="card-container">
    {#each books as book}
      <BookCard 
        title={book.title} 
        author={book.author} 
        coverImage={book.coverImage} 
      />
    {/each}
    {#each buttons as button}
      <Button 
        label={button.label} 
      />
    {/each}
    {#each books_private as bookpr}
      <Bookprivate 
        name={bookpr.name} 
        author={bookpr.author} 
        description={bookpr.description} 
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


